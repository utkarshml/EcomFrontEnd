
import { useState } from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/button'


import img from "../images/Profile-vector.jpg"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import FileInputButton from '../components/FileInputButton';

const InputStyle: string = ' cursor-pointer foucs:border-none p-3 active:outline-none focus-visible:outline-primary px-5';
function MyProfile() {

  const [updated, setUpdate] = useState<boolean>(true)
  const [file , setFile] = useState<string>("https://static.vecteezy.com/system/resources/thumbnails/005/720/479/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg");
  const fileTakeForBanner = (file : string) => {
    setFile(file)
}

  return (
    <>
      <Header />
      <div className='relative  '>
        <div className="w-full ">
           <FileInputButton classStyle='absolute bottom-2 right-5 z-[999] ' fileInput={fileTakeForBanner}/>
          <img src={file} alt="Banner" className="w-full object-cover  h-[15rem]" />
        </div>
        <UserDetails updated={updated} update={setUpdate} />
      </div>
    </>
  )
}
interface prop {
  update: React.Dispatch<React.SetStateAction<boolean>>,
  updated: boolean
}
const UserDetails = ({ update, updated }: prop) => {
  const [name, setName] = useState<string>("Utkarsh");
  const [last, setLast] = useState<string>("Jaiswal");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [Address, setAddress] = useState<string>("");
  const [pin, setPin] = useState<number>();
  const [newPass , setNewPass] = useState<string>()
  const [Comfirm , setComfirm] = useState<string>()
  const [oldPass , setOldPass] = useState<string>()
  const [gender, setGender] = useState<string>("She/Her");
  const [profile , setProfile] = useState<string>(img);
  const fileTakeForProfile = (file : string) => {
    setProfile(file)
  }
  return (
    <>
      <div className='grid absolute px-5 top-24 w-full grid-cols-1 lg:mx-8 lg:grid-cols-3  '>
        <div className='col-span-1 px-5 flex  lg:items-start items-center flex-col'>
          <div className='w-full'>
            <FileInputButton  classStyle='absolute  top-0' fileInput={fileTakeForProfile}/>
            <img className='h-[20rem] w-[20rem] m-auto lg:ms-0 rounded-full border-2 border-primary' src={profile} alt="" />
          </div>
          <span className='text-2xl font-bold mt-4'><span>{name}</span> <span>{last}</span></span>
          <span className='dar dark:text-gray-400 font-bold text-gray-700'>{gender}</span>
          <Dialog>
            <DialogTrigger className='mt-5' asChild><Button>Change Password</Button></DialogTrigger>
            <DialogContent>
              <div>
                <DialogTitle>Change Password</DialogTitle>
              </div>
              <div className="input-old-password m-2  flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="old-pass ">Old Password</label>
              <input onChange={(e)=> setOldPass(e.target.value)}  value={oldPass} required id='old-pass' className={`bg-secondary last-name w-full h-9 rounded-md ${InputStyle}`} type="text" />
            </div>
            <div className="input-last-name m-2  flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="new-pass">New Password</label>
              <input  onChange={(e)=> setNewPass(e.target.value)}  value={newPass}    required id='new-pass' className={`bg-secondary last-name w-full h-9 rounded-md ${InputStyle}`} type="text" />
            </div>
            <div className="input-last-name m-2  flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="pass-com">Comfirm Password</label>
              <input  onChange={(e)=> setComfirm(e.target.value)}  value={Comfirm}    required id='pass-com' className={`bg-secondary last-name w-full h-9 rounded-md ${InputStyle}`} type="text" />
            </div>
            <span  className={`ml-2 ${newPass === Comfirm ?"hidden" : "block" } text-red-500`} >Password Not Mactch !</span>
            <Button className='mt-3'>Update</Button>
            </DialogContent>
          </Dialog>

        </div>
        <div className=' py-3  px-6 col-span-2'>

          <div className=' w-full relative hidden lg:block h-[15rem]'></div>
          <Button onClick={() => update(!updated)} className='absolute lg:top-[13rem] top-[20rem] right-[4rem]'>
            {updated ? "Update" : "Cancel"}
          </Button>
          <div className='grid w-full lg:grid-cols-2 gap-4 grid-cols-1 '>

            <div className="input-first-name m-2 lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="first-name">First Name</label>
              <input onChange={(e) => setName(e.target.value)} disabled={updated ? true : false} value={name} required id='first-name' className={`bg-secondary first-name w-full h-9 rounded-md ${InputStyle}`} type="text" />
            </div>
            <div className="input-last-name m-2 lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="last-name ">Last Name</label>
              <input onChange={(e) => setLast(e.target.value)} disabled={updated ? true : false} value={last} required id='last-name' className={`bg-secondary last-name w-full h-9 rounded-md ${InputStyle}`} type="text" />
            </div>
            <div className="input-email m-2 lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} disabled={updated ? true : false} required id='email' className={`bg-secondary email w-full h-9 rounded-md ${InputStyle}`} type="email" />
            </div>
            <div className="input-phone m-2  lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="phone">Phone </label>
              <input onChange={(e) => setPhone(parseInt(e.target.value))} value={phone} disabled={updated ? true : false} required id='phone' className={`bg-secondary phone w-full h-9 rounded-md ${InputStyle}`} type="number" />
            </div>
            <div className="input-gener m-2 lg:col-span-2">
              <h3 className='text-start text-md font-bold mb-2'>Gender</h3>
              <div className='flex gap-5  '>
                <div className='f'>
                  <input name='gender ' checked={gender === 'He/Him'} onChange={() => setGender("He/Him")} disabled={updated ? true : false} required id='male' type="radio" />
                  <label className='mb-2 mx-2 font-bold cursor-pointer' htmlFor="male">Male </label>

                </div>
                <div>
                  <input checked={gender === 'She/Her'} onChange={() => setGender("She/Her")} name='gender' disabled={updated ? true : false} required id='female' type="radio" />
                  <label className='mb-2 mx-2 font-bold cursor-pointer' htmlFor="female">Female </label>

                </div>
                <div>
                  <input checked={gender === 'Others'} onChange={() => setGender("Others")} name='gender' disabled={updated ? true : false} required id='others' type="radio" />
                  <label className='mb-2 mx-2 font-bold cursor-pointer' htmlFor="others">Others </label>

                </div>
              </div>

            </div>
            <div className="input-phone m-2  lg:col-span-2 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="phone">Address </label>
              <textarea onChange={(e) => setAddress(e.target.value)} value={Address} disabled={updated ? true : false} rows={5} cols={45} aria-required={true} required id='phone' className={`bg-secondary phone w-full  rounded-md ${InputStyle}`} ></textarea>
            </div>
            <div className="input-phone m-2  lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="State">State </label>
              <select disabled={updated ? true : false} required id='phone' className={`bg-secondary phone w-full h-9 rounded-md  px-3`}>
                <option value="uttar pradesh">Select</option>
              </select>
            </div>
            <div className="input-pin m-2  lg:col-span-1 flex flex-col items-start">
              <label className='mb-2 font-bold' htmlFor="pin">Pin </label>
              <input onChange={(e) => setPin(parseInt(e.target.value))} value={pin} disabled={updated ? true : false} required id='pin' className={`bg-secondary phone w-full h-9 rounded-md ${InputStyle}`} type="number" />
            </div>
          </div>
          <Button disabled={updated ? true : false} className='mt-4 px-10'>
            Save
          </Button>
        </div>
      </div>
    </>
  )
}

export default MyProfile