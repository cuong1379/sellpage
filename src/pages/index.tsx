import Cart from "@/components/Cart";
import Category from "@/containers/Category";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import HeroSection from "@/containers/HeroSection";
import HotProductSale from "@/containers/HotProductSale";
import Head from "next/head";

const title = "Storefront";
const description = "storefront";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title || "Storefront"}</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        ></meta>
        <meta
          key="mobile-web-app-capable"
          name="mobile-web-app-capable"
          content="yes"
        ></meta>
        <meta
          key="apple-mobile-web-app-capable"
          name="apple-mobile-web-app-capable"
          content="false"
        ></meta>
        <meta
          key="apple-mobile-web-app-title"
          name="apple-mobile-web-app-title"
          content={title || "storefront"}
        ></meta>
        <meta
          key="description"
          name="description"
          content={description || "storefront"}
        ></meta>
        <meta key="theme-color" name="theme-color" content="#1B1B1B"></meta>
        <meta key="og:type" name="og:type" content="website"></meta>
        <meta
          key="og:title"
          name="og:title"
          content={title || "storefront"}
        ></meta>
        <meta
          key="og:site_name"
          name="og:site_name"
          content={title || "storefront"}
        ></meta>
        <meta
          key="og:description"
          name="og:description"
          content={description || "storefront"}
        ></meta>
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
