import Link from "next/link";
import RemoteImage from "@/components/RemoteImage";
import fetchAnimals from "@/api/animals";
import { use } from "react";

export default async function Home() {
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(data.animals);
  return (
    <ul>
      {data.animals.map((animal) => (
        <li>
          <Link href={`/singleview/${animal.id}`}>{animal.name}</Link>
        </li>
      ))}
    </ul>
  );
}
