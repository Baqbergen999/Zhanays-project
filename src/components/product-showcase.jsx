import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-sm md:text-base font-semibold tracking-wide uppercase text-primary mb-6">
              Featured Technology
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Innovation meets elegance in every detail
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our flagship solutions represent the pinnacle of cafe technology. Each system is meticulously engineered
              to deliver exceptional performance while maintaining the aesthetic standards your establishment demands.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Discover More
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/barista-using-modern-tablet-pos-system-in-luxury-c.jpg"
                alt="Barista using modern POS system"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
