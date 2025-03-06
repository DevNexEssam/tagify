import CopyButton from './CopyButton'

export default function MetaOutput({ metaTags, copied, copyToClipboard }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Generated Meta Tags</h2>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm text-tertiary">
          {metaTags || '// Your generated meta tags will appear here...'}
        </pre>
      </div>

      <CopyButton 
        copied={copied} 
        copyToClipboard={copyToClipboard}
        disabled={!metaTags}
      />
    </div>
  )
}