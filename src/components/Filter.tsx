import { useState } from "react";
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import SliderByMe from "./ui/SliderByMe";



type brandsData = {
    name: string;

}
const brands: brandsData[] = [{
    name: "Google",
},
{
    name: "Microsoft",
},
{
    name: "Amazon",
},
{
    name: "Nvidia",
},
{
    name: "OpenAI"
},
{
    name: "starLink"
}
]
const Color: brandsData[] = [{
    name: "Green",
},
{
    name: "Red",
},
{
    name: "Yellow",
},
{
    name: "Pink",
},
{
    name: "Purple"
},
{
    name: "White"
}
]

function Filter() {
    const filterLength: number = 5
    const [brand, setBrand] = useState<brandsData[]>(brands.slice(0, filterLength));
    const [color, setColor] = useState<brandsData[]>(Color.slice(0, filterLength));
    
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleColor, setVisibleColor] = useState<boolean>(false);
    const isLength: boolean = filterLength < brands.length;
    const filterHandlerForcheckBoxBrands = () => {
        setVisible(!visible);
        if (visible) {
            setBrand(brands.slice(0, filterLength))
        } else {
            setBrand(brands);
        }
    }
    const filterHandlerForcheckBoxColors = () => {
        setVisibleColor(!visibleColor);
        if (visibleColor) {
            setColor(Color.slice(0, filterLength))
        } else {
            setColor(Color);
        }
    }
    return (
        <div className="p-3" >
            <div className="w-full">
                <h2 className="w-1/2 text-start text-2xl pr-4 border-b-2 border-primary ">
                    Filters
                </h2>
            </div>
            <h3 className=" text-start my-5  font-bold">Brands</h3>
            <div className="flex  gap-3 flex-col animate-in items-start justify-start">

                {brand.map((item, index) => (

                    <div key={index} className="flex    cursor-pointer items-center gap-3 ">
                        <Checkbox id={item.name} />
                        <label className="cursor-pointer" htmlFor={item.name}>
                            {item.name}
                        </label>
                    </div>
                ))}
                {isLength && <Button onClick={filterHandlerForcheckBoxBrands} variant={"outline"}>{visible ? "Show less" : "Show more"}</Button>}

            </div>
            <Separator className="my-6" />
            <h3 className=" text-start my-5  font-bold">Brands</h3>
            <div className="flex  gap-3 flex-col animate-in items-start justify-start">

                {color.map((item, index) => (

                    <div key={index} className="flex    cursor-pointer items-center gap-3 ">
                        <Checkbox id={item.name} />
                        <label className="cursor-pointer" htmlFor={item.name}>
                            {item.name}
                        </label>
                    </div>
                ))}
                {isLength && <Button onClick={filterHandlerForcheckBoxColors} variant={"outline"}>{visibleColor ? "Show less" : "Show more"}</Button>}

            </div>
            <Separator className="my-6" />
            <h3 className=" text-start my-5 font-bold">Price</h3>
         <SliderByMe/>

            </div>
            )
}



            export default Filter


