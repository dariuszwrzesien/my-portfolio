import { forwardRef } from 'react';

interface TextBlockProps {
  text: string;
  className?: string;
}

const TextBlock = forwardRef<HTMLElement, TextBlockProps>(({ text, className }, ref) => {
  const parse = (text: string) => {
    return text
      ? text.split('\n').map((line, index) => (
          <p key={index}>
            <span className="text-right-aligned-numbers">{index + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </p>
        ))
      : null;
  };

  return (
    <section ref={ref} className={className}>
      <pre>{parse(text)}</pre>
    </section>
  );
});

export default TextBlock;
