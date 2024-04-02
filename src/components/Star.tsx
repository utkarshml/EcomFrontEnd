
import ReactStars from 'react-rating-star-with-type'

interface starProp {
    colors : string[],
    value : number,
    isEdit : boolean

}
export default function Star({colors , value , isEdit} : starProp){

    
    return <ReactStars 
    value={value}  
    isEdit={isEdit}  
    // [ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]
    activeColors={colors} 
    />
}



