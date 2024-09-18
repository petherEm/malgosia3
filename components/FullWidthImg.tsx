import Image from "next/image";

const FullWidthImg = () => {
  return (
    <section className="w-full relative h-[267px]">
      <Image src="/trucks.png" fill alt="iveco" className="object-cover" />
    </section>
  );
};

export default FullWidthImg;
