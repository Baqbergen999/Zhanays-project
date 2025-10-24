import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light text-primary-foreground mb-8 leading-tight text-balance">
          Ready to transform your cafe?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Join hundreds of establishments that have elevated their operations with our premium technology solutions
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 whitespace-nowrap">
              Get Started
            </Button>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-4">
            Schedule a personalized consultation with our experts
          </p>
        </div>
      </div>
    </section>
  )
}
