import { useRecoilValue } from "recoil";
import Div3 from "./Div3";
import { divn4 } from "./DivAtom";


export default function Div2() {
  const n4 = useRecoilValue(divn4);
  return (
    <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-500'>
        <div className=' text-white'>
            Div2 n4 = {n4}
        </div>
        <Div3/>
    </div>
  )
}
