"use client";
import Banner from "@/components/banner/Banner";
import CategoriesList from "@/components/categoriesList/CategoriesList";
import Explore from "@/components/explore/Explore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <CategoriesList />
      <Explore />
    </main>
  );
}
