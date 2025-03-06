import { HiOutlineSparkles } from "react-icons/hi";
export default function Header() {
  return (
    <header className="text-center space-y-4">
      <div className="inline-flex p-3 bg-blue-100 rounded-full animate-spin hover:animate-none transition-all">
        <HiOutlineSparkles className="w-8 h-8 text-primary" />
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
