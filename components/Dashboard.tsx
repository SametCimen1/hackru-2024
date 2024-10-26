import { CirclePlus} from 'lucide-react';
import Class from './Class';
import { auth } from "@/server/auth";
import Link from 'next/link';
import OfferedClasses from './OfferedClasses';

export default async function Dashboard(){

    const session = await auth();


    return(
        <div className="mt-2">
            <div className="text-4xl flex items-center">
                Your Classes
                <Link href="/create-class" className='ml-2 hover:bg-gray-100 p-1 rounded-lg cursor-pointer'> <CirclePlus  width={35} height={35}/></Link>
            </div>
            <div className='mt-2'>
                <Class />
            </div>

            <div className="text-4xl mt-20 flex items-center">
                <OfferedClasses />
            </div>
        </div>
    )
}