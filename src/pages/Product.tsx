import { GitCompareArrows, Heart } from "lucide-react"
import Header from "../components/Header"
import ModifyBreadCrum from "../components/ModifyBreadCrum"
import Star from "../components/Star"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import img from "../images/product.webp"
import img2 from "../images/image.png"
import { Input } from "../components/ui/input"
import Footer from "../components/Footer"
import CompaniesSection from "../components/CompaniesSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ReviewBox from "../components/ReviewBox"
function Product() {
    return (
        <>
            <Header />
            <ModifyBreadCrum />
            <div className='grid grid-cols-2 gap-6 p-3'>
                <div className="lg:col-span-1 col-span-2">
                    <Tabs defaultValue="1" className="w-full">
                        <TabsContent value="1"><img className="w-[500px] m-auto h-[400px]" src={img}/></TabsContent>
                        <TabsContent value="2"><img className="w-[500px] m-auto h-[400px]" src={img2}/></TabsContent>
                        <TabsList className="h-fit my-5 bg-transparent">
                            <TabsTrigger value="1"><img className="w-[100px] rounded-sm  h-[80px]" src={img} /></TabsTrigger>
                            <TabsTrigger value="2"><img src={img2} className="w-[100px] rounded-sm h-[80px]"  /></TabsTrigger>
                        </TabsList>
                    </Tabs>

                </div>

                <div className="lg:col-span-1 col-span-2 flex-col items-start flex justify-start">
                    <div className="categroy-show">
                        {['smartphone', 'leptop'].map((item, index) => (
                            <span className=" uppercase text-sm dark:text-gray-300" key={index}>{`${item} `} ,</span>
                        ))}
                    </div>
                    <h2 className="text my-3 text-start text-2xl">Notebook Widescreen Y700-17 GF790</h2>
                    <div className="h-6 my-3 flex gap-3">
                        <Star colors={["bg-primary", "bg-forground"]} value={4.6} isEdit={false} />
                        <Separator orientation="vertical" />
                        <a className="t dark:text-white text-sm text-gray-500" href="#">2 customer reviews</a>
                    </div>
                    <Separator />
                    <div className="w-fit mt-2 mb-4">
                        <Button className="text-sm" variant={"link"}><Heart className="mx-2" /> Wishlist </Button>
                        <Button className="text-sm" variant={"link"}><GitCompareArrows className="mx-2" /> Compaire </Button>
                    </div>
                    <ul className="l text-start list-disc mb-4 pl-14">
                        <li className="t dark:text-white text-gray-500">Fingertip controls: On-speaker volume and bass.</li>
                        <li className="t dark:text-white text-gray-500">Fingertip controls: On-speaker volume and bass.</li>
                    </ul>
                    <div className="price mt-4">
                        <span className="text-4xl">
                            $157
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
                        I am discription
                    </TabsContent>
                    <TabsContent value="Specification">
                        <div className="grid grid-cols-3 gird place-content-start  ">
                            <div className=" text-start font-bold px-5 p-3 border-secondary border-t h-fit col-span-1">
                                Brands
                            </div>
                            <div className="text-start p-3 border-secondary border-t h-fit col-span-2">
                                Apple
                            </div>
                        </div>


                    </TabsContent>
                    <TabsContent value="Reviews">
                        <ReviewBox />
                    </TabsContent>
                </Tabs>

            </div>

            <CompaniesSection />
            <Footer />
        </>

    )

}

export default Product

