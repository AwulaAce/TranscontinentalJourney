import HeroSection from "@/components/ui/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-gray-900 text-gray-50">
      <div className="relative z-10">
        <HeroSection
          title="From Ghana to America"
          subtitle="A journey of discovery, growth, and new beginnings"
        />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 space-y-12 relative z-10"
      >
        <div className="prose prose-lg prose-invert">
          <h2 className="text-3xl font-['Lora'] text-[#80EFFF] mb-6">The Beginning</h2>
          <p className="text-white">
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

        <div className="prose prose-lg prose-invert">
          <h2 className="text-3xl font-['Lora'] text-[#80EFFF] mb-6">New Horizons</h2>
          <p className="text-white">
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

        <div className="prose prose-lg prose-invert">
          <h2 className="text-3xl font-['Lora'] text-[#80EFFF] mb-6">Basketball Dreams</h2>
          <p className="text-white">
            Basketball has always been more than just a sport to me - it's been my pathway to dreams. 
            Growing up in Ghana, I developed a deep passion for the game, which eventually opened doors 
            to opportunities in America. The court became my second home, where determination and dedication 
            shaped my journey.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
          alt="Basketball court"
          className="w-full h-96 object-cover rounded-lg"
        />

        <div className="prose prose-lg prose-invert">
          <h2 className="text-3xl font-['Lora'] text-[#80EFFF] mb-6">The American Dream</h2>
          <p className="text-white">
            Coming to America to pursue basketball has been transformative. Here, I've found world-class 
            training facilities, competitive leagues, and a community that shares my passion for the game. 
            Every practice, every game is a step forward in my basketball journey, blending my Ghanaian 
            roots with American basketball culture.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0"
          alt="Basketball action"
          className="w-full h-96 object-cover rounded-lg"
        />
      </motion.section>
      </div>
    </div>
  );
}
