import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface PhotoCardProps {
  url: string;
  caption: string;
  index: number;
}

export default function PhotoCard({ url, caption, index }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src={url}
            alt={caption}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <p className="p-4 text-[#2D3436] font-['Open_Sans']">{caption}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
