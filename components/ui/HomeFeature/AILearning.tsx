import { Brain, Coffee } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { Button } from '../button';
import PieChart from '@/components/PieChart'

export default function AILearning(){
    return(
        <div className='bg-gray-50'>
            <div className='  w-11/12 mx-auto'>
                <div className='flex justify-left items-center'>
                    <Brain />
                    <h2 className='ml-2 text-2xl'>Software Design</h2>
                </div>
                <p>Track your progress in software design concepts, patterns, and practices.</p>
            </div>

            <div className='bg-gray-200 w-11/12 mx-auto mt-2 flex space-x-2 '>
                <div className='bg-purple-300  w-3/5 p-2'>
                    <div className='flex justify-left items-center '>
                        <Coffee/>
                        <h2 className='ml-2'>Advanced Java</h2>
                    </div>
                    <p className='mt-2'>Struggling with implementing Generic Types</p>
                    <div className='flex justify-between'>
                        <div>
                            <Badge variant={'secondary'}>Badge1</Badge>
                            <Badge className='ml-2' variant={'secondary'}>Badge2</Badge>
                        </div>
                        <Button>View</Button>
                    </div>
                </div>
                <div className='bg-red-300 w-2/5'>
                    <PieChart/>
                </div>
            </div>


        </div>
    )
}