import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome"
}

export default function Home() {
  return (
    <main>
      <h1>Hai you</h1>
      <Link href={'/about'}>Go to About Page </Link>
    </main>
  );
}
