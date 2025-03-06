import Link from "@node_modules/next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center text-sm flex justify-center items-center gap-2">
      Developed with precision by
      <Link href="https://github.com/DevNexEssam" target="_blank" className="text-primary hover:underline flex items-center gap-1">
        Esam Mohamed <FaGithub />
      </Link>
    </footer>
  );
}
