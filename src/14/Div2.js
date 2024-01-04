import Div3 from "./Div3";


export default function Div2({n,setN}) {
  return (
    <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-500'>
        <div className=' text-white'>
            Div2
        </div>
        <Div3 n={n} setN={setN}/>
    </div>
  )
}
