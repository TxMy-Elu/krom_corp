export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Krom.Corp – L'intelligence artificielle au service de vos idées</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Nous développons des solutions basées sur l'intelligence artificielle pour automatiser, 
          analyser et améliorer vos processus métier.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Découvrir nos services
        </button>
      </div>
    </section>
  );
}