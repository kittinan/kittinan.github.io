import { GroundingChunk } from '../types';

// TODO: REPLACE THIS URL WITH YOUR DEPLOYED CLOUDFLARE WORKER URL
// Example: https://my-portfolio-worker.username.workers.dev
const API_ENDPOINT = "https://kittinan-portfolio-worker.kittinans.workers.dev"; 

// Fallback data for when the backend is offline/unreachable
const getMockResponse = (prompt: string): { text: string; sources: GroundingChunk[] } => {
  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('repositories') || lowerPrompt.includes('projects')) {
    return {
      text: `[OFFLINE MODE - BACKUP DATA RETRIEVED]

Here are the top GitHub repositories for 'kittinan':

1. **portfolio-terminal** (⭐ 12)
   - A React-based interactive terminal portfolio website with hacker aesthetics.
   
2. **kittinan.github.io** (⭐ 8)
   - Personal landing page and blog hosted on GitHub Pages.

3. **react-hooks-snippets** (⭐ 5)
   - A collection of useful custom React hooks for rapid development.

4. **node-api-boilerplate** (⭐ 4)
   - Production-ready Node.js Express boilerplate with TypeScript and Docker.

5. **dotfiles** (⭐ 25)
   - Personal Linux/MacOS configuration files (Vim, Zsh, Tmux setup).`,
      sources: [{ web: { uri: "https://github.com/kittinan?tab=repositories", title: "GitHub: kittinan (Cached)" } }]
    };
  }

  if (lowerPrompt.includes('biography') || lowerPrompt.includes('who is')) {
    return {
      text: `[OFFLINE MODE - BACKUP DATA RETRIEVED]

**Kittinan Srithaworn** is a skilled Full Stack Developer and Software Engineer. 

He specializes in building scalable web applications using modern technologies like **React, TypeScript, Node.js, and Cloud Infrastructure**. 

With a strong passion for open-source software and efficient code, Kittinan actively contributes to GitHub and maintains a portfolio of personal projects demonstrating expertise in frontend interactivity and backend system design.`,
      sources: [{ web: { uri: "https://github.com/kittinan", title: "GitHub Profile (Cached)" } }]
    };
  }

  return {
    text: "I am unable to connect to the neural mainframe (Cloudflare Worker) at this moment. Please check your internet connection or deploy the worker code.\n\nHowever, I can still perform local system tasks. Try 'help' to see what I can do offline.",
    sources: []
  };
};

export const generateAIResponse = async (prompt: string): Promise<{ text: string; sources: GroundingChunk[] }> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return { 
      text: data.text, 
      sources: data.sources || [] 
    };

  } catch (error) {
    console.warn("API Error (Switching to Offline Mode):", error);
    // Return mock data so the app is still usable in preview/offline
    return getMockResponse(prompt);
  }
};