"use client"
import { useState } from 'react'
import Header from '@components/Header'
import MetaForm from '@components/MetaForm'
import MetaOutput from '@components/MetaOutput'

export default function MetaTagGenerator() {
  
  const [formData, setFormData] = useState({
    description: '',
    keywords: '',
    siteName: '',
    ogImage: '',
    contentType: 'website',
    url: ''
  })

  const [metaTags, setMetaTags] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const generateMetaTags = (e) => {
    e.preventDefault()
    
    const tags = `
<!-- Primary Meta Tags -->
<meta name="title" content="${formData.title}">
<meta name="description" content="${formData.description}">
${formData.keywords && `<meta name="keywords" content="${formData.keywords}">`}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${formData.contentType}">
${formData.url && `<meta property="og:url" content="${formData.url}">`}
<meta property="og:title" content="${formData.title}">
<meta property="og:description" content="${formData.description}">
${formData.ogImage && `<meta property="og:image" content="${formData.ogImage}">`}
${formData.siteName && `<meta property="og:site_name" content="${formData.siteName}">`}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
${formData.url && `<meta property="twitter:url" content="${formData.url}">`}
<meta property="twitter:title" content="${formData.title}">
<meta property="twitter:description" content="${formData.description}">
${formData.ogImage && `<meta property="twitter:image" content="${formData.ogImage}">`}
    `.trim()

    setMetaTags(tags)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaTags)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <MetaForm 
            formData={formData}
            handleChange={handleChange}
            generateMetaTags={generateMetaTags}
          />
          
          <MetaOutput 
            metaTags={metaTags}
            copied={copied}
            copyToClipboard={copyToClipboard}
          />
        </div>
      </div>
    </div>
  )
}