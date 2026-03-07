export interface Skill {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: 'smart-screenshot',
    icon: '📸',
    name: 'Smart Screenshot',
    description:
      'Select any screen region — AI-numbered UI elements copied straight to clipboard.',
  },
  {
    id: 'prompt-optimizer',
    icon: '✨',
    name: 'Prompt Optimizer',
    description:
      'Turn rough thoughts into structured, context-aware prompts via Groq in under 200ms.',
  },
  {
    id: 'voice-input',
    icon: '🎙',
    name: 'Voice Input',
    description:
      'Speak your prompt — transcribed via Whisper and ready to paste into any AI tool.',
  },
  {
    id: 'agent-monitor',
    icon: '🤖',
    name: 'Agent Monitor',
    description:
      'See all running AI agents (Claude Code, Cursor, Aider) with live CPU and token metrics.',
  },
  {
    id: 'preview-window',
    icon: '🖥',
    name: 'Preview Window',
    description:
      'Float a live preview with CSS injection for instant visual iteration.',
  },
  {
    id: 'workspace-snapshots',
    icon: '📐',
    name: 'Workspace Snapshots',
    description:
      'Save your entire window layout and restore it in one click.',
  },
];
