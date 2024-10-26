'use client';
import { getClasses } from '@/server/actions/get-classes';
import { useEffect, useState } from 'react';
import Class from './Class';

export default function OfferedClasses(){

    const [classes, setClasses] = useState([]) ;

    const getCl = async() => {
        console.log("called"); 
       
        const res = await getClasses();
        setClasses(res);
        console.log(res)
    }


    useEffect(() => {
       getCl();
    },[])

    return (
        <div>
            <h2 className="text-4xl mt-20 flex items-center">
                Offered classes
            </h2>
            <div className='flex flex-wrap'>
                {classes.map(() => {
                    return(
                        <Class/>
                    )
                })}
            </div>
        </div>
    )
}