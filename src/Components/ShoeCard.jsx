
const shoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleClick=()=>{
        if(bigShoeImg!==imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe);
        }

    }
  return (
    <div className={`border-2 rounded-xl 
     ${bigShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'}
     cursor-pointer max-sm:flex-1 z-50`}
     onClick={handleClick}
     >
<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 z-30 cursor-pointer">
    <img src={imgURL.thumbnail} alt="shoe" 
    width={127} height={103} className="object-contain cursor-pointer z-30" />
</div>
</div>
  )
}

export default shoeCard;