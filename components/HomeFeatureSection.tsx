'use client';


import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import PracticeSections from "./ui/HomeFeature/PracticeSections";
import GraphSections from "./ui/HomeFeature/GraphSections";
import LearningSection from "./ui/HomeFeature/LearningSection";
import AILearning from "./ui/HomeFeature/AILearning";


export default function HomeFeatureSection(){
    
    const [category, setCategory] = useState("practice");


    return(
        <div>
            <div className="flex h-5 items-center space-x-4 text-sm my-2  mx-auto w-3/4 md:w-full text-center md:text-left mb-10">
                <div className={`cursor-pointer ${category === 'practice' && "text-blue-500"} hover:text-blue-500`} onClick={() => setCategory('practice')}>All</div>
                <Separator orientation="vertical" />
                <div className={`cursor-pointer ${category === 'web' && "text-blue-500"} hover:text-blue-500`} onClick={() => setCategory('web')}>Web</div>
                <Separator orientation="vertical" />
                <div className={`cursor-pointer ${category === 'c' && "text-blue-500"} hover:text-blue-500`} onClick={() => setCategory('c')}>C</div>
                <Separator orientation="vertical" />
                <div className={`cursor-pointer ${category === 'ml' && "text-blue-500"} hover:text-blue-500`} onClick={() => setCategory('ml')}>Machine Learning</div>
            </div>
            {category == "practice" && 
                <PracticeSections />
            }
            {category == "web" && 
                <GraphSections />
            }
            {category == "c" && 
                <LearningSection />
            }
            {category == "ml" && 
                <AILearning />
            }
        </div>
    )
}