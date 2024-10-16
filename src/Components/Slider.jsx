import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                className="mySwiper"
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
            >


                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img1} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#F5B920] py-0.5 px-2 rounded-md'>1 hour</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img1} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img2} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img1} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img2} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img1} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src={img1} className="w-[70px] rounded-md h-[70px]" />
                                <h2 className='inline-flex flex-col text-white gap-0.5 justify-start items-start'>Waiting Time <span className='bg-[#14B864] py-0.5 px-2 rounded-md'>1 min</span></h2>
                            </div>
                        </div>
                        <p className='text-white p-1 bg-[#00000066] rounded-b-md'>Arrival time : 09.00PG</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Slider