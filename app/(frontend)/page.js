import Banner from "@/components/frontend/Banner";
import Bigbanner from "@/components/frontend/Bigbanner";
import FeatureProduct from "@/components/frontend/FeatureProduct";
import Hero from "@/components/frontend/Hero";
import HotDeal from "@/components/frontend/HotDeal";
import TopReted from "@/components/frontend/TopReted";
import TrenddingProduct from "@/components/frontend/TrenddingProduct";
import Head from "next/head";

export default function Home() {
  return (
    
    <main>
 

      <Hero />
      <HotDeal />
      <Banner />
      <FeatureProduct />
      <Banner />
      <TopReted />
      <Bigbanner />
      <TrenddingProduct />
    </main>
  )
}
