import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const heroItems = [
  {
    title: "Summer Collection 2024",
    description:
      "Discover the latest trends in summer fashion with our exclusive collection",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&h=600&fit=crop",
    link: "/products/summer",
    position: "left",
  },
  {
    title: "New Arrivals",
    description: "Experience luxury with our latest designer collections",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&h=600&fit=crop",
    link: "/products/new",
    position: "center",
  },
  {
    title: "Special Offers",
    description: "Limited time deals - Up to 50% off on premium selections",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&h=600&fit=crop",
    link: "/products/sale",
    position: "right",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full m-auto h-auto">
      <Carousel className="w-full " opts={{ loop: true }}>
        <CarouselContent>
          {heroItems.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 overflow-hidden">
                <CardContent className="relative h-[400px] md:h-[500px] p-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 transition-all duration-300 hover:opacity-100"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center
                      ${
                        item.position === "center"
                          ? "justify-center text-center"
                          : ""
                      }
                      ${item.position === "right" ? "justify-end" : ""}`}
                  >
                    <div
                      className={`p-8 md:p-12 space-y-6 max-w-xl 
                      ${item.position === "left" ? "ml-[10%]" : ""}
                      ${item.position === "right" ? "mr-[10%]" : ""}`}
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90">
                        {item.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 transform transition-all duration-300 hover:scale-105"
                      >
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 h-12 w-12 opacity-70 hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-8 h-12 w-12 opacity-70 hover:opacity-100 transition-opacity" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
