import { GitCompareArrows, Heart } from "lucide-react"
import Header from "../components/Header"
import ModifyBreadCrum from "../components/ModifyBreadCrum"
import Star from "../components/Star"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Input } from "../components/ui/input"
import Footer from "../components/Footer"
import CompaniesSection from "../components/CompaniesSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ReviewBox from "../components/ReviewBox"
import React from "react"

// Sample product data
const productData = {
  categories: ['smartphone', 'laptop'],
  name: "Notebook Widescreen Y700-17 GF790",
  rating: 4.6,
  reviewCount: 2,
  features: [
    "Fingertip controls: On-speaker volume and bass.",
    "Fingertip controls: On-speaker volume and bass."
  ],
  price: 157,
  images: [
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3"
  ],
  specifications: [
    {
      label: "Brands", 
      value: "Apple"
    },
    {
      label: "Model",
      value: "Y700-17"
    },
    {
      label: "Screen Size", 
      value: "17 inches"
    },
    {
      label: "Processor",
      value: "Intel Core i7-12700H"
    },
    {
      label: "RAM",
      value: "16GB DDR4"
    },
    {
      label: "Storage",
      value: "512GB SSD"
    },
    {
      label: "Graphics",
      value: "NVIDIA RTX 3060 6GB"
    },
    {
      label: "Operating System",
      value: "Windows 11 Home"
    },
    {
      label: "Battery",
      value: "4-Cell 70WHr"
    },
    {
      label: "Weight",
      value: "2.98 kg"
    }
  ],
  reviews: [
    {
      id: 1,
      rating: 5,
      author: "John Doe",
      date: "2024-01-15",
      comment: "Great laptop, very fast and reliable"
    },
    {
      id: 2,
      rating: 4, 
      author: "Jane Smith",
      date: "2024-01-10",
      comment: "Good value for money but battery life could be better"
    }
  ]
}

function Product() {
    return (
        <>
            <Header />
            <ModifyBreadCrum />
            <div className='grid grid-cols-2 gap-6 p-3'>
                <div className="lg:col-span-1 col-span-2">
                    <Tabs defaultValue="1" className="w-full">
                        <TabsContent value="1"><img className="w-[500px] m-auto h-[400px]" src={productData.images[0]}/></TabsContent>
                        <TabsContent value="2"><img className="w-[500px] m-auto h-[400px]" src={productData.images[1]}/></TabsContent>
                        <TabsList className="h-fit my-5 bg-transparent">
                            <TabsTrigger value="1"><img className="w-[100px] rounded-sm  h-[80px]" src={productData.images[0]} /></TabsTrigger>
                            <TabsTrigger value="2"><img src={productData.images[1]} className="w-[100px] rounded-sm h-[80px]"  /></TabsTrigger>
                        </TabsList>
                    </Tabs>

                </div>

                <div className="lg:col-span-1 col-span-2 flex-col items-start flex justify-start">
                    <div className="categroy-show">
                        {productData.categories.map((item, index) => (
                            <span className=" uppercase text-sm dark:text-gray-300" key={index}>{`${item} `} ,</span>
                        ))}
                    </div>
                    <h2 className="text my-3 text-start text-2xl">{productData.name}</h2>
                    <div className="h-6 my-3 flex gap-3">
                        <Star colors={["bg-primary", "bg-forground"]} value={productData.rating} isEdit={false} />
                        <Separator orientation="vertical" />
                        <a className="t dark:text-white text-sm text-gray-500" href="#">{productData.reviewCount} customer reviews</a>
                    </div>
                    <Separator />
                    <div className="w-fit mt-2 mb-4">
                        <Button className="text-sm" variant={"link"}><Heart className="mx-2" /> Wishlist </Button>
                        <Button className="text-sm" variant={"link"}><GitCompareArrows className="mx-2" /> Compaire </Button>
                    </div>
                    <ul className="l text-start list-disc mb-4 pl-14">
                        {productData.features.map((feature, index) => (
                            <li key={index} className="t dark:text-white text-gray-500">{feature}</li>
                        ))}
                    </ul>
                    <div className="price mt-4">
                        <span className="text-4xl">
                            ${productData.price}
                        </span>
                    </div>
                    <div className="flex justify-start my-4">
                        <div className="flex  justify-start w-1/2 items-center">
                            <Input min={1} placeholder="qty" className="d focus:outline-none focus-visible:outline-none focus:border-primary active:outline-none focus-visible:border-primary rounded-full w-full h-ful bg-gray-200 mx-3 px-5 text-gray-800" type="number" name="qty" id="" />
                        </div>
                        <Button className="text-sm rounded-full h-full " variant={"default"}> Add Cart </Button>
                    </div>
                    <div className="ml-3">
                        <Button className="text-sm rounded-full h-full " variant={"secondary"}> Compare </Button>
                    </div>
                </div>


            </div>
            <div className="w-full flex justify-center mt-12">
                <Tabs defaultValue="Description" className="w-[90%]  ">
                    <TabsList className="p-0 bg-transparent mb-8">
                        <TabsTrigger className=" rounded-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary " value="Description">Description
                        </TabsTrigger>
                        <TabsTrigger className=" rounded-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary" value="Specification">Specification
                        </TabsTrigger>
                        <TabsTrigger className=" rounded-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary" value="Reviews">Reviews
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="Description">
                        <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center sm:text-left">
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                    Discover the perfect blend of power and elegance with our flagship notebook. Engineered for excellence, this masterpiece of modern technology transforms your computing experience with unmatched performance and sophisticated design.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div className="group relative overflow-hidden rounded-xl">
                                    <img 
                                        src={productData.images[0]} 
                                        alt="Product Overview" 
                                        className="rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                </div>
                                <div className="group relative overflow-hidden rounded-xl">
                                    <img 
                                        src={productData.images[1]} 
                                        alt="Product Features" 
                                        className="rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                    Encased in a premium aerospace-grade aluminum chassis, this powerhouse features cutting-edge components including the latest-generation processor and dedicated graphics. Experience lightning-fast performance whether you're tackling resource-intensive projects or immersing yourself in high-fidelity gaming.
                                </p>
                            </div>

                            <div className="relative group overflow-hidden rounded-xl my-8">
                                <img 
                                    src={productData.images[2]} 
                                    alt="Product Performance" 
                                    className="rounded-xl shadow-lg w-full h-[300px] sm:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/images/placeholder.jpg";
                                    }}
                                />
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                                    Innovation meets practicality with our advanced thermal architecture ensuring optimal performance under pressure, while the high-capacity battery keeps you productive for hours. The precision-engineered keyboard with customizable backlighting and ultra-responsive touchpad deliver exceptional control, complemented by a comprehensive selection of ports for seamless connectivity.
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="Specification">
                        <div className="grid grid-cols-3 gird place-content-start">
                            {productData.specifications.map((spec, index) => (
                                <React.Fragment key={index}>
                                    <div className="text-start font-bold px-5 p-3 border-secondary border-t h-fit col-span-1">
                                        {spec.label}
                                    </div>
                                    <div className="text-start p-3 border-secondary border-t h-fit col-span-2">
                                        {spec.value}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Reviews">
                        <ReviewBox  />
                    </TabsContent>
                </Tabs>
            </div>

            <CompaniesSection />
            <Footer />
        </>
    )
}

export default Product
