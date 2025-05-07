export default function Advantages() {
  const advantages = [
    {
      title: "Expertise pointue en IA appliquée",
      description: "Notre équipe est composée d'experts en intelligence artificielle avec une expérience concrète dans divers secteurs."
    },
    {
      title: "Solutions sur-mesure et évolutives",
      description: "Nous concevons des solutions qui s'adaptent parfaitement à vos besoins actuels et futurs."
    },
    {
      title: "Collaboration étroite avec vos équipes métier",
      description: "Nous travaillons main dans la main avec vos équipes pour garantir des résultats alignés avec vos objectifs."
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Krom.Corp ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}