

import avatar from "../images/9439682.jpg"
import Star from "./Star";
import { Button } from "./ui/button";
import  {  useRef, useState } from "react";

const totalReviews: number = 123;
function ReviewBox() {
    return (
        <>
            <div className="grid lg:grid-cols-2 border py-5 px-10 rounded-sm">
                <div className="lg:col-span-1 flex gap-4 flex-col items-start justify-start col-span-2">
                    <span className="text-start font-bold">Based on {totalReviews} reviews </span>
                    <div className="w-full flex flex-col items-start">
                        <span className="text-3xl text-start font-bold">0.0</span>
                        <span className="ml-2">overall</span>
                        <ul className="star-lists flex w-full flex-col gap-3 mt-4">
                            <li className="flex justify-start items-center gap-4"><Star value={5} isEdit={false} colors={["red", "orange",]} />
                                <div className="w-[60%] bg-secondary h-2 rounded-md ">
                                    <div className="bg-primary w-[100%] h-full rounded-md"></div>
                                </div>
                                <span className="text-gray-400">0</span>
                            </li>
                            <li className="flex justify-start items-center gap-4"><Star value={4} isEdit={false} colors={["red", "orange",]} />
                                <div className="w-[60%] bg-secondary h-2 rounded-md ">
                                    <div className="bg-primary w-[80%] h-full rounded-md"></div>
                                </div>
                                <span className="text-gray-400">0</span>
                            </li>
                            <li className="flex justify-start items-center gap-4"><Star value={3} isEdit={false} colors={["red", "orange",]} />
                                <div className="w-[60%] bg-secondary h-2 rounded-md ">
                                    <div className="bg-primary w-[60%] h-full rounded-md"></div>
                                </div>
                                <span className="text-gray-400">0</span>
                            </li>
                            <li className="flex justify-start items-center gap-4"><Star value={2} isEdit={false} colors={["red", "orange",]} />
                                <div className="w-[60%] bg-secondary h-2 rounded-md ">
                                    <div className="bg-primary w-[40%] h-full rounded-md"></div>
                                </div>
                                <span className="text-gray-400">0</span>
                            </li>
                            <li className="flex justify-start items-center gap-4"><Star value={1} isEdit={false} colors={["red", "orange",]} />
                                <div className="w-[60%] bg-secondary h-2 rounded-md ">
                                    <div className="bg-primary w-[20%] h-full rounded-md"></div>
                                </div>
                                <span className="text-gray-400">0</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" add-review lg:col-span-1 col-span-2">
                    <div className="form flex flex-col items-start gap-3">
                        <div className="input-box flex  justify-center items-center gap-5">
                            <label className="font-bold" htmlFor="rating">Your Rating  : </label>
                            <Star isEdit={true} value={0} colors={["red", "orange",]} />
                        </div>
                        <div className="input-box flex flex-col justify-center items-start gap-5">
                            <label className="font-bold" htmlFor="rating">Write Review   : </label>
                            <textarea className="w-full bg-secondary rounded-sm p-4 focus:border-primary focus:outline-none focus:border" cols={45} rows={5} aria-required={true}></textarea>
                        </div>
                        <Button variant={"default"}>
                            Add Review
                        </Button>
                    </div>
                </div>
                <div className="col-span-2">

                </div>
                <div className="show-review mt-7 max-h-[450px] overflow-y-auto col-span-2">
                    <ReviewTemplate />
                    <ReviewTemplate />
                    <ReviewTemplate />
                    <ReviewTemplate />
                </div>
            </div>
        </>
    )
}
const ReviewTemplate = () => {
    const [edit , isEdit ] = useState<boolean>(false)
    const parRef = useRef<HTMLParagraphElement>(null)
    const inputRef = useRef<HTMLTextAreaElement>();
    const [value , setValue] = useState<string>();
    const editHandle = () => {
        if(edit == false){
            setValue(parRef.current?.innerText);
            isEdit(true)
        }
        else{
            isEdit(false)
        }

    }

    return (
        <>
            <div className="my-6 flex flex-col items-start relative">
                <div className="flex mt-3 justify-start gap-3  items-center ">
                     <img className="h-[2.5rem] w-[2.5rem] rounded-full" src={avatar}/>
                    <span>T Utkarsh</span>
                </div>
                <div className="flex flex-col mt-3 justify-center gap-3  items-start ">
                    <Star value={4.5} colors={[]} isEdit={false}/>
                    <span className="font-bold">Reviewed in India on 23 April 2024</span>
                </div>
                {edit === true ?    <div className="w-full pr-5 pl-1 mt-3">
                <textarea wrap="soft" onChange={(e) => setValue(e.target.value)} ref={inputRef} value={value} className="w-full bg-secondary focus:border-primary focus:outline-none focus:border p-3 rounded-md min-h-10   "/>
                </div> :     <p ref={parRef} className="text-start">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum vel necessitatibus atque consequuntur excepturi debitis odio voluptates ducimus blanditiis iure quasi beatae nemo natus cumque nihil, fuga adipisci ullam.
                </p> }
                <div>
                <Button onClick={editHandle} className="w-fit" variant={"link"}>{edit === true ? "Save" : "Edit"}</Button>
                <Button className="w-fit text-red-600"  variant={"link"}>Delete</Button>
                </div>
            </div>
        </>
    )
}


export default ReviewBox