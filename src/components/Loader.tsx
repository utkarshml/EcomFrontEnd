import { LoaderCircle } from 'lucide-react'

function Loader() {
  return (
    <div className=' w-full flex  justify-center items-center h-[100vh] rounded-[50%] border-t-5 border-bg'><LoaderCircle className='w-16 h-16 text-primary animate-spin' /></div>
  )
}

export default Loader