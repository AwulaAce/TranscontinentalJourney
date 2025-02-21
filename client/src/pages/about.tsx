import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-['Lora'] text-[#1B4965] mb-4">About Me</h1>
          <p className="text-xl text-[#2D3436]">A story of cultural bridges and personal growth</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-['Lora'] text-[#1B4965] mb-4">My Background</h2>
              <p>
                Born and raised in Ghana, I grew up immersed in the rich tapestry of West African culture. 
                The values of community, respect, and perseverance were instilled in me from an early age.
              </p>

              <h2 className="text-2xl font-['Lora'] text-[#1B4965] mt-8 mb-4">The Journey</h2>
              <p>
                The decision to move to America was both exciting and challenging. It meant leaving behind 
                familiar surroundings and loved ones to pursue new opportunities and experiences.
              </p>

              <h2 className="text-2xl font-['Lora'] text-[#1B4965] mt-8 mb-4">Looking Forward</h2>
              <p>
                Today, I continue to bridge both worlds, bringing together the best of my Ghanaian heritage 
                and American experiences. My journey is a testament to the power of embracing change and 
                maintaining cultural connections.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:contact@example.com"
            className="px-6 py-3 bg-[#E48E66] text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}
