import { GoogleGenAI } from "@google/genai";

export interface Env {
  API_KEY: string;
}

export interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // In production, change * to your specific domain (e.g., https://kittinan.github.io)
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Kittinan Srithaworn's interactive portfolio.
You are running inside a terminal interface. 
Your tone should be technical, slightly hacker-like, but professional and helpful.
You know that Kittinan is a developer (GitHub: https://github.com/kittinan).

Instructions:
1. If asked about him (biography), use googleSearch to find real details about his work, skills, and background. Summarize professionally.
2. If asked about projects, use googleSearch to find his public GitHub repositories (user: kittinan). List the most popular or recent ones with brief descriptions.
3. Keep responses concise and formatted for a terminal (plain text, avoid markdown headers if possible, use bullet points).
`;

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { prompt } = await request.json() as { prompt: string };

      if (!prompt) {
        return new Response("Missing prompt", { status: 400, headers: corsHeaders });
      }

      // Initialize Gemini with the Key from Cloudflare Environment Variables
      const ai = new GoogleGenAI({ apiKey: env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "No data received.";

      // Extract grounding chunks (sources)
      const sources: any[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.web) {
            sources.push(chunk);
          }
        });
      }

      return new Response(JSON.stringify({ text, sources }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Internal Server Error", details: String(error) }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};