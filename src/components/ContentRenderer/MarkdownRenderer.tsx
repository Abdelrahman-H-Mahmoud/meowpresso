import ReactMarkdown , { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const components: Components = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-brown-600 pl-4 italic my-4">{children}</blockquote>
  ),
  
  code: ({ children })=> (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
      <code>{children}</code>
    </pre>
  ),
  a: ({ href, children }) => (
    <a 
      href={href} 
      className="text-brown-600 dark:text-brown-400 hover:underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <div className="relative w-full h-64 my-6">
      <Image 
        src={src || ''} 
        alt={alt || ''} 
        fill 
        className="object-cover rounded-lg"
      />
    </div>
  ),
  
  // Add table components
  table: ({ children }) => (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 my-6">
      {children}
    </table>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50 dark:bg-gray-800">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
      {children}
    </td>
  ),
};

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 