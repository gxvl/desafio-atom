import { CardGrid } from "@/components/CardGrid";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="relative overflow-hidden">
        <Main />
        <div className="bg-green-500 w-full h-1"></div>
        <CardGrid />
      </main>
    </div>
  );
}
