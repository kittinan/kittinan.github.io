import React, { useState, useEffect, useRef } from 'react';
import { TerminalLine, LineType, Command } from './types';
import { generateAIResponse } from './services/geminiService';
import Scanline from './components/Scanline';

// Theme definitions
const THEMES = {
  green: { text: 'text-green-500', glow: 'text-green-400', border: 'border-green-900', placeholder: 'placeholder-green-900', caret: 'caret-green-500' },
  amber: { text: 'text-amber-500', glow: 'text-amber-400', border: 'border-amber-900', placeholder: 'placeholder-amber-900', caret: 'caret-amber-500' },
  blue: { text: 'text-cyan-500', glow: 'text-cyan-400', border: 'border-cyan-900', placeholder: 'placeholder-cyan-900', caret: 'caret-cyan-500' },
  red: { text: 'text-red-500', glow: 'text-red-400', border: 'border-red-900', placeholder: 'placeholder-red-900', caret: 'caret-red-500' },
  purple: { text: 'text-purple-500', glow: 'text-purple-400', border: 'border-purple-900', placeholder: 'placeholder-purple-900', caret: 'caret-purple-500' },
};

type ThemeKey = keyof typeof THEMES;

const App: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('green');
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bootRan = useRef(false);

  const theme = THEMES[currentTheme];

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isBooting]);

  // Focus input on click
  const handleContainerClick = () => {
    if (!isProcessing && !isBooting) {
      inputRef.current?.focus();
    }
  };

  const addHistory = (content: React.ReactNode, type: LineType = LineType.Output) => {
    setHistory(prev => [...prev, {
      id: Math.random().toString(36).substring(7),
      type,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour12: false })
    }]);
  };

  // Boot sequence effect
  useEffect(() => {
    if (bootRan.current) return;
    bootRan.current = true;

    const runBootSequence = async () => {
      const bootLogs = [
        "[    0.000000] Initializing KERNEL...",
        "[    0.000211] CPU0: Intel(R) Core(TM) i9-13900K CPU @ 5.80GHz detected",
        "[    0.004522] Console: colour dummy device 80x25",
        "[    0.004566] Calibrating delay loop... 5984.00 BogoMIPS (lpj=2992000)",
        "[    0.122344] Memory: 65536MB available (kernel code: 2048k)",
        "[    0.123555] Virtualization: VMX supported",
        "[    0.455611] TCP: cubic registered",
        "[    0.988233] NET: Registered protocol family 17",
        "[    1.233444] Loading KITTINAN_OS modules...",
        "[    1.455666] Mounting root file system...",
        "[  OK  ] Mounted root file system",
        "[  OK  ] Started System Logging Service",
        "[  OK  ] Started Network Manager",
        "[  OK  ] Reached target Multi-User System",
        "Connecting to Global Information Grid..."
      ];

      for (const log of bootLogs) {
        addHistory(log, LineType.System);
        await new Promise(r => setTimeout(r, Math.random() * 100 + 20));
      }

      // Fetch Real GitHub Stats
      addHistory("[ NETWORK ] Establishing Secure Connection to GitHub API...", LineType.System);
      
      try {
        const { text } = await generateAIResponse("Find the exact current number of GitHub followers and total stars across all repositories for user 'kittinan'. Return ONLY a single line in this format: 'Followers: <number> | Total Stars: <number> | Top Lang: <language>'. Do not include any other text.");
        
        const cleanText = text.replace(/^.*?(Followers:)/i, '$1'); 
        addHistory(`[ NETWORK ] SUCCESS: ${cleanText}`, LineType.Output);
      } catch (e) {
        addHistory("[ NETWORK ] WARNING: Offline Mode - Unable to fetch live stats.", LineType.Error);
      }

      await new Promise(r => setTimeout(r, 500));
      addHistory("System Initialization Complete.", LineType.System);
      addHistory("Welcome to KITTINAN_OS v2.0.1", LineType.Output);
      addHistory("Type 'help' to view available commands.", LineType.Output);
      
      setIsBooting(false);
    };

    runBootSequence();
  }, []);

  const handleCommand = async (cmdString: string) => {
    const trimCmd = cmdString.trim();
    if (!trimCmd) return;

    addHistory(`visitor@kittinan:~$ ${trimCmd}`, LineType.Input);
    setInput('');
    setIsProcessing(true);

    const [cmdName, ...args] = trimCmd.split(' ');
    const command = commands.find(c => c.command === cmdName.toLowerCase());

    if (command) {
      try {
        await command.action(args);
      } catch (err) {
        addHistory(`Error executing ${cmdName}: ${err}`, LineType.Error);
      }
    } else {
      addHistory(`Command not found: ${cmdName}. Type 'help' for assistance.`, LineType.Error);
    }
    setIsProcessing(false);
    // Refocus after command execution
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
    // History navigation could be added here
  };

  // --- COMMANDS DEFINITION ---

  const commands: Command[] = [
    {
      command: 'help',
      description: 'List available commands',
      action: () => {
        const helpText = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
             {commands.filter(c => !c.hidden).map(c => (
               <div key={c.command} className="flex flex-col sm:flex-row">
                 <span className={`font-bold min-w-[100px] ${theme.glow}`}>{c.command}</span>
                 <span className="text-gray-400 opacity-80">- {c.description}</span>
               </div>
             ))}
          </div>
        );
        addHistory(helpText);
      }
    },
    {
      command: 'about',
      description: 'Display biography (Live Search)',
      action: async () => {
        addHistory("Initiating search query for 'Kittinan Srithaworn'...", LineType.System);
        const { text, sources } = await generateAIResponse("Who is Kittinan Srithaworn? Provide a professional biography highlighting his developer background and key skills.");
        
        addHistory(
            <div className="space-y-2">
                <div className="whitespace-pre-wrap opacity-90 leading-relaxed">{text}</div>
                {sources.length > 0 && (
                    <div className={`mt-2 pt-2 border-t ${theme.border} opacity-50`}>
                        <div className="text-xs mb-1">Sources:</div>
                        <ul className="list-disc pl-5">
                            {sources.map((s, i) => (
                                <li key={i}>
                                    <a href={s.web?.uri} target="_blank" rel="noopener noreferrer" className="hover:underline text-xs">
                                        {s.web?.title || s.web?.uri}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
      }
    },
    {
      command: 'projects',
      description: 'Fetch GitHub projects & stars',
      action: async () => {
        addHistory("Scanning GitHub repositories for user 'kittinan'...", LineType.System);
        const { text } = await generateAIResponse("Find the public GitHub repositories for user 'kittinan'. List the top 5 most popular ones. For each, provide the Name, Star Count (⭐), and a brief description. Format cleanly.");
        
        addHistory(
          <div className="space-y-4">
             <div className="whitespace-pre-wrap opacity-90">{text}</div>
            <div className="mt-2">
              <a href="https://github.com/kittinan?tab=repositories" target="_blank" rel="noreferrer" className="underline opacity-75 hover:opacity-100">
                [LINK] View all on GitHub
              </a>
            </div>
          </div>
        );
      }
    },
    {
      command: 'github',
      description: 'Open GitHub profile',
      action: () => {
        addHistory("Opening neural link to https://github.com/kittinan...", LineType.System);
        window.open('https://github.com/kittinan', '_blank');
      }
    },
    {
      command: 'ask',
      description: 'Ask the AI Assistant',
      action: async (args) => {
        if (args.length === 0) {
          addHistory("Usage: ask [question]. Example: ask what languages do you use?", LineType.Error);
          return;
        }
        const question = args.join(' ');
        addHistory(<span className="animate-pulse">Processing query...</span>, LineType.System);
        
        const { text, sources } = await generateAIResponse(question);
        
        addHistory(
            <div>
                <div className="whitespace-pre-wrap opacity-90">{text}</div>
                {sources.length > 0 && (
                    <div className="mt-2 text-xs opacity-50">
                        Sources: {sources.map(s => s.web?.title).join(', ')}
                    </div>
                )}
            </div>
        );
      }
    },
    {
      command: 'clear',
      description: 'Clear terminal history',
      action: () => {
        setHistory([]);
      }
    },
    {
        command: 'contact',
        description: 'Show contact info',
        action: () => {
            addHistory(
                <div className={`p-4 border ${theme.border} inline-block bg-opacity-10 bg-white`}>
                    <h3 className="text-lg font-bold mb-2">Contact Uplink</h3>
                    <p>GitHub: <a href="https://github.com/kittinan" className="hover:underline">@kittinan</a></p>
                    <p>Status: <span className="animate-pulse">Online</span></p>
                </div>
            )
        }
    },
    // --- GIMMICK COMMANDS ---
    {
        command: 'theme',
        description: 'Change color (green, amber, blue, red, purple)',
        action: (args) => {
            const color = args[0]?.toLowerCase();
            if (color && Object.keys(THEMES).includes(color)) {
                setCurrentTheme(color as ThemeKey);
                addHistory(`System theme updated to: ${color.toUpperCase()}`, LineType.System);
            } else {
                addHistory(`Usage: theme [green|amber|blue|red|purple]`, LineType.Error);
            }
        }
    },
    {
        command: 'neofetch',
        description: 'System information',
        action: () => {
            const logo = `
       .---.        User: visitor@kittinan
      /     \\       OS: KittinanOS v2.0
      | () () |      Kernel: 5.15.0-generic
       \\  ^  /       Uptime: ${(performance.now() / 60000).toFixed(2)} mins
        |||||        Shell: React-Term
        |||||        Resolution: ${window.innerWidth}x${window.innerHeight}
                     Theme: ${currentTheme}
            `;
            addHistory(<pre className={`text-xs sm:text-sm leading-tight font-bold ${theme.glow}`}>{logo}</pre>);
        }
    },
    {
        command: 'date',
        description: 'Show current datetime',
        action: () => {
            addHistory(new Date().toString());
        }
    },
    {
        command: 'whoami',
        description: 'Current user info',
        action: () => {
            addHistory("visitor@kittinan.github.io");
        }
    },
    {
        command: 'hack',
        description: 'Simulate a hacking sequence',
        action: async () => {
            const targets = ["Mainframe", "Firewall", "Database", "Satellite"];
            const target = targets[Math.floor(Math.random() * targets.length)];
            
            addHistory(`[+] Initializing brute-force attack on ${target}...`, LineType.System);
            await new Promise(r => setTimeout(r, 800));
            addHistory(`[+] Bypassing SSL encryption...`, LineType.System);
            await new Promise(r => setTimeout(r, 1200));
            
            // Fake progress bar
            let progress = "";
            const id = Math.random().toString();
            for(let i=0; i<=20; i++) {
                progress = "#".repeat(i) + "-".repeat(20-i);
                setHistory(h => [
                    ...h.filter(x => x.id !== id), 
                    { id, type: LineType.Output, content: `[${progress}] ${i*5}%` }
                ]);
                await new Promise(r => setTimeout(r, 100));
            }
            
            addHistory(`[+] Access Granted. Root privileges obtained.`, LineType.Output);
            addHistory(`[!] Just kidding. Don't hack people.`, LineType.System);
        }
    },
    // Easter Eggs & Hidden Commands
    {
        command: 'ls',
        description: 'List files',
        hidden: true,
        action: () => {
             addHistory("drwxr-xr-x  2 kittinan  staff   64B  projects/", LineType.Output);
             addHistory("-rw-r--r--  1 kittinan  staff  2.4K  biography.txt", LineType.Output);
             addHistory("-rw-r--r--  1 kittinan  staff  128B  contact_key.pub", LineType.Output);
             addHistory("-rwxr-xr-x  1 kittinan  admin  999B  hack.sh", LineType.Output);
        }
    },
    {
        command: 'cat',
        description: 'Read file',
        hidden: true,
        action: (args) => {
            if (args[0] === 'biography.txt') {
                commands.find(c => c.command === 'about')?.action([]);
            } else if (args[0] === 'contact_key.pub') {
                 commands.find(c => c.command === 'contact')?.action([]);
            } else if (args[0] === 'hack.sh') {
                 commands.find(c => c.command === 'hack')?.action([]);
            } else if (args.length > 0) {
                addHistory(`cat: ${args[0]}: Permission denied or file not found`, LineType.Error);
            } else {
                addHistory("Usage: cat [filename]", LineType.Output);
            }
        }
    },
    {
        command: 'sudo',
        description: 'Superuser do',
        hidden: true,
        action: () => {
            addHistory("visitor is not in the sudoers file. This incident will be reported.", LineType.Error);
        }
    }
  ];

  return (
    <div 
      className={`h-screen bg-[#050505] ${theme.text} font-mono p-4 md:p-6 relative overflow-hidden flex flex-col transition-colors duration-500`}
      onClick={handleContainerClick}
    >
      <Scanline />
      
      {/* Header / Top Bar */}
      <div className={`flex justify-between items-center mb-4 border-b-2 ${theme.border} pb-2 z-10 sticky top-0 bg-[#050505]/95 backdrop-blur transition-colors duration-500`}>
        <div className="flex items-center gap-2">
          <span className={`font-bold tracking-wider glow-text text-lg ${theme.glow}`}>KITTINAN_SRITHAWORN</span>
        </div>
        <div className={`flex items-center gap-4 text-xs md:text-sm font-bold opacity-80`}>
           <div className="hidden md:block">[SYS: ONLINE]</div>
           <div className="hidden md:block">[NET: SECURE]</div>
           <div>[LOC: TH]</div>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 z-10 overflow-y-auto pb-20">
        {history.map((line) => (
          <div key={line.id} className="mb-1 break-words">
            <div className="flex gap-3">
              <span className="text-gray-600 shrink-0 select-none text-xs pt-1">[{line.timestamp}]</span>
              <div className="w-full">
                {line.type === LineType.Input ? (
                   <span className={`font-bold text-white`}>{line.content}</span>
                ) : line.type === LineType.Error ? (
                   <span className="text-red-500 font-bold">{line.content}</span>
                ) : line.type === LineType.System ? (
                   <span className="opacity-60 italic text-sm">{line.content}</span>
                ) : (
                   <div className="">{line.content}</div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      {!isBooting && (
        <div className="z-20 sticky bottom-0 bg-[#050505] pt-2 pb-6">
          <div className={`flex items-center gap-2 text-lg border-t ${theme.border} pt-2 transition-colors duration-500`}>
            <span className={`${theme.glow} font-bold select-none text-nowrap`}>visitor@kittinan:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`bg-transparent border-none outline-none flex-1 ${theme.text} ${theme.placeholder} ${theme.caret}`}
              placeholder=""
              autoComplete="off"
              autoFocus
              disabled={isProcessing}
            />
            {isProcessing && <span className="animate-spin ml-2">|</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;