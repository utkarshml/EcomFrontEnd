import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useState } from "react"

function ChangePassword() {
    const [newPassword , setNewPassword] = useState("")
    const [comfrim , setComfrim] = useState("");

  return (
    <>
   <div className='grid  grid-cols-2 gap-3 min-h-[100vh]'>
      <div   className="col-span-2 text-primary relative lg:flex flex-col justify-center items-center py-5 hidden  w-full lg:col-span-1">
        <div onClick={()=> window.history.back()} className="u absolute top-12 left-4 cursor-pointer flex gap-2">
        <ArrowLeft />
        Back
        </div>
      <div className=" hover:ring-primary w-[70%]  bg-secondary h-1/3 rounded-lg flex justify-center items-center">
       <h4 className="scroll-m-20 text-5xl font-semibold tracking-tight">
         elctro<span className="text-primary ">.</span>
       </h4>
     </div>
      </div>

   <div className=" flex justify-center flex-col gap-2 m-auto w-[70%] items-center col-span-2 lg:col-span-1">
   <form className="flex w-full flex-col gap-3">
    <div className="flex flex-col items-start">
        <label className="text-start mb-2" htmlFor="new-password">New Password </label>
        
        <Input onChange={(e)=> setNewPassword(e.target.value)} type="text" value={newPassword} name="new-password" id="new-password" />
    </div>
    <div className="flex flex-col items-start">
        <label className="text-start mb-2" htmlFor="new-password">Comfirm Password </label>
        
        <Input onChange={(e)=> setComfrim(e.target.value) } type="text" value={comfrim} name="comfirm-password" id="comfirm-password" />
    </div>
   { newPassword == comfrim ? " " :  <span className="text-sm text-red-700">Password not match </span>}

    <Button  className="mt-2">Change Password</Button>
   </form>
   </div>
   </div>
   </>

  )
}

export default ChangePassword