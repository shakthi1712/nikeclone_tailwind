import {star} from '../assets/icons';

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt="image" className="w-[280px] h-[280px]" />
          <div className="mt-8 flex justify-start gap-2.5">
           <img src={star} alt="star" width={24} height={24}  />
           <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
          </div>
          <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
          <p className='mt-2 font-montserrat font-semibold text-coral-red leading-normal text-2xl '>{price}</p>
    </div>
  )
}

export default PopularProductCard