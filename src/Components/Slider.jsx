import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <div className="bg-[#FFFFFF1A] w-full rounded-t-md border border-b-0 border-zinc-600">
                            <div className="p-1.5 flex items-center gap-2">
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img2.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img2.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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
                                <img src="/public/img1.png" className="w-[70px] rounded-md h-[70px]" />
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