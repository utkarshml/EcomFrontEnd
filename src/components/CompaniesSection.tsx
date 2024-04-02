import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Separator } from "./ui/separator"
import com1 from "../images/themeforest1.webp"
import com2 from "../images/themeforest2.webp"
import com3 from "../images/themeforest3.webp"
import com4 from "../images/themeforest4.webp"
import com5 from "../images/themeforest5.webp"
const imagesArr : string[] = [com1, com2, com3, com4, com5]
function CompaniesSection() {
  return (
    <div className="w-full px-16 my-16">
        <Separator/>
 <div className="w-full h-[6rem]" >
 <Carousel className="w-full h-full">
      <CarouselContent className="-ml-1 h-full">
        {imagesArr.map((i,index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 flex items-center lg:basis-1/4">
             <img className=" " src={i}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
<Separator/>
</div>
  )
}

export default CompaniesSection