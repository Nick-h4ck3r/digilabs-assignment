import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link href="/dashboard">Visit dashboard </Link>
      </div>
    </main>
  );
}
