import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function Star({stars = 5}){
   const [rating, setRating]=useState(0);
   const [hover, setHover]=useState(0);
function handleClick(getCurrentIndex){
setRating(getCurrentIndex);
}
function handleMouseEnter(getCurrentIndex){
setHover(getCurrentIndex)
}
function handleMouseLeave(){
setHover(rating)
}

    return (
        <div className="star-rate">
            {[...Array(stars)].map((_, index) => {
                const starIndex = index + 1;

                return (
                    <FaStar
                        key={starIndex}
   className={starIndex <= (hover || rating) ? 'active' : 'inactive' }                   onClick={() => handleClick(starIndex) }
                        onMouseMove={() => handleMouseEnter(starIndex)}
                        onMouseLeave={() => handleMouseLeave()}                     size={40}
                    />
                );
            })}
        </div>
    );
}
     