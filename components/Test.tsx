import { auth } from "@/server/auth";

export default async function Test(){
    const session = await auth();


    return(
        <h1>Welcome {session?.user?.name}</h1>
    )
}