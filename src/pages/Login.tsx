
function Login() {
  return (
   <div className='grid grid-cols-2 min-h-[100vh]'>
      <div className="col-span-2 bg-secondary w-full lg:col-span-1">

      </div>

   <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
   <form action="">
    <div className="flex flex-col items-start">
        <label className="text-start" htmlFor="name">Name </label>
        <br/>
        <input type="text" name="name" id="name" />
    </div>
    <div className="flex flex-col items-start">
        <label htmlFor="email">Email</label>
        <br/>
        <input type="email" name="email" id="emal" />
    </div>
    <div className="flex flex-col items-start">
        <label htmlFor="password">Password</label>
        <br/>
        <input type="password" name="password" id="password" />
    </div>
   </form>
   </div>
   </div>
   

  )
}

export default Login