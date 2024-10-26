
export default function PracticeSections(){
    return(
        <div className=" w-full flex">
                <div className="w-1/3 bg-gray-50 rounded-lg">
                    <h2 className="text-2xl font-medium">Quadratic Functions</h2>
                    <p className="text-muted-foreground mt-2">Understanding the components of a quadratic equation</p>
                </div>

                <div className="bg-gray-50 w-full mx-4 rounded-lg">
                    <h2 className="text-2xl font-medium">Parabola Match</h2>
                    <p className="text-muted-foreground mt-2">Adjust the parameters of the quadratic equation to approximately match the gray parabola.</p>
                </div>
        </div>
    )
}