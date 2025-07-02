import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Achievements() {
  const testimonials = [
  {
    quote:
      "Crowned winner of Smart India Hackathon 2024 — emerged as the top innovator among 50,000+ participants nationwide by crafting a scalable digital solution backed by solid UX thinking and user research.",
    name: "SIH 2024 Winner",
    designation: "National Level Hackathon, Govt. of India",
    src: "https://i.postimg.cc/kgcRrg0S/Whats-App-Image-2025-06-28-at-01-32-20-c8082d79.jpg",
  },
  {
    quote:
      "Championed the 2024 Anveshna Innovation Challenge by designing a socially impactful solution—solving real-world problems through empathetic design, creative thinking, and functional prototyping.",
    name: "Anveshna 2024 Winner",
    designation: "Design + Innovation Challenge",
    src: "https://i.postimg.cc/4xgWZGPG/DSC-0301.jpg",
  },
  {
    quote:
      "Recognized as a standout finalist at IDE Bootcamp 2024, delivering a working prototype and end-to-end product vision within just 72 hours — proving speed, clarity, and creativity under pressure.",
    name: "IDE Bootcamp Finalist",
    designation: "Product Ideation Sprint 2024",
    src: "https://i.postimg.cc/L5rGvR9Q/Whats-App-Image-2025-06-20-at-19-50-37-e4ac34cf.jpg",
  },
  {
    quote:
      "Finalist at Designathon 2024 for presenting a user-first design approach under tight constraints — pushing boundaries of usability and visual storytelling with elegance and precision.",
    name: "Designathon Finalist",
    designation: "UI/UX & Creativity Contest 2024",
    src: "https://i.postimg.cc/N08cCKZh/Whats-App-Image-2025-06-20-at-19-55-31-9eb629ce.jpg",
  },
];


  return <AnimatedTestimonials testimonials={testimonials} />;
}
