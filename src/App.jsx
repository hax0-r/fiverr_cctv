import './App.css'
import Slider from './Components/Slider'
import img from './assets/img.png'


function App() {

  return (
    <>
      <div className="flex items-center h-[72px] px-5 justify-between">
        <h1 className="md:text-[32px] pl-1 flex items-center gap-3 text-2xl font-semibold">Waiting Room <span className=' bg-[#DDF7EA] text-[#115934] px-4 py-0.5 rounded-full text-[16px] font-medium'>On</span></h1>
        <p className='text-xl pr-3'>CCTV TP-Link</p>
      </div>

      <img src={img} className='w-full h-[calc(100vh-72px)] object-cover' alt="" />

      <div className="h-[160px] fixed bottom-0 left-0 px-4  w-full bg-[#000000CC]">
        <p className='text-white font-semibold text-sm py-2 tracking-wide'> Detected Person</p>
        <Slider />
      </div>


    </>
  )
}

export default App
