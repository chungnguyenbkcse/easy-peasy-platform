import React, {forwardRef, useState} from "react";
import Button from "../Button";
import Modal from "../Modal";
import { FaQuestionCircle } from "react-icons/fa";
import GiffSample from '../../assets/images/fill-box-giff.gif'
interface ExerciseHeader{
    title: string;
    instruction: string;
    forwardedRef?: React.RefObject<HTMLElement>;
}
const ExerciseHeader: React.FC<ExerciseHeader> = ({ title, instruction, forwardedRef }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <header ref={forwardedRef}>
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 dark:text-indigo-100 mb-2 md:mb-8">{title}</h2>
            <p className="text-lg md:text-2xl font-bold text-indigo-400 dark:text-indigo-200 mb-2 md:mb-4 flex items-center gap-4">
                <span>
                    Task Description
                </span>
                <FaQuestionCircle className='cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setShowModal(!showModal)}/>
            </p>
            <p className="inline-block text-sm md:text-base text-orange-500 dark:text-orange-500 bg-stone-50 dark:bg-[#484848] shadow-inner p-3 md:p-5 mb-4 rounded-lg w-full">
                {instruction}
            </p>
            {showModal
                && <Modal
                    onClose={() => setShowModal(false)}
                    actionBar={<Button primary rounded onClick={() => setShowModal(false)}>Got It</Button>}
                >
                    <span>
                        <h5 className='text-orange-500 text-xl font-bold mb-2 drop-shadow-sm'>Don't know what to do?</h5>
                        <p className='text-indigo-800 dark:text-indigo-300 mb-4'>{instruction}</p>
                        {/*<img src={GiffSample} alt="Animation" className='mx-auto mb-4 w-full'/>*/}
                    </span>
                </Modal>
            }
        </header>
    );
}

export default forwardRef<HTMLElement, ExerciseHeader>((props, ref) => (
    <ExerciseHeader {...props} forwardedRef={ref as React.RefObject<HTMLElement>} />
));