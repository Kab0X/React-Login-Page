import { useEffect } from 'react';
import image from '../../assets/images/images2.png';

function Images({currentPage}: {currentPage: number}) {
    useEffect(() => {
        console.log(currentPage);
    }, [currentPage])
    
    return (
        <div className='mt-16'>
            <img src={image} className='w-full'/>
        </div>
    );
}

export default Images;