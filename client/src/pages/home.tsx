import HeroSection from "@/components/ui/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="From Ghana to America"
        subtitle="A personal journey of discovery, growth, and new beginnings"
      />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 space-y-12"
      >
        <div className="prose prose-lg">
          <h2 className="text-3xl font-['Lora'] text-[#1B4965] mb-6">The Beginning</h2>
          <p>
            Growing up in Ghana, I was surrounded by rich culture, vibrant traditions, and the warmth of community. 
            The journey from my hometown to America was more than just a physical transition - it was the beginning 
            of a new chapter filled with opportunities and challenges.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504214002698-8bdd458f134b"
          alt="Ghana cultural scene"
          className="w-full h-96 object-cover rounded-lg"
        />

        <div className="prose prose-lg">
          <h2 className="text-3xl font-['Lora'] text-[#1B4965] mb-6">New Horizons</h2>
          <p>
            Arriving in America opened up a world of possibilities. The contrast between life in Ghana and 
            the United States brought both excitement and adjustment. Each day brought new experiences, 
            from navigating city life to embracing different cultural perspectives.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
          alt="American city scene"
          className="w-full h-96 object-cover rounded-lg"
        />
      </motion.section>
    </div>
  );
}
