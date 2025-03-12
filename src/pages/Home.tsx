import { FC } from "react";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import LatestProducts from "@/components/LatestProducts";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CategoryNav />
      <HeroSection />
      <LatestProducts />
      <main className="container mx-auto py-12 px-4 flex-1">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Our Store
          </h1>
          {/* Featured Products section will go here */}
        </div>
      </main>
    </div>
  );
};

export default Home;
