import React, { FC } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
interface Props{
    rating:number
}
const Ratings:FC<Props> = (props) => {
    
    const {rating}=props;
 const stars=[];
 for(let i=1;i<=5;i++){ 
    if (i<=rating) {
        stars.push(<AiFillStar key={i} size={20} color='#f6b100' className=' mr-2 cursor-pointer'/>)
        
    }
    else if(i===Math.ceil(rating) && !Number.isInteger(rating)){
        stars.push(<BsStarHalf key={i} size={20} color='#f6ab00' className=' mr-2 cursor-pointer'/>)
        
    }
    else{
        stars.push(<AiOutlineStar key={i} size={20}  className='text-[#f6ab00] mr-2 cursor-pointer'/>)

    }
    }
  return (<div className=' flex mt-1 8000px:mt-0 800px:ml-0'>{stars}</div>)
}

export default Ratings
