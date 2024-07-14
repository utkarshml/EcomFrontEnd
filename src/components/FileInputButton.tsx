import { PencilIcon } from 'lucide-react';
import { ChangeEvent, useRef } from 'react';


interface fileProp {
  fileInput : (file : string)=>void
  classStyle : string
}

const FileInputButton = ({fileInput , classStyle} : fileProp) => {
  const inputUpdateAvatarPhoto = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    inputUpdateAvatarPhoto.current?.click();
  };
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file : File | undefined =  e.target.files?.[0];
    // make sure that it's not null or undefined
    const reader : FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      console.log(file)
      reader.onloadend = () =>{
        if(typeof reader.result === "string") fileInput(reader.result)
     }
    }
    // need to set something
  };


  return (
    <div className={` ${classStyle}  inline-block`}>
      <input 
        type="file" 
        ref={inputUpdateAvatarPhoto} 
        className="hidden" 
        onChange={handleImageChange}
      />
      <button 
        onClick={handleClick}
        className="w-10 h-10 bg-primary cursor-pointer  hover:bg-secondary rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      >
        <PencilIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default FileInputButton;