
import Tail3DButton from '../UI/Tail3DButton';
import { useRecoilState } from 'recoil';
import { divn } from './DivAtom';

export default function Div3() {
    const [n, setN] = useRecoilState(divn);
    const handleUp = () => {
        setN(n+1)
    }
    const handleDown = () => {
        setN(n-1<0?0:n-1);
    }
  return (
    <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-400'>
        <div className=' text-white'>
            Div3
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Tail3DButton caption = '증가'
                            handleClick={handleUp}
                            bColor='rose'/>
            <Tail3DButton caption = '감소'
                            handleClick={handleDown}
                            bColor='beige'/>
        </div>
    </div>
  )
}
