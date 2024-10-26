import { Button } from "../button";

export default function PracticeSections(){
    return(
        <div className=" w-full flex">
                <div className="w-1/2 bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-medium">Explicit vs. Automatic Conversions</h2>
                    <p className="text-muted-foreground mt-2">In C++, conversions between types can be either explicit or automatic. Explicit conversions are those that the programmer must specifically request, while automatic conversions (also known as implicit conversions) are performed automatically by the compiler when needed.</p>

                    <div className="bg-gray-200 p-5 rounded-lg mt-5">
                            class A 
                                public:
                                    A();
                                    A(int);
                                    A(const char*, int = 0);
                                ;
                    </div>
                </div>

                <div className="bg-gray-50 w-full mx-4 rounded-lg p-8">
                    <h2 className="text-2xl font-medium">Practice Question</h2>
                    <p className="text-muted-foreground mt-2">What does the following code do?</p>
                    <div className="bg-gray-200 w-full rounded-lg mt-2">
                        <p>A obj = 42;</p>
                    </div>
                    <div className="flex flex-col space-y-2 mt-2 ">
                        <Button variant={'outline'}>Creates an object</Button>
                        <Button variant={'outline'}>Creates an object</Button>
                        <Button variant={'outline'}>Creates an object</Button>
                        <Button variant={'outline'}>Creates an object</Button>
                    </div>
                </div>
        </div>
    )
}