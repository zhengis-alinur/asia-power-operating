import Banner from "@/components/Banner";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Banner />
      <Categories />
    </div>
  );
}
