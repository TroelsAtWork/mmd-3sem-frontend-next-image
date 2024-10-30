import Image from "next/image";
import forest from "../images/forest.jpg";

export default function Home() {
  return (
    <figure>
      <Image
        className="object-cover"
        src={forest}
        alt="Bøgeskoven springer ud..."
        placeholder="blur"
        priority
        // fill 
      />
    </figure>
  );
}
