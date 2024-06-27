import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Product from './pages/Product';
function App() {

const Home = lazy(()=> import("./pages/Home"));
const Shop = lazy(()=> import("./pages/Shop"));
const Login = lazy(()=> import("./pages/Login"));
const SignUp = lazy(()=> import("./pages/Signup"));
const ForgetPassword = lazy(()=> import("./pages/ForgetPassword"))
const ChangePassword = lazy(()=> import("./pages/ChangePassword"))
const UserAccount = lazy(()=> import('./pages/MyProfile'))
  return (
    <Suspense fallback={<Loader/>}>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/shop/id' element={<Product/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/change' element={<ChangePassword/>}/>
      <Route path='/account' element={<UserAccount/>}/>



    </Routes>
   </Router>
   </Suspense>
  )
}

export default App
