import MultiRangeSlider from "./MultiRange"

function SliderByMe() {

  return (
    <div className="flex   gap-3 mt-3  pr-5   flex-col items-start justify-start">
    <div className=" w-full ">
    <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
  </div>
    </div>
  )
}

export default SliderByMe