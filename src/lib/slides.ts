import {
  FileCode2,
  SquareFunction,
  Terminal,
  TextCursorInput,
  TreePine,
  type LucideIcon,
} from 'lucide-react';

export interface SlideContent {
  title: string;
  icon: LucideIcon;
  description: string;
  imageUrl?: string;
}

export const homePageSlide = [
  {
    title: 'Multibuffer editing',
    icon: FileCode2,
    description: 'Multibuffers compose excerpts from across the codebase in one editable surface.',
    imageUrl: '/video-posters/lsp.webp',
  },
  {
    title: 'Code Intelligence',
    icon: SquareFunction,
    description: 'AI-powered code suggestions and auto-completion for faster development.',
    imageUrl: '/video-posters/lsp.webp',
  },
  {
    title: 'Collaborative Editing',
    icon: TreePine,
    description: 'Real-time collaboration features for team programming sessions.',
    imageUrl: '/video-posters/lsp.webp',
  },
  {
    title: 'Version Control',
    icon: Terminal,
    description: 'Integrated version control system for seamless code management.',
    imageUrl: '/video-posters/lsp.webp',
  },
  {
    title: 'Performance Profiling',
    icon: TextCursorInput,
    description: 'Built-in tools for analyzing and optimizing code performance.',
    imageUrl: '/video-posters/lsp.webp',
  },
] satisfies SlideContent[];
