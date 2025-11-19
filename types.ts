export enum LineType {
  Input = 'INPUT',
  Output = 'OUTPUT',
  Error = 'ERROR',
  System = 'SYSTEM',
}

export interface TerminalLine {
  id: string;
  type: LineType;
  content: React.ReactNode;
  timestamp?: string;
}

export interface Command {
  command: string;
  description: string;
  action: (args: string[]) => Promise<void> | void;
  hidden?: boolean;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}