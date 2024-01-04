import { useRecoilValue } from 'recoil';
import { divn, divn2 } from './DivAtom';
import Div1 from './Div1';

export default function DivMain() {
    const n = useRecoilValue(divn);
    const n2 = useRecoilValue(divn2);

    return (
        <div className='w-full h-full flex justify-center items-center bg-slate-50'>
            <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-900'>
                <div className='text-lg text-white'>
                    DivMain n={n}, n2 ={n2}
                </div>
                <Div1/>
            </div>
        </div>
    )
}
