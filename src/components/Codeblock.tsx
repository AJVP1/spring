import { useRef, useState } from "react";

interface CodeblockProps {
  code: string;
  title?: string;
}

export default function Codeblock({ code, title }: CodeblockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-box my-8 -mx-6">
      <div className="code-header flex items-center justify-between">
        <span>{title}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-[#a0a0a0] hover:text-white transition-colors cursor-pointer"
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre>
        <code ref={codeRef} dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}
