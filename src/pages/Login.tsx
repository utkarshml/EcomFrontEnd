import { ArrowLeft, Eye, LucideEyeOff } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link } from "react-router-dom"
import { useState } from "react"

function Login() {
  const [show , setShow] = useState<boolean>(false)
  return (
   <div className='grid  grid-cols-2 gap-3 min-h-[100vh]'>
      <div  onClick={()=> window.history.back()} className="col-span-2 text-primary relative lg:flex flex-col justify-center items-center py-5 hidden  w-full lg:col-span-1">
        <div className="u absolute top-12 left-4 cursor-pointer flex gap-2">
        <ArrowLeft />
        Back
        </div>
      <div className="logo w-[70%] bg-secondary h-1/3 rounded-lg flex justify-center items-center">
       <h4 className="scroll-m-20 text-5xl font-semibold tracking-tight">
         elctro<span className="text-primary ">.</span>
       </h4>
     </div>
      </div>

   <div className=" flex justify-center flex-col gap-2 m-auto w-[70%] items-center col-span-2 lg:col-span-1">
   <form className="flex w-full flex-col gap-3">
    <div className="flex flex-col items-start">
        <label className="mb-2" htmlFor="email">Email</label>
        <Input type="email" name="email" id="emal" />
    </div>
    <div className="flex flex-col items-start">
        <label className="mb-2" htmlFor="password">Password</label>
        <div className="w-full relative">
        <Input type={show ? "text" : "password"} name="password" id="password" />
        {
          show ?     <LucideEyeOff onClick={()=>setShow(false)} className="size-5 absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 "/> 
          :           <Eye  onClick={()=>setShow(true)} className="size-5 absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 "/>
        }

    

        </div>
    </div>
    <Button  className="mt-2">Login</Button>
   </form>
   <Button variant={"secondary"}  className="mt-4 w-full"><Link className="w-full" to={"/signup"}>
     SignUp
    </Link></Button>
   </div>
   </div>
   

  )
}

export default Login