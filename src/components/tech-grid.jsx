export function TechGrid() {
  const technologies = [
    {
      title: "Partnership Excellence",
      description: "Collaborate with industry leaders to bring the best technology to your cafe",
      image: "/business-handshake-professional-black-and-white-ph.jpg",
    },
    {
      title: "Precision Engineering",
      description: "Every component designed with meticulous attention to detail and performance",
      image: "/close-up-modern-technology-device-minimal-black-ba.jpg",
    },
    {
      title: "Sustainable Innovation",
      description: "Technology that respects both your business and the environment",
      image: "/modern-coffee-machine-espresso-luxury-cafe-equipme.jpg",
    },
  ]

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            A comprehensive approach for a model of excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden mb-6 bg-muted">
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-normal text-foreground mb-3">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
