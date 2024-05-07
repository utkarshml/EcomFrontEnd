
import { useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'

function ModifyBreadCrum() {
    const pathname = useLocation().pathname.split('/').filter(path => path)
    
  return (
      
 
    <Breadcrumb className='my-3 mx-5'>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator/>
  
    {
      pathname.map((item , index)=>{
        const routeTo = `/${pathname.slice(0, index + 1).join('/')}`;
        const isLast = index == pathname.length - 1;
   

        return (
          isLast ? 
           <BreadcrumbItem aria-current="page" key={routeTo}>
           <BreadcrumbPage>{item}</BreadcrumbPage>
          </BreadcrumbItem>
           : 
           (
           
           <BreadcrumbItem key={routeTo}>
           <BreadcrumbLink href="/">{item}</BreadcrumbLink>
           <BreadcrumbSeparator/>
          </BreadcrumbItem>
          

          )
           
        )
      })
    }
  </BreadcrumbList>
</Breadcrumb>

  )
}

export default ModifyBreadCrum