import HeroBanner from "@/components/home/HeroBanner";
import Library from "@/components/home/Library";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroBanner />
      <Library />
    </div>
  );
}
