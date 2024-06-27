import Filter from "../components/Filter"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ModifyBreadCrum from "../components/ModifyBreadCrum"

import {  Grid, List } from "lucide-react"

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



function Shop() {
  return (
    <>
      <Header />
      <ModifyBreadCrum />
      <div className="grid  mt-6 md:grid-cols-2 grid-cols-1  lg:grid-cols-4 w-full">
        <aside className="col-span-1 hidden lg:block  ">
          <Filter />
        </aside>
        <main className="col-span-3 ">
          <Tabs defaultValue="grid">
            <TabsList className="w-full flex justify-around bg-secondary  py-8 lg:py-6 lg:rounded-sm ">
            <Sheet >
  <SheetTrigger className="lg:hidden"><Button>Filter</Button></SheetTrigger>
  <SheetContent className=" overflow-auto" >
    <SheetHeader>
      <SheetDescription className="block p-2">
        <Filter/>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

              <div className="hidden lg:block " >
                <TabsTrigger value="grid"><Grid /></TabsTrigger>
                <TabsTrigger value="list"><List /></TabsTrigger>

     
              </div>

              <div className="flex gap-3  justify-center items-center  ">
                <span>Short By :</span>
                <Select >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Popularity">Popularity</SelectItem>
                    <SelectItem value="Rating">Rating</SelectItem>
                    <SelectItem value="Latest">Latest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsList>
            <div className="p-3">
              <TabsContent value="grid" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
                 <MyCard name="Utkarsh" lable="Name"
                  price={123} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg" _id="sklsg"/>
                       <MyCard name="Utkarsh" lable="Name"
                  price={123} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg" _id="sklsg"/>
                       <MyCard name="Utkarsh" lable="Name"
                  price={123} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg" _id="sklsg"/>
                       <MyCard name="Utkarsh" lable="Name"
                  price={123} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg" _id="sklsg"/>
                       <MyCard name="Utkarsh" lable="Name"
                  price={123} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg" _id="sklsg"/>
              </TabsContent>
              <TabsContent className="flex flex-col gap-3" value="list">
                     <CardForList name="Utkarsh" category={["software" , "system"]} price={200000} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"  _id="sdkgljs"  discription="sdlgjlsdjgslkdj sfjsdlkgjsldk    lsgjsldjglsj"/>
                     <CardForList name="Utkarsh" category={["software" , "system"]} price={200000} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"  _id="sdkgljs"  discription="sdlgjlsdjgslkdj sfjsdlkgjsldk    lsgjsldjglsj"/>
                     <CardForList name="Utkarsh" category={["software" , "system"]} price={200000} image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"  _id="sdkgljs"  discription="sdlgjlsdjgslkdj sfjsdlkgjsldk    lsgjsldjglsj"/>

 </TabsContent>
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
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
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
      <CompaniesSection/>
      <Newsletter/>
      <Footer />
    </>
  )
}
interface MyCardProps {
  category : string[],
  discription : string
  name : string,
  image  : string ,
  price : number ,
  _id : string
}


const CardForList = ({category , discription , name , image , _id , price} : MyCardProps) => {
  return (
    <Card className="grid gap-6 grid-cols-3 p-4 ">
          <div  className=" grid cols-span-1">
            <Link to={`/id`}>
            <img className="rounded-lg object-cover"  src={image} alt={name} />
            </Link>
          </div>
          <div className="grid  col-span-1">
            <div className="w-fit">
              {category.map((item,index) =>(
                <span key={index}>{`${item} `}</span>
              ))}
            </div>
            <Link to={"/"}>
            <h2 className="text-start text-2xl font-bold">{name}</h2>
            </Link>
            <Star  colors={["bg-primary" , "bg-forground"]} value={4.6} isEdit={false}/>
            <p className="text-start ">{discription}</p>
            <div className="w-fit my-5">Id : <span>{_id}</span></div>
          </div>
          <div className="flex flex-col items-center gap-5 flex-shrink col-span-1">
           <h3>{price}</h3>

           <Button className="rounded-full  w-1/2" variant={"default"}>Add Cart</Button>
          </div>
    </Card>
  )
}


export default Shop