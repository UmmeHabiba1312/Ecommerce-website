// import { CartProvider } from "@/components/CartContext";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import MyProducts from "@/components/MyProducts";
import OurProduct from "@/components/OurProduct";
import { getHeroData } from "@/lib/heroPage";
import { getLogoData } from "@/lib/logoPage";
import { getProductData } from "@/lib/productPage";


export default async function Home() {
  const heroData = await getHeroData();
  const logoData = await getLogoData();
  const productData = await getProductData();
  
  return (
    <>
    <main className="max-w-screen-2xl mx-auto overflow-x-hidden">
      <div className="overflow-x-hidden">
      <Hero data={heroData} />
      <Logos data={logoData} />
      <MyProducts data={productData} />
        <Categories />
        <Explore />
        <OurProduct />
      </div>
    </main>
    </>
  );
}
