import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
function App() {

const Home = lazy(()=> import("./pages/Home"));
  return (
    <Suspense fallback={<h1>Lodding....</h1>}>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
   </Suspense>
  )
}

export default App
