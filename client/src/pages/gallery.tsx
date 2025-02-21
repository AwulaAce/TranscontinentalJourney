import { motion } from "framer-motion";
import PhotoCard from "@/components/ui/photo-card";
import { photos } from "@/data/photos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-['Lora'] text-[#1B4965] mb-12 text-center"
      >
        Photo Gallery
      </motion.h1>

      <Tabs defaultValue="ghana" className="w-full">
        <TabsList className="w-full justify-center mb-8">
          <TabsTrigger value="ghana">Ghana</TabsTrigger>
          <TabsTrigger value="america">America</TabsTrigger>
          <TabsTrigger value="journey">Journey</TabsTrigger>
        </TabsList>

        {["ghana", "america", "journey"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos
                .filter((photo) => photo.category === category)
                .map((photo, index) => (
                  <PhotoCard
                    key={photo.url}
                    url={photo.url}
                    caption={photo.caption}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
