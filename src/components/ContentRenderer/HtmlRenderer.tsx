interface HtmlRendererProps {
  content: string;
  className?: string;
}

export function HtmlRenderer({ content, className = '' }: HtmlRendererProps) {
  return (
    <div 
      className={`
        prose prose-lg dark:prose-invert max-w-none ${className}
        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3
        [&_p]:mb-4 [&_p]:leading-relaxed
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
        [&_li]:mb-2
        [&_strong]:font-bold [&_em]:italic
        [&_blockquote]:border-l-4 [&_blockquote]:border-brown-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
        [&_pre]:bg-gray-100 [&_pre]:dark:bg-gray-800 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto
        [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-1 [&_code]:rounded
        [&_a]:text-brown-600 [&_a]:dark:text-brown-400 [&_a:hover]:underline
        [&_img]:rounded-lg [&_img]:my-4
        [&_table]:w-full [&_table]:my-4
        [&_th]:py-2 [&_th]:px-4 [&_th]:bg-gray-100 [&_th]:dark:bg-gray-800
        [&_td]:py-2 [&_td]:px-4 [&_td]:border-b [&_td]:border-gray-200 [&_td]:dark:border-gray-700
      `}
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
} 