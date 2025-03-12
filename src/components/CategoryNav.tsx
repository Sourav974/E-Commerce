import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  ShirtIcon,
  Headphones,
  Watch,
  BookOpen,
  Sofa,
  Gift,
  Cable,
} from "lucide-react";

const categories = [
  {
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    link: "/category/mobile",
  },
  {
    name: "Electronics",
    icon: <Laptop className="h-6 w-6" />,
    link: "/category/electronics",
  },
  {
    name: "Fashion",
    icon: <ShirtIcon className="h-6 w-6" />,
    link: "/category/fashion",
  },
  {
    name: "Audio",
    icon: <Headphones className="h-6 w-6" />,
    link: "/category/audio",
  },
  {
    name: "Watches",
    icon: <Watch className="h-6 w-6" />,
    link: "/category/watches",
  },
  {
    name: "Books",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/category/books",
  },
  {
    name: "Home",
    icon: <Sofa className="h-6 w-6" />,
    link: "/category/home",
  },
  {
    name: "Gifts",
    icon: <Gift className="h-6 w-6" />,
    link: "/category/gifts",
  },
  {
    name: "Accessories",
    icon: <Cable className="h-6 w-6" />,
    link: "/category/accessories",
  },
];

const CategoryNav = () => {
  return (
    <div className="border-b bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4 overflow-x-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="flex flex-col items-center min-w-[80px] gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {category.icon}
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
