export default function Services() {
  const services = [
    {
      title: "Intelligence artificielle & Machine Learning",
      description: "Développement de modèles d'IA adaptés à vos besoins spécifiques",
      icon: "🤖"
    },
    {
      title: "Analyse de données avancée",
      description: "Extraction d'insights précieux à partir de vos données",
      icon: "📊"
    },
    {
      title: "Traitement automatique du langage (NLP)",
      description: "Compréhension et génération de texte pour vos applications",
      icon: "💬"
    },
    {
      title: "Automatisation intelligente des tâches",
      description: "Optimisation de vos processus grâce à l'IA",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos domaines d'expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}