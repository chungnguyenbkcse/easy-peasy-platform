import AudioPlayer from "../AudioPlayer";
import { FaRegThumbsUp, FaShare } from "react-icons/fa";
import React from "react";
import Button from "../Button";

const Listening = () => {
    return (
        <>
            <header className='flex items-center md:gap-5 relative'>
                <div className='brightness-150 dark:brightness-[30%] md:brightness-100 md:dark:brightness-100 top-0 left-0 w-full h-full md:p-3 md:w-auto md:h-auto absolute md:static basis-0 md:basis-2/5 md:rounded-md overflow-hidden self-stretch'>
                    <img src="https://picsum.photos/800/400" alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='basis-full md:basis-3/5 py-3 px-3 md:px-5 self-center relative z-10'>
                    <h2 className='text-2xl md:text-3xl font-bold text-orange-500 drop-shadow mb-2'>Heading</h2>
                    <p className='text-sm md:tex-lg text-indigo-700 dark:text-indigo-300 mb-3 md:mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, optio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, optio!</p>
                    <AudioPlayer audioUrl='https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'/>
                    <div className='mt-4 md:mt-8 flex gap-2'>
                        <Button secondary outline rounded>
                            <span className='flex items-center gap-2'><FaRegThumbsUp/> Add</span>
                        </Button>
                        <Button secondary outline rounded>
                            <span className='flex items-center gap-2'><FaShare/> Share</span>
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                Exercise
            </main>
        </>
    )
}

export default Listening;