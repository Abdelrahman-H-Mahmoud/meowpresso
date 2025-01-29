'use client';

import { useState } from 'react';
import { HtmlRenderer } from './HtmlRenderer';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  const [isMarkdown] = useState(() => {
    return content.trim().startsWith('#') || content.includes('\n-') || content.includes('\n#');
  });

  return isMarkdown ? (
    <MarkdownRenderer content={content} className={className} />
  ) : (
    <HtmlRenderer content={content} className={className} />
  );
} 