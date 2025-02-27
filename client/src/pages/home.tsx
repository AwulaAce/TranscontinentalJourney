import HeroSection from "@/components/ui/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-gray-900 text-gray-50">
      {/* Ghana flag - red, gold/yellow, green with black star */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-red-600 h-1/3 top-0"></div>
        <div className="absolute inset-0 bg-yellow-400 h-1/3 top-1/3">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="black" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-green-700 h-1/3 top-2/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>
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
          src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
          alt="Basketball practice in Ghana"
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
          src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg"
          alt="Ghana basketball tournament"
          className="w-full h-96 object-cover rounded-lg"
        />
      </motion.section>
      </div>
    </div>
  );
}
