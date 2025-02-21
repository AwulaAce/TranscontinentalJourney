import HeroSection from "@/components/ui/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="From Ghana to America"
        subtitle="A journey of discovery, growth, and new beginnings"
      />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 space-y-12"
      >
        <div className="prose prose-lg">
          <h2 className="text-3xl font-['Lora'] text-[#1B4965] mb-6">Basketball Dreams</h2>
          <p>
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

        <div className="prose prose-lg">
          <h2 className="text-3xl font-['Lora'] text-[#1B4965] mb-6">The American Dream</h2>
          <p>
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
  );
}
