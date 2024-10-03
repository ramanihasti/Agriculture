import React from 'react'
import Title from '../Common/Title'

function Features() {
    return (
        <>
            <Title
                title="Features"
                desc="Colors, like features, follow the changes of the emotions. ..." />
            <div className='grid grid-cols-1 md:grid-cols-2 px-24 py-4 gap-8 mb-20'>
                <div className='w-100px max-w-[400px] mt-10 flex flex-col gap-4'>
                    <h2 className="text-2xl font-[cursive] text-[#945f5f] font-semibold"> ✯ Feature of Indian Agriculture :</h2>
                    <p className="font-thin text-[17px]">India has a variety of climatic conditions and soil types.

                        These physical variations along with factors like availability of irrigation, use of machinery, and modern agricultural inputs like High Yielding Varieties (HYV) of seeds, insecticides, and pesticides have played important roles in the evolution of different farming practices in the Indian agriculture sector.</p>
                </div>

                <div className='relative h-[60vh] '>
                        <img src="images/f5.jpg" alt="" className="object-cover h-full w-[500px] border-[6px] border-[#ffffff]"/>
                    <div className='absolute top-0 right-0 left-0'>
                    <img src="images/f4.jpg" alt="feature img"  className='object-cover h-[300px] w-[400px] mt-40 border-[6px] border-[#ffffff] ml-[-150px]'/>
                    </div>
                </div>
                {/* <div className="h-[65vh] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950
         opacity-80 z-[0]"/>
            <img src="/images/08.jpg" alt="" className='object-cover w-full h-full'/>                   
    </div> */}
            </div>
        </>
    )
}

export default Features