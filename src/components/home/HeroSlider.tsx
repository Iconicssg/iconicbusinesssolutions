import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Making Careers & Customer Experiences Better",
    subhead: "Recruitment, training and CX services — tailored for India & global markets.",
    primaryCTA: "Contact Us",
    primaryLink: "/contact",
    secondaryCTA: "Apply Now",
    secondaryLink: "/candidate-registration",
  },
  {
    image: hero2,
    headline: "Hire Faster, Train Smarter",
    subhead: "Bulk hiring, screening and onboarding at scale.",
    primaryCTA: "Employer Zone",
    primaryLink: "/employer-zone",
    secondaryCTA: "Learn More",
    secondaryLink: "/services",
  },
  {
    image: hero3,
    headline: "Omnichannel CX & Process Automation",
    subhead: "Phone, chat, email, WhatsApp and automation for better CX.",
    primaryCTA: "Explore Services",
    primaryLink: "/services",
    secondaryCTA: "Contact Us",
    secondaryLink: "/contact",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient opacity-80" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 text-balance leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl text-background/90 mb-8 text-balance">
                  {slide.subhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="hero" size="lg">
                    <Link to={slide.primaryLink}>{slide.primaryCTA}</Link>
                  </Button>
                  <Button asChild variant="heroPrimary" size="lg">
                    <Link to={slide.secondaryLink}>{slide.secondaryCTA}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-background" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="text-background" size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
