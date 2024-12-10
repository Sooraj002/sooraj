import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 z-50 h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold font-alegreya">Sooraj Nambiar</h1>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="px-3 py-2 hover:bg-gray-200 transition-colors"
          >
            Home
          </Link>
          <button className="px-3 py-2 hover:bg-gray-200 transition-colors">
            Resume
          </button>
          <button className="px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
