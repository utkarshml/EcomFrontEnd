import { Facebook, Headset, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className=" footer grid lg:grid-cols-2 grid-cols-1  my-8 min-h-16 -p-8 bg-secondary">
        <div className="flex flex-col items-start justify-start">
        <div className="p-6">
          <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            elctro<span className="text-primary ">.</span>
          </h4>
        </div>
        <div className="contact px-6 flex gap-3">
        <Headset className="size-12" />
          <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
          <span className="text-primary ">+91 0000009900</span>
          </div>
        </div>
        <span className="mx-6  mt-5 pt font-bold">Contact Info</span>
        <span className="mx-6 font-light py-2">17 Princess Road, London, Greater London NW1 8JR, UK</span>
        <div className="flex gap-5 mx-6 mt-6 mb-12">
         <Link className="hover:text-blue-600" to={"/"}> <Facebook /></Link>
         <Link className="hover:text-green-600" to={"/"}> <MessageCircle/></Link>
         <Link className="hover:text-blue-500" to={"/"}> <Linkedin /></Link>
         <Link className="hover:text-red-500" to={"/"}><Youtube /></Link>
         <Link className="hover:text-pink-500" to={"/"}><Instagram /> </Link>
        </div>
        </div>
        <div className="flex items-center">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Find It Fast</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="https://flowbite.com/" className="hover:underline">Laptops & Computers</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://tailwindcss.com/" className="hover:underline">Cameras & Photography</Link>
                      </li >
                      <li className="mb-4">
                          <Link to="https://tailwindcss.com/" className="hover:underline">Smart Phones & Tablets</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://tailwindcss.com/" className="hover:underline">Waterproof Headphones</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://tailwindcss.com/" className="hover:underline">TV & Audio</Link>
                      </li>
                  

                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">About</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Contact</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Wishlist</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">FAQs</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Store Directory</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Customer Care</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">My Account
</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Track your Order</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Customer Service</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Returns/Exchange</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://github.com/themesberg/flowbite" className="hover:underline ">Product Support</Link>
                      </li>
                  </ul>
              </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer