import leftArrowIcon from '../../assets/images/leftArrow.svg'
import rightArrowIcon from '../../assets/images/rightArrow.svg'

function ScrollList() {
    return (
        <div className='mt-28 flex items-center gap-10 justify-center'>
            <img src={leftArrowIcon} className='w-4 h-4 cursor-pointer'/>
            <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-600 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
            <img src={rightArrowIcon} className='w-4 h-4 cursor-pointer'/>
        </div>
    );
}

export default ScrollList;