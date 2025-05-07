import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Krom.Corp</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="#advantages" className="hover:text-blue-600 transition-colors">Pourquoi nous</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600 transition-colors">Projets</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}