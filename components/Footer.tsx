export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© 2025 Krom.Corp – Propulsez votre entreprise avec l'IA</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}