import Link from "next/link";
export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/local">Local Image Example</Link>
      </li>
      <li>
        <Link href="/remote">Remote Image Example</Link>
      </li>
    </ul>
  );
}
