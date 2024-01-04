import React, { useEffect, useState } from 'react'
import Div1 from './Div1';

export default function DivMain() {
    const[n,setN] = useState(0);
    const [n2, setN2] = useState(0);

    useEffect(()=>{
        setN2(n*2)
    },[n])

    return (
        <div className='w-full h-full flex justify-center items-center bg-slate-50'>
            <div className='w-5/6 h-5/6 p-10 rounded-xl flex flex-col justify-center items-center bg-blue-900'>
                <div className='text-lg text-white'>
                    DivMain n={n}, n2 ={n2} <br/>
                    값을 밑으로 전달
                </div>
                <Div1 n={n} setN={setN}/>
            </div>
        </div>
    )
}
