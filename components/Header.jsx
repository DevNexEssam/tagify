import Image from "@node_modules/next/image";

export default function Header() {
  return (
    <header className="text-center space-y-4">
      <div className="inline-flex p-3 bg-blue-100 rounded-full animate-spin hover:animate-none transition-all">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
      </div>

      <h1 className="text-4xl font-bold text-secondary transition-transform hover:scale-105">
        Meta Tag Generator
      </h1>

      <p className="text-tertiary max-w-xl mx-auto leading-relaxed">
        Generate SEO-optimized meta tags for perfect social sharing and search
        engine visibility
      </p>
    </header>
  );
}
