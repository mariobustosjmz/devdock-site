export interface Skill {
  id: string;
  icon: string;
  name: string;
  description: string;
  category?: string;
}

export const skills: Skill[] = [
  {
    id: 'smart-screenshot',
    icon: '📸',
    name: 'Smart Screenshot',
    description:
      'Select any screen region — AI-numbered UI elements copied straight to clipboard.',
    category: 'devdock',
  },
  {
    id: 'prompt-optimizer',
    icon: '✨',
    name: 'Prompt Optimizer',
    description:
      'Turn rough thoughts into structured, context-aware prompts via Groq in under 200ms.',
    category: 'devdock',
  },
  {
    id: 'voice-input',
    icon: '🎙',
    name: 'Voice Input',
    description:
      'Speak your prompt — transcribed via Whisper and ready to paste into any AI tool.',
    category: 'devdock',
  },
  {
    id: 'agent-monitor',
    icon: '🤖',
    name: 'Agent Monitor',
    description:
      'See all running AI agents (Claude Code, Cursor, Aider) with live CPU and token metrics.',
    category: 'devdock',
  },
  {
    id: 'preview-window',
    icon: '🖥',
    name: 'Preview Window',
    description:
      'Float a live preview with CSS injection for instant visual iteration.',
    category: 'devdock',
  },
  {
    id: 'workspace-snapshots',
    icon: '📐',
    name: 'Workspace Snapshots',
    description:
      'Save your entire window layout and restore it in one click.',
    category: 'devdock',
  },
  {
    id: 'audit',
    icon: '🔍',
    name: 'Audit',
    description: 'Technical quality audit for your frontend design.',
    category: 'diagnostic',
  },
  {
    id: 'critique',
    icon: '📋',
    name: 'Critique',
    description: 'UX and design review with actionable feedback.',
    category: 'diagnostic',
  },
  {
    id: 'normalize',
    icon: '📏',
    name: 'Normalize',
    description: 'Align your UI with design system conventions.',
    category: 'quality',
  },
  {
    id: 'polish',
    icon: '💎',
    name: 'Polish',
    description: 'Final pass before shipping — refine every detail.',
    category: 'quality',
  },
  {
    id: 'optimize',
    icon: '⚡',
    name: 'Optimize',
    description: 'Performance improvements for your frontend.',
    category: 'quality',
  },
  {
    id: 'harden',
    icon: '🛡',
    name: 'Harden',
    description: 'Error handling and edge case coverage.',
    category: 'quality',
  },
  {
    id: 'quieter',
    icon: '🔇',
    name: 'Quieter',
    description: 'Tone down bold designs for subtlety.',
    category: 'intensity',
  },
  {
    id: 'bolder',
    icon: '🔊',
    name: 'Bolder',
    description: 'Amplify timid designs with more visual impact.',
    category: 'intensity',
  },
  {
    id: 'clarify',
    icon: '💬',
    name: 'Clarify',
    description: 'Improve UX copy for clarity and precision.',
    category: 'adaptation',
  },
  {
    id: 'distill',
    icon: '🧪',
    name: 'Distill',
    description: 'Strip to essence — remove everything unnecessary.',
    category: 'adaptation',
  },
  {
    id: 'adapt',
    icon: '📱',
    name: 'Adapt',
    description: 'Adapt designs for different devices and contexts.',
    category: 'adaptation',
  },
  {
    id: 'animate',
    icon: '🎬',
    name: 'Animate',
    description: 'Add purposeful motion to your interface.',
    category: 'enhancement',
  },
  {
    id: 'colorize',
    icon: '🎨',
    name: 'Colorize',
    description: 'Add strategic color to guide attention.',
    category: 'enhancement',
  },
  {
    id: 'delight',
    icon: '🌟',
    name: 'Delight',
    description: 'Add personality and delightful micro-interactions.',
    category: 'enhancement',
  },
  {
    id: 'teach-impeccable',
    icon: '🎓',
    name: 'Teach Impeccable',
    description: 'One-time project context gathering for better results.',
    category: 'system',
  },
  {
    id: 'extract',
    icon: '🧩',
    name: 'Extract',
    description: 'Create reusable design system elements.',
    category: 'system',
  },
  {
    id: 'onboard',
    icon: '👋',
    name: 'Onboard',
    description: 'Design onboarding flows and empty states.',
    category: 'system',
  },
  {
    id: 'frontend-design',
    icon: '🎯',
    name: 'Frontend Design',
    description: 'Enhanced frontend design skill with curated patterns and anti-patterns.',
    category: 'system',
  },
];
