//Plugins
import Link from "next/link";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Link href="/astrophotography">astrophotography</Link>
        <Link href="/water">Water</Link>
      </main>
    </>
  );
}
