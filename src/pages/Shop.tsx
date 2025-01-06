import Filter from "../components/Filter"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ModifyBreadCrum from "../components/ModifyBreadCrum"
import axios from "axios"
import { Grid, List } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MyCard } from "../components/MenuComponent"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../components/ui/pagination"
import { Card } from "../components/ui/card"
import Star from "../components/Star"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../components/ui/sheet"
import CompaniesSection from "../components/CompaniesSection"
import { Newsletter } from "./Home"
import { useEffect, useState } from "react"

const sampleProducts = [
  {
    name: "iPhone 14 Pro",
    category: ["Electronics", "Smartphones"],
    price: 999.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=300&h=300&fit=crop",
    _id: "iphone14pro",
    discription: "Latest iPhone with amazing camera features and powerful A16 chip",
    lable: "Smartphone"
  },
  {
    name: "MacBook Air M2",
    category: ["Electronics", "Laptops"],
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop",
    _id: "macbookair",
    discription: "Ultra-light laptop with incredible performance and battery life",
    lable: "Laptop"
  },
  {
    name: "Sony WH-1000XM4",
    category: ["Electronics", "Audio"],
    price: 349.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
    _id: "sonywh1000",
    discription: "Industry-leading noise cancelling headphones with premium sound",
    lable: "Headphones"
  },
  {
    name: "iPad Pro 12.9",
    category: ["Electronics", "Tablets"],
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    _id: "ipadpro",
    discription: "Powerful tablet with mini-LED display and M1 chip",
    lable: "Tablet"
  }
];

function Shop() {
  const [products, setProducts] = useState(sampleProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/products/");
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <>
      <Header />
      <ModifyBreadCrum />
      <div className="grid mt-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-full">
        <aside className="col-span-1 hidden lg:block">
          <Filter />
        </aside>
        <main className="col-span-3 w-[100%]">
          <Tabs defaultValue="grid">
            <TabsList className="w-full flex justify-around bg-secondary py-8 lg:py-6 lg:rounded-sm">
              <Sheet>
                <SheetTrigger className="lg:hidden"><Button>Filter</Button></SheetTrigger>
                <SheetContent className="overflow-auto">
                  <SheetHeader>
                    <SheetDescription className="block p-2">
                      <Filter />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <div className="hidden lg:block">
                <TabsTrigger value="grid"><Grid /></TabsTrigger>
                <TabsTrigger value="list"><List /></TabsTrigger>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <span>Sort By:</span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Popularity">Popularity</SelectItem>
                    <SelectItem value="Rating">Rating</SelectItem>
                    <SelectItem value="Latest">Latest</SelectItem>
                    <SelectItem value="PriceLowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="PriceHighToLow">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsList>
            <div className="p-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">Loading...</div>
              ) : (
                <>
                  <TabsContent value="grid" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
                    {products.map((product) => (
                      <MyCard 
                        key={product._id}
                        name={product.name}
                        lable={product.lable}
                        price={product.price}
                        image={product.image}
                        _id={product._id}
                      />
                    ))}
                  </TabsContent>
                  <TabsContent className="flex flex-col gap-3" value="list">
                    {products.map((product) => (
                      <CardForList
                        key={product._id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                        _id={product._id}
                        discription={product.discription}
                      />
                    ))}
                  </TabsContent>
                </>
              )}
            </div>
          </Tabs>
          <Pagination className="mt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
      <CompaniesSection />
      <Newsletter />
      <Footer />
    </>
  )
}

interface MyCardProps {
  category: string[],
  discription: string,
  name: string,
  image: string,
  price: number,
  _id: string
}

export const CardForList = ({ category, discription, name, image, _id, price }: MyCardProps) => {
  return (
    <Card className="grid gap-6 grid-cols-3 p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="grid cols-span-1">
        <Link to={`/product/${_id}`}>
          <img className="rounded-lg object-cover hover:scale-105 transition-transform duration-300" src={image} alt={name} />
        </Link>
      </div>
      <div className="grid col-span-1">
        <div className="flex gap-2 flex-wrap">
          {category.map((item, index) => (
            <span key={index} className="bg-secondary px-2 py-1 rounded-full text-sm">{item}</span>
          ))}
        </div>
        <Link to={`/product/${_id}`}>
          <h2 className="text-start text-2xl font-bold hover:text-primary transition-colors">{name}</h2>
        </Link>
        <Star colors={["bg-primary", "bg-foreground"]} value={4.6} isEdit={false} />
        <p className="text-start text-muted-foreground">{discription}</p>
        <div className="text-sm text-muted-foreground my-5">Product ID: <span className="font-mono">{_id}</span></div>
      </div>
      <div className="flex flex-col items-center gap-5 flex-shrink col-span-1">
        <h3 className="text-2xl font-bold text-primary">${price.toFixed(2)}</h3>
        <Button className="rounded-full w-full max-w-[200px] hover:scale-105 transition-transform">
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

export default Shop