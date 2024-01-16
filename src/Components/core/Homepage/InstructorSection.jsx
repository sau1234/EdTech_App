import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='mt-16'>
         <div className='flex flex-row gap-20 item-center'>
            <div className='w-[50%]'>
              <img src={Instructor} alt="InstructorImage" 
               className='shadow-white'
               />
            </div>
              
            <div className='flex flex-col gap-10 w-[50%] font-inter'>
               <div className='font-semibold text-4xl w-[50%]'>
                Become an 
                <HighlightText text={"instructor"}/>
               </div>

               <p className='font-medium text-[16px] w-[80%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. 
                  We provide the tools and skills to teach what you love.
               </p>

               <div className='w-fit'>
                <CTAButton active={true} linkto={'/signup'}>
                   <div className='flex gap-2 item-center flex-row'> 
                     Start Teaching Today
                     <FaArrowRight />
                   </div>
                </CTAButton>
               </div>
            </div>
         </div>
    </div>
  )
}

export default InstructorSection