import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-fit bg-[#f8f8f865] text-black rounded-lg shadow backdrop-blur-md fixed z-50 ">
        <nav className="flex justify-between items-center px-6 py-4 gap-4">
          <ul className="flex gap-6 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-black transition duration-150"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/Sooraj_Nambiar_Resume.pdf"
            target="_blank"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Resume
          </Link>
        </nav>
      </div>
    </div>
  );
}
