import { useState } from 'react';

interface CopyToClipboardProps {
  copyText: string;
  placeholderText: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ copyText, placeholderText }) => {
  const [copied, setCopied] = useState(false);
  const [inputValue, setInputValue] = useState(placeholderText);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-4 p-4">
      {copied && (
        <div className="absolute top-0 text-green-500 text-sm font-bold">Copied</div>
      )}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text here"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:brightness-110"
      />
      
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {placeholderText}
      </button>
      
      {copied && (
        <span className="text-green-500">Text copied to clipboard!</span>
      )}
    </div>
  );
};

export default CopyToClipboard;
