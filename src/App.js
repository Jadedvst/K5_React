

import ClockMain from './02/ClockMain';
import FrontEnd from './03/FrontEnd';
import Like from './04/Like';
import Lotto from './05/Lotto';
import LottoReview from './05/LottoReview';
import BoxOffice from './06_tailwind/BoxOffice';
import Frcst from './07/Frcst';
import RefTest from './08/RefTest';
import Traffic from './09_traffic/Traffic';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
import LogoMain from './01/LogoMain';
import Rmain from './12/Rmain';
import Fcst from './13/Fcst';
import FcstMain from './13/FcstMain';
// import Ex01 from './90/Ex01';

import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

import './App.css';
import DivMain from './14/DivMain';
import DivRecoilMain from './15/DivRecoilMain';




function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen">
    {/* //가장 외부에 있어야함 */}
    <BrowserRouter> 
    
      {/* w 의 최대 xl */}
      <header className="">
        {/* <!-- Navbar --> */}
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <Link to ='/' className="font-semibold text-xl tracking-tight">
              K5-React
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to ='/frontend' className="block mt-4 lg:inline-block lg:mt-0 xs:hidden text-teal-200 hover:text-white mr-4">
                FrontEnd
              </Link>
              <Link to ='/Like' className="block mt-4 lg:inline-block lg:mt-0 xs:hidden text-teal-200 hover:text-white mr-4">
                Like
              </Link>
              <Link to ='/Lotto' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
                Lotto
              </Link>
              <Link to ='/BoxOffice' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              BoxOffice
              </Link>
              <Link to ='/Frcst' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              Frcst
              </Link>
              <Link to ='/RefTest' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              RefTest
              </Link>
              <Link to ='/Traffic' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              Traffic
              </Link>
              <Link to ='/Gallery' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              Gallery
              </Link>
              <Link to ='/Festival' className="block mt-4 lg:inline-block lg:mt-0 sm:hidden text-teal-200 hover:text-white mr-4">
              Festival
              </Link>
              {/* Router in Router is not allowed
              <Link to ='/Rmain' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Rmain
              </Link> */}
              <Link to ='/Fcst' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Fcst
              </Link>
              <Link to ='/DivMain' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Props Drilling
              </Link>
              <Link to ='/recoil' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Recoil
              </Link>
                      

            </div>
            <div>
              <Link to="/logo" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">OJ</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="grow w-full overflow-y-auto">
          <Routes>
            <Route path='/' element={<ClockMain/>} />
            <Route path='/frontend' element={<FrontEnd/>} />
            <Route path='/Like' element={<Like/>} />
            <Route path='/Lotto' element={<LottoReview/>} />
            <Route path='/BoxOffice' element={<BoxOffice/>} />
            <Route path='/Frcst' element={<Frcst/>} />
            <Route path='/RefTest' element={<RefTest/>} />
            <Route path='/Traffic' element={<Traffic/>} />
            <Route path='/Gallery' element={<Gallery/>} />
            <Route path='/Festival' element={<Festival/>} />
            {/* <Route path='/Rmain' element={<Rmain/>} /> */}
            <Route path='/Fcst' element={<Fcst/>} />
            <Route path='/DivMain' element={<DivMain/>} />
            <Route path='/recoil' element={<DivRecoilMain/>} />
            <Route path='/logo' element={<LogoMain/>} />
          </Routes>
          
          
      </main>
      {/* <Rmain/> */}
      {/* <Fcst/> */}
      {/* <FcstMain/> */}
      {/* <Ex01/> */}
      {/* <LogoMain /> */}
    </BrowserRouter>
    {/* <Rmain/> */}
    {/* 밖에 있으면 화면에 유지된채 있음 */}
    {/* <LogoMain/> */}
    </div>
  );
}

export default App;
