import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { CircleUser, Heart, MapPin, Menu, ShoppingBag, ShoppingCart, Truck, UserRound } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar"
import { Badge } from "./ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useSelector } from "react-redux"
import { RootState } from "../App/store"


function Header() {
    const location = useLocation()
    const paths = location.pathname.split('/');

     const isLogin : boolean = true;
    const CartCount  : number = useSelector((state : RootState)=>{
      return state.cart.length
    })

  return (<>
    <div className="top-header  hidden w-full px-3 lg:flex justify-between h-12 items-center">
    <Link to={"/"}>Welcome to Worldwide Electronics Store</Link>
    {isLogin ? 
         <div className="flex h-5  items-center">
         <Button variant={"link"} asChild ><Link to={"/shop"}><ShoppingBag className="mx-1 size-4" /> Shop</Link></Button>
         <Separator orientation="vertical" />
         <Button variant={"link"} asChild ><Link to={"/account"}><CircleUser className="mx-1 size-4" /> My Account</Link></Button>
         <Separator orientation="vertical" />
         <div className="m-4"><ModeToggle /></div>
       </div> : 
         <div className="flex h-5  items-center">
         <Button  variant={"link"} asChild ><Link to={"/login"}> Login</Link></Button>
         <Separator orientation="vertical" />
         <Button variant={"link"} asChild ><Link to={"/signup"}>SignUp</Link></Button>
         <Separator orientation="vertical" />
         <div className="m-4"><ModeToggle /></div>
       </div>
  }

  </div>
     <header className="flex items-center justify-between">
          <SliderMenu/>
    
     <div className="logo  flex justify-center items-center">
       <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
         elctro<span className="text-primary ">.</span>
       </h4>
     </div>
     <div className="navigation-bar hidden  lg:block">
       <Menubar>
         <MenubarMenu>
             <MenubarTrigger className={`${location.pathname == "/"   ? "border-primary border-b-2" : ""}`}><Link to={"/"}>Home</Link></MenubarTrigger>
         </MenubarMenu>
         <MenubarMenu>
         <MenubarTrigger className={`${location.pathname == "/shop" ||paths.includes("shop") ? "border-primary border-b-2" : ""}`}><Link to={"/shop"}>Shop</Link></MenubarTrigger>
         </MenubarMenu>
         <MenubarMenu>
           <MenubarTrigger>Contact us </MenubarTrigger>
         </MenubarMenu>
       </Menubar>
     </div>
     <div className="header-icons mr-4 flex gap-5">
        <PopoverCom isLogin={isLogin}/>
        <Link  className="flex items-center text-5" to={"/wish"}>
         <span className="relative mr-3">
           <Heart className="size-5" />
         </span>
      
       </Link>
       <Link  className="flex items-center text-5" to={"/cart"}>
         <span className="relative mr-3">
           <ShoppingCart className="size-5" />
           <Badge style={{ width: "1rem", height: "1rem" }} className="absolute -top-2 -right-3 " variant={"destructive"}>{CartCount}</Badge>
         </span>
      
       </Link>
     </div>
   </header>
   </>
  )
}

const SliderMenu = ()=>{
    return (
     <Sheet>
  <SheetTrigger className="lg:hidden">
    <div  className="ml-4 bg-secondary p-2 rounded-md" >
        <Menu />
        </div></SheetTrigger>
  <SheetContent aria-describedby="sideMenu" side={"left"}>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <Menubar className="flex flex-col items-start">
         <MenubarMenu>
         <MenubarTrigger className={`${location.pathname == "/" ? "border-primary border-b-2" : ""}`}><Link to={"/"}>Home</Link></MenubarTrigger>
         </MenubarMenu>
         <MenubarMenu>
         <MenubarTrigger className={`${location.pathname == "/shop" ? "border-primary border-b-2" : ""}`}><Link to={"/shop"}>Shop</Link></MenubarTrigger>
         </MenubarMenu>
         <MenubarMenu>
           <MenubarTrigger>Contact us </MenubarTrigger>
         </MenubarMenu>
       </Menubar>
    </SheetHeader>
  </SheetContent>
</Sheet>

     )
}
interface PopoverProp {
  isLogin : boolean
}

function PopoverCom({isLogin} : PopoverProp) {
  return (
    <Popover>
    <PopoverTrigger className="lg:hidden"><UserRound className="size-5" /></PopoverTrigger>
    <PopoverContent className="h-[15rem]">
    <div className="top-header  w-full p-0 flex-col  justify-between h-12 items-center">
      {
        isLogin ?     <div className="flex h-5 flex-col  items-center">
        <Button variant={"link"} asChild ><Link to={"/"}><CircleUser className="mx-1 size-4" /> My Account</Link></Button>
          <Button variant={"link"} asChild ><Link to={"/"}><Truck className="mx-1 size-4" /> Track your Order</Link></Button>
          <Button variant={"link"} asChild ><Link to={"/"}><MapPin className="mx-1 size-4" /> Location</Link></Button>
          <Button variant={"link"} asChild ><Link to={"/shop"}><ShoppingBag className="mx-1 size-4" /> Shop</Link></Button>   
          <div className="m-4"><ModeToggle /></div>
        </div> : 
         <div className="flex h-5 flex-col  items-center">
           <Button variant={"link"} asChild ><Link to={"/login"}><Truck className="mx-1 size-4" />Login</Link></Button>
           <Button variant={"link"} asChild ><Link to={"/signup"}><MapPin className="mx-1 size-4" /> SignUp</Link></Button>
           <div className="m-4"><ModeToggle /></div>
         </div> 
      }
  </div>
    </PopoverContent>
  </Popover>
  )
}

export default Header;