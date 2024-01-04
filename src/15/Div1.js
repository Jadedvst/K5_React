import { useRecoilValue } from "recoil";
import { divn3 } from "./DivAtom";
import Div2 from "./Div2";


export default function Div1() {
  const n3 = useRecoilValue(divn3);
  return (
    
    <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-600'>
        <div className=' text-white'>
            Div1 n3 = {n3}
        </div>
        <Div2/>
    </div>
  )
}
