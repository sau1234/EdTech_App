import React from 'react'

import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timelineImage from '../../../assets/Images/TimelineImage.png'
const Timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company"

    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Students will always be our top priority"

    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an important skills"

    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code your way to a solution"

    }
]

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-row gap-15 items-center'>
                <div className='flex flex-col gap-5 w-[45%]'>
                    {
                        Timeline.map((element, index) => {
                            return (
                                <div className='flex flex-row gap-6' key={index}>
                                    <div className='w-[50px] h-[50px] flex bg-white items-center'>
                                        <img src={element.Logo} />
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='relative shadow-blue-200'>
                    <img src={timelineImage}
                        alt='timelineImage'
                        className='shadow-white object-cover h-fit'
                    />

                    <div className='absolute flex flex-row items-center bg-caribbeangreen-300 text-white
                                uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='flex flex-row gap-5 border-r items-center border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='bg-caribbeangreen-300 text-sm'>Years Experience</p>
                        </div>

                        <div className='flex item-center gap-5 px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='bg-caribbeangreen-300 text-sm'>Type ofCourses</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TimelineSection