import Image from "next/image";

const Home = () => {
  return (
    <Image
      src="https://picsum.photos/800"
      width={800}
      height={800}
      alt="random image from picsum"
    />
  );
};

export default Home;
