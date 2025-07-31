import React from "react";

interface TextBlockProps {
  text?: string;
  className?: string;
}
/**
 *
 * @param param0
 * @returns
 */
const TextBlock: React.FC<TextBlockProps> = ({ text, className }) => {
  const parse = (text: string) => {
    return text
      ? text.split("\n").map((line, index) => (
          <p key={index}>
            <span className="text-right-aligned-numbers">{index + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </p>
        ))
      : null;
  };

  if (!text) {
    return null;
  }
  return (
    <section className={className}>
      <pre>{parse(text)}</pre>
    </section>
  );
};

export default TextBlock;
