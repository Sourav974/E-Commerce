import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

// Mock data - replace with actual API data later
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    category: "Watches",
    isNew: true,
  },
  {
    id: 3,
    name: "Ultra Slim Laptop",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 4,
    name: "Smartphone Pro Max",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80",
    category: "Mobile",
    isNew: true,
  },
];

const LatestProducts: FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Latest Products</h2>
          <Button variant="link">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group shadow-sm">
              <CardHeader className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 right-2">New</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </div>
                <h3 className="font-semibold truncate">{product.name}</h3>
                <div className="mt-2 font-bold">
                  ${product.price.toFixed(2)}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="secondary">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
