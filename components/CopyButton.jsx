import { FiCopy, FiCheck } from 'react-icons/fi'

export default function CopyButton({ copied, copyToClipboard, disabled }) {
  return (
    <button
      onClick={copyToClipboard}
      disabled={disabled}
      className={`w-full mt-4 py-3 rounded-md transition-colors ${
        disabled 
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-green-600 hover:bg-green-700 text-white'
      }`}
    >
      <div className="flex items-center justify-center">
        {copied ? (
          <>
            <FiCheck className="mr-2" />
            Copied!
          </>
        ) : (
          <>
            <FiCopy className="mr-2" />
            Copy to Clipboard
          </>
        )}
      </div>
    </button>
  )
}