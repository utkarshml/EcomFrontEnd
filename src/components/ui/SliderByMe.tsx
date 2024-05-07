import MultiRangeSlider from "./MultiRange"

function SliderByMe() {

  return (
    <div className="flex  w-full gap-3 mt-3  pr-5   flex-col items-start justify-start">
    <div className="flex gap-10">
    <MultiRangeSlider
      min={0}
      max={1000}
      onChange={( min : number , max : number  ) => console.log(`min = ${min}, max = ${max}`)}
    />
  </div>
    </div>
  )
}

export default SliderByMe