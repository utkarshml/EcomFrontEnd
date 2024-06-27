
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function ForgetPassword() {
  return (
    <>
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
   <form onSubmit={(e)=> e.preventDefault()} className="flex w-full flex-col gap-3">
    <div className="flex flex-col items-start">
        <label className="mb-2" htmlFor="email">Email</label>
        <Input type="email" name="email" placeholder="Enter your register email" id="emal" />
    </div>

    <Button  className="mt-2"><Link to={'/change'}>
     Send
    </Link></Button>
   </form>
   </div>
   </div>
   
   </>
  )
}

export default ForgetPassword