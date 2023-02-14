import Cart from "@/components/Cart";
import Category from "@/containers/Category";
import Footer from "@/containers/Footer";
import HeadCustom from "@/containers/HeadCustom";
import Header from "@/containers/Header";
import HeroSection from "@/containers/HeroSection";
import HotProductSale from "@/containers/HotProductSale";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <HeadCustom />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <Category />
        <HotProductSale />
        <Cart />
        <Footer />
      </main>
    </>
  );
}
