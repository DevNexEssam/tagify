// import { FiSparkles } from 'react-icons/fi'

export default function Header() {
  return (
    <div className="text-center">
      <div className="inline-flex p-3 bg-blue-100 rounded-full">
        {/* <FiSparkles className="w-8 h-8 text-blue-600" /> */}
      </div>
      <h1 className="text-4xl font-bold mt-4">Meta Tag Generator</h1>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Generate SEO-optimized meta tags for perfect social sharing and search engine visibility
      </p>
    </div>
  )
}