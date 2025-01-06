import { useCallback, useEffect, useState, useRef } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
  step?: number;
  defaultValues?: { min: number; max: number };
}

const MultiRangeSlider = ({ 
  min, 
  max, 
  onChange,
  step = 1,
  defaultValues = { min: min, max: max }
}: RangeSliderProps) => {
  const [minVal, setMinVal] = useState(defaultValues.min);
  const [maxVal, setMaxVal] = useState(defaultValues.max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (range.current && minValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  // Handle range input changes
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = Number(e.target.value);
    
    if (isMin) {
      const newValue = Math.min(value, maxVal - step);
      setMinVal(newValue);
    } else {
      const newValue = Math.max(value, minVal + step);
      setMaxVal(newValue);
    }
  };

  // Notify parent component of changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="=  w-full h-24 flex flex-col items-center justify-center">
      <div className=" relative w-full h-2 mb-4">
        <input
          ref={minValRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) => handleRangeChange(e, true)}
          className="thumb thumb--left absolute left-0 h-0 w-full pointer-events-none appearance-none z-30"
          style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
        />
        <input
          ref={maxValRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) => handleRangeChange(e, false)}
          className="thumb thumb--right absolute h-0 w-full pointer-events-none appearance-none z-20"
        />

        <div className="slider__track absolute w-full h-1 rounded bg-gray-200" />
        <div 
          ref={range}
          className="slider__range absolute h-1 rounded bg-primary"
        />
      </div>
      <div className="flex justify-between w-full">
        <span className="slider__value">${minVal}</span>
        <span className="slider__value">${maxVal}</span>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
