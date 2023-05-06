import { useState } from 'react';
import leftArrowIcon from '../../assets/images/leftArrow.svg'
import rightArrowIcon from '../../assets/images/rightArrow.svg'

function ScrollList({currentPage, setPage}: {currentPage: number; setPage: React.Dispatch<React.SetStateAction<number>>}) {
    const [pageStyles, setPageStyle] = useState<string[]>(['bg-slate-300', 'bg-slate-300', 'bg-slate-600', 'bg-slate-300', 'bg-slate-300']);

    const changePage = (direction: string) => {
        const newStyles = [...pageStyles];

        if (direction === 'left') {
            if (currentPage !== 1) {
                setPage(currentPage-1);
                newStyles[currentPage-1] = 'bg-slate-300';
                newStyles[currentPage-2] = 'bg-slate-600';
                return setPageStyle(newStyles);
            }
            return;

        }
        if (direction === 'right') {
            if (currentPage !== 5) {
                setPage(currentPage+1);
                newStyles[currentPage-1] = 'bg-slate-300';
                newStyles[currentPage] = 'bg-slate-600';
                return setPageStyle(newStyles);
            }
            return;
        }
    }

    return (
        <div className='flex gap-x-8 items-center'>
            <img src={leftArrowIcon} onClick={() => changePage('left')} className='w-4 h-4 cursor-pointer mr-8 select-none'/>
            <div className={`w-2 h-2 aspect-square transition rounded-full ${pageStyles[0]}`}></div>
            <div className={`w-2 h-2 aspect-square transition rounded-full ${pageStyles[1]}`}></div>
            <div className={`w-2 h-2 aspect-square transition rounded-full ${pageStyles[2]}`}></div>
            <div className={`w-2 h-2 aspect-square transition rounded-full ${pageStyles[3]}`}></div>
            <div className={`w-2 h-2 aspect-square transition rounded-full ${pageStyles[4]}`}></div>
            <img src={rightArrowIcon} onClick={() => changePage('right')} className='w-4 h-4 cursor-pointer ml-8 select-none'/>
        </div>
    );
}

export default ScrollList;