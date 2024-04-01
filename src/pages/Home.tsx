import { Link, useLocation } from "react-router-dom"
import { ModeToggle } from "../components/mode-toggle"
import { Button } from "../components/ui/button"
import { CircleUser, GitCompareArrows, Heart, MapPin, Search, ShoppingBag, ShoppingCart, Truck, UserRound } from "lucide-react"
import { Separator } from "../components/ui/separator"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../components/ui/menubar"
import { AspectRatio } from "../components/ui/aspect-ratio"
import { Input } from "../components/ui/input"
import { Card } from "../components/ui/card"
import ban1 from "../images/ban-1.png"
import ban2 from "../images/ban-2.png"
import ban3 from "../images/ban-3.png"
import ban4 from "../images/ban-4.png"
import ban5 from "../images/ban-5.png"
import ban6 from "../images/ban-6.png"
import ban7 from "../images/ban-7.png"
import { Badge } from "../components/ui/badge"
import MenuComponent from "../components/MenuComponent"




function Home() {
  const location = useLocation()
  return (
   <>
   <div  className="top-header w-full p-0 flex justify-between h-12 items-center">
    <Link to={"/"}>Welcome to Worldwide Electronics Store</Link>
    <div className="flex h-5  items-center">
     <Button variant={"link"} asChild ><Link to={"/"}><MapPin className="mx-1 size-4" /> Location</Link></Button>
     <Separator orientation="vertical"/>
     <Button variant={"link"} asChild ><Link to={"/"}><Truck className="mx-1 size-4" /> Track your Order</Link></Button>
     <Separator orientation="vertical"/>
     <Button variant={"link"} asChild ><Link to={"/"}><ShoppingBag className="mx-1 size-4" /> Shop</Link></Button>
     <Separator orientation="vertical"/>
     <Button variant={"link"} asChild ><Link to={"/"}><CircleUser className="mx-1 size-4" /> My Account</Link></Button>
     <Separator orientation="vertical"/>
     <div className="m-4"><ModeToggle/></div>
    </div>
   </div>
   <header className="flex items-center justify-between">
    <div className="logo">
    <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
      elctro<span className="text-primary ">.</span>
    </h4>
    </div>
    <div className="navigation-bar">
    <Menubar>
  <MenubarMenu> 
    <Link to={"/"} >
    <MenubarTrigger className={`${location.pathname == "/" ? "border-primary border-b-2" : ""}`}>Home</MenubarTrigger>
    </Link>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>About</MenubarTrigger>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Category</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator/>
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Feature</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator/>
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Contact us </MenubarTrigger>
  </MenubarMenu>
</Menubar>
    </div>
    <div className="header-icons flex gap-5">
     <Link  to={"/"}>
     <GitCompareArrows className="size-5"/>
     </Link>
     <Link to={"/"}>
     <Heart className="size-5" />
     </Link>
     <Link to={"/"}>
     <UserRound className="size-5" />
     </Link>
     <Link className="flex items-center text-5" to={"/"}>
      <span className="relative mr-3">
      <ShoppingCart className="size-5" /> 
      <Badge style={{width: "1rem", height : "1rem"}} className="absolute -top-2 -right-3 " variant={"destructive"}>0</Badge>
      </span>
    
     $12.00
     </Link>
    </div>
   </header>
   {/* <Separator /> */}
   <section className="hero-section">
   <div className="w-full static ">
  <AspectRatio  ratio={16 / 9}>
    <img src="https://electro.madrasthemes.com/wp-content/uploads/2022/06/hero.jpg" alt="Image" className="rounded-md object-cover" />
    {/* Header-banner-overlay  */}
    <div className="overlay w-1/2 absolute flex flex-col top-1/3  items-start p-16 -translate-y-1/2">
    <h1 className="scroll-m-20 text-4xl text-white font-thin tracking-tight lg:text-5xl">
      Over <span className="font-bold">1 MILION</span>
    </h1>
    <p className="leading-7 text-white [&:not(:first-child)]:mt-1">
    OF COOL ELECTRONICS AND TECH GADGETS OUT THERE
    </p>
    <div className="relative w-full mt-5 flex-1 md:grow-0">
      <Button className="absolute bor right-0 top-1/2 -translate-y-1/2 h-[48px] bg-primary rounded-r-full rounded-l-none text-muted-foreground">
      <Search className="" />
      </Button>
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full bg-background h-12 pl-8 md:w-[200px] lg:w-full"
            />
          </div>
    </div>
  </AspectRatio>
</div>
</section>
<div className="top-card mt-[-15rem]  px-6 relative  grid grid-cols-4 gap-4">
<Card  style={{backgroundImage : `url(${ban1})` }} className="col-span-2  h-[8rem] bg-cover">
</Card>
<Card  style={{backgroundImage : `url(${ban2})` }} className="h-[8rem] bg-cover">
</Card>
<Card  style={{backgroundImage : `url(${ban3})` }}  className="h-[8rem] bg-cover">
</Card>
</div>
<div className="top-card my-6 px-6 relative  grid grid-cols-4 gap-4">
<Card style={{backgroundImage : `url(${ban4})` }}  className="h-[8rem] bg-cover">
</Card>
<Card  style={{backgroundImage : `url(${ban5})` }}  className="h-[8rem] bg-cover">
</Card>
<Card  style={{backgroundImage : `url(${ban6})` }}  className="h-[8rem] bg-cover">
</Card>
<Card  style={{backgroundImage : `url(${ban7})` }}   className="h-[8rem] bg-cover">
</Card>
</div>
<MenuComponent/>
</>
  )
}

export default Home