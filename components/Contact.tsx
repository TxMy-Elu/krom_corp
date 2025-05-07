export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Discutons de votre projet</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Vous avez une idée, un besoin, une question ?
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Prenez contact avec notre équipe
        </button>
        <p className="mt-6 text-lg">
          Nous concevons avec vous l'IA qui fera la différence.
        </p>
      </div>
    </section>
  );
}