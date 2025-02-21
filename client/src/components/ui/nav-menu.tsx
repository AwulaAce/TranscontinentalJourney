import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NavMenu() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#1B4965] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-['Lora'] font-bold">My Journey</a>
          </Link>
          
          <div className="flex gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "relative text-lg hover:text-[#E48E66] transition-colors",
                  location === link.href && "text-[#E48E66]"
                )}>
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E48E66]"
                    />
                  )}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E48E66]">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E48E66]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
