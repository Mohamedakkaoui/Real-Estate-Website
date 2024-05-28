import React from 'react'
import { AddBio, PersonalInfos, ProfilePic } from './FormComps'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './Form.css'

function Form() {
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='w-[50%] px-4'> <PersonalInfos /></div>
            <div className='flex flex-col'>
                <ProfilePic />
                <AddBio />
            </div>

        </div >
    )
}

export default Form