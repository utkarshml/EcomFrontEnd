import { Button } from "../components/ui/button"
import {  Search, Send} from "lucide-react"
import { Input } from "../components/ui/input"
import ban1 from "../images/ban-1.png"
import ban2 from "../images/ban-2.png"
import ban3 from "../images/ban-3.png"
import ban4 from "../images/ban-4.png"
import ban5 from "../images/ban-5.png"
import ban6 from "../images/ban-6.png"
import ban7 from "../images/ban-7.png"
import MenuComponent from "../components/MenuComponent"
import MiddleMenuBan from "../components/MiddleMenuBan"
import CompaniesSection from "../components/CompaniesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"




function Home() {

  return (
    <>
     <Header/>
      {/* <Separator /> */}
      <section className="hero-section">
        <div className="w-full static ">
          
            <img  src="https://electro.madrasthemes.com/wp-content/uploads/2022/06/hero.jpg" alt="Image" className="rounded-md min-h-[24rem] object-cover" />
            {/* Header-banner-overlay  */}
            <div className="overlay lg:w-1/2  w-full absolute flex flex-col top-1/2 -translate-y-1/2  lg:items-start p-16">
              <h1 className="scroll-m-20 text-4xl text-white font-thin tracking-tight lg:text-5xl">
                Over <span className="font-bold">1 MILION</span>
              </h1>
              <p className="leading-7 text-white [&:not(:first-child)]:mt-1">
                OF COOL ELECTRONICS AND TECH GADGETS OUT THERE
              </p>
              <div className="relative lg:w-full h-fit  mt-5  2xl:w-full ">
                <Button className="absolute border-none right-0  h-[48px] bg-primary rounded-r-full rounded-l-none text-muted-foreground">
                  <Search className="" />
                </Button>
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-full bg-background h-12 pl-8 "
                />
              </div>
            </div>
        </div>
      </section>
      <div className="top-card mt-[-3rem]  px-6 relative  grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 sm:grid-cols-1  gap-4">
          <img className="lg:col-span-2 m-auto md:col-span-2  col-span-1 object-cover" src={ban1} alt="s" />
          <img className="object-cover m-auto col-span-1" src={ban2} alt="s" />
          <img className="object-cover m-auto col-span-1" src={ban3} alt="s" />

      </div>
      <div className="top-card my-6 px-6 relative  grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 sm:grid-cols-1 gap-4">
      <img className=" m-auto md:col-span-1   col-span-1 object-cover" src={ban4} alt="s" />
          <img className="object-cover m-auto col-span-1" src={ban5} alt="s" />
          <img className="object-cover m-auto col-span-1" src={ban6} alt="s" />
          <img className="object-cover m-auto col-span-1" src={ban7} alt="s" />

      </div>
      <MenuComponent />
      <MiddleMenuBan />
      <CompaniesSection />
       <Newsletter/>
      <Footer/>
    </>

  )
}

export const Newsletter = () =>(
  <div className="bg-primary flex flex-col justify-center p-4 rounded-md items-center h-40">
  <div className="flex text-black ">
    <Send /> <h2 className="mx-3">Sign up to Newsletter</h2>
  </div>
  <div className="relative lg:w-1/3 w-full   mt-5  ">
    <Button className="absolute   hover:bg-gray-800 right-0   h-full bg-black rounded-r-full rounded-l-none text-muted-foreground">
      SignUp
    </Button>
    <Input
      type="search"
      placeholder="Enter Your Email..."
      className="rounded-full placeholder:text-gray-500 text-black bg-white  h-12 pl-8  w-full"
    />
  </div>
</div>
  
)
export default Home