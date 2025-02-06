import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Banner />
      <Categories />
      <GetInTouch />
    </div>
  );
}
