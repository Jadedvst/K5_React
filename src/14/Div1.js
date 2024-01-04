import Div2 from "./Div2";


export default function Div1({n,setN}) {
  return (
    <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-600'>
        <div className=' text-white'>
            Div1
        </div>
        <Div2 n={n} setN={setN}/>
    </div>
  )
}
