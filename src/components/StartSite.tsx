import react from 'react';
export default function StartSite() {

    return (
        <section className="flex flex-col-reverse lg:flex-row lg:h-full w-full relative">
            <div className='overflow-hidden bg-dark-100 '>
                <h1 className='whitespace-nowrap font-bold text-10xl text-light-100 bg-dark-100 text-opacity-5 '>
                    Juliette’s Flower Shop
                </h1>
                <div className='flex flex-col lg:px-[120px] px-5 font-bold whitespace-normal border-l-8 border-gray-100'>
                    <h2 className='text-light-100 sm:text-4xl lg:text-9xl-extra md:text-6xl text-2xl'>
                        We offer one of a kind premium quality flowers.
                    </h2>
                    <p className='font-extralight line-[30px] text-light-100  text-[20px] lg:max-w-[565px] py-9 lg:py-10'>
                        Juliette’s Flower Shop offers many beautiful kinds of flowers. We offer more than 100 different species. Check out our online shop and see for yourself!
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <button className='py-[13px] px-[33px] rounded-md border-2 border-gray-100 bg-gray-100 text-dark-100'>Buy Flowers</button>
                        <button className='py-[13px] px-[33px] rounded-md border-2 border-gray-100 text-gray-100'>Buy Flowers</button>
                    </div>
                </div>
                <div className='bg-bubbles bg-center lg:h-full h-[150px] bg-position-x lg:min-h-[279px] w-full bg-no-repeat'></div>
            </div>
            <div className='bg-flowers bg-position-y-center lg:bg-position-y-none h-[150px] w-full bg-fixed bg-no-repeat lg:h-screen lg:bg-local bg-cover lg:max-w-[547px]'></div>
        </section>
    );
}