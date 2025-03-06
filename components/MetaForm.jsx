export default function MetaForm({ formData, handleChange, generateMetaTags }) {
    const fields = [
      { label: 'Title', name: 'title', required: true },
      { label: 'Description', name: 'description', type: 'textarea', required: true },
      { label: 'Keywords (comma separated)', name: 'keywords' },
      { label: 'Site Name', name: 'siteName' },
      { label: 'OG Image URL', name: 'ogImage' },
      { label: 'URL', name: 'url' }
    ]
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Page Information</h2>
        
        <form onSubmit={generateMetaTags} className="space-y-5">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 h-32"
                />
              ) : (
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content Type
            </label>
            <select
              name="contentType"
              value={formData.contentType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="website">Website</option>
              <option value="article">Article</option>
              <option value="product">Product</option>
            </select>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Generate Meta Tags
          </button>
        </form>
      </div>
    )
  }