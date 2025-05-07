export default function Projects() {
  const projects = [
    {
      title: "Un chatbot RH intelligent",
      client: "Grande entreprise",
      description: "Automatisation des réponses aux questions fréquentes des employés"
    },
    {
      title: "IA de prédiction de ventes",
      client: "Secteur retail",
      description: "Optimisation des stocks et prévisions de ventes précises"
    },
    {
      title: "Automatisation de traitement de mails",
      client: "Service client",
      description: "Tri et réponse automatique aux emails entrants"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exemples de projets récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-600 mb-4">Pour {project.client}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}