import './App.css'
import Slider from './Components/Slider'
import img from './assets/img.png'


function App() {

  return (
    <>
      <div className="flex items-center sm:h-[72px] h-[78px] px-5 justify-between">
        <h1 className="md:text-[32px] pl-1 flex sm:items-center items-start sm:gap-3 gap-1 text-xl sm:flex-row flex-col font-semibold">Waiting Room <span className=' bg-[#DDF7EA] text-[#115934] px-4 py-0.5 rounded-full text-[16px] font-medium'>On</span></h1>
        <p className='sm:text-xl text-sm pr-3'>CCTV TP-Link</p>
      </div>

      <img src={img} className='w-full sm:h-[calc(100vh-72px)] h-[calc(100vh-78px)] object-cover' alt="" />

      <div className="h-[160px] fixed bottom-0 left-0 px-4  w-full bg-[#000000CC]">
        <p className='text-white font-semibold text-sm py-2 tracking-wide'> Detected Person</p>
        <Slider />
      </div>


    </>
  )
}

export default App
