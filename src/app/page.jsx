import { Hero } from "../components/hero"
import { Features } from "../components/features"
import { About } from "../components/about"
import { Shop } from "../components/shop"
import { Process } from "../components/process"
import { Location } from "../components/location"
import { FAQ } from "../components/faq"
import { Testimonials } from "../components/testimonials"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Shop />
      <Process />
      <Location />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
