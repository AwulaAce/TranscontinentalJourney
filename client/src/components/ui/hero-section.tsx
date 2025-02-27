import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[#1B4965] opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-['Lora'] font-bold mb-6 text-[#FFFFFF]">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-[#E0E0E0] leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}
