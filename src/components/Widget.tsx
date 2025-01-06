import styled from 'styled-components'
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useEffect, useState } from 'react';

const WidgestDiv = styled.div`
  width : 15rem;
  height : 10rem;
 
  margin : 0.5rem;
  gap : 1rem;
  display : flex; 
  border-radius : 10px;
  > .data {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.2rem;
    padding : 1rem;
    > .widget-title {
        font-size : 0.7rem;
        font-weight : 600; 
    }
    > h5 {
        font-size : 1.2rem;
    }
    > .tranding {
        font-size : 0.8rem
    }
  }
  .widgetCircle{
    > .circle-div {
        display: flex;
        height: 5rem;
        justify-content: center;
        width: 5rem;
        position : relative;
        border-radius: 50%;
        align-items: center;
        &::before {
            content : "";
            width : 4rem;
            position: absolute;
            height : 4rem;
            border-radius : 50%;
            z-index: 1;

        }
        > .circle-data {
            z-index : 2;
         }
     }

}
`
interface WidgestProp {
    title : string,
    num : string,
    percentage : number,
    trand : number,
    color : string
}
function Widgets({title , num , percentage , trand , color} : WidgestProp) {
  const [progress , setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      // Update progress every 100 milliseconds
      if (progress < percentage) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 7);

    return () => clearInterval(interval);
  }, [progress, percentage]);

  return (  
  <WidgestDiv className='shadow-lg'>
    <div className="data ">
        <span className='widget-title '>{title}</span>
        <h5>{num}</h5>
        <span  className={`tranding ${trand < 0 ? "text-destructive" : "text-green-600"}`}>
        {trand > 0 ? <FaCaretUp/> : <FaCaretDown/>}{trand > 0 ?`${trand}` :`${trand}`}
        </span>
    </div>
    <div className="widgetCircle data">
          <div  className='circle-div' style={{
            background : `conic-gradient(${color} ${(progress /100) * 360}deg, white 0)`
          }}>
            <span className="circle-data">
                {progress}%
            </span>
          </div>
    </div>
  </WidgestDiv>
  )
}

export default Widgets
