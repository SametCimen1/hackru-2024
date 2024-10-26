
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Products from "@/components/products/products";
import { productVariants, variantImages } from "@/server/schema";
import { db } from "@/server";
import Algolia from "@/components/products/algolia";
import ProductTags from "@/components/products/product-tags";
import {Footer} from "@/components/navigation/footer";
import Graph from '@/components/Graph'
import Test from '@/components/Test'
import PieChart from '@/components/PieChart'
import HomeFeatureSection from "@/components/HomeFeatureSection";
import { auth } from "@/server/auth";
import Dashboard from "@/components/Dashboard";


// export const revalidate = 60 * 60;

export default async function Home() {
  const session = await auth();


  // const data = await db.query.productVariants.findMany({
  //   with:{
  //     variantImages: true,
  //     variantTags: true,
  //     product: true,
  //   },
  //   orderBy: (productVariants, {desc}) => [desc(productVariants.id)],
  //   limit:6
  // })


  return (
    <main className="">
      <div className="h-[80vh] w-full overflow-hidden">
        <Test></Test>
        {/* <Graph /> */}
        {session?.user ? <Dashboard /> : <HomeFeatureSection />}
      </div>
    </main>
  );
}

