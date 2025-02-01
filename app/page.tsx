import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen z-10">
      <Image src={"/assets/bg.png"} alt="" width={1440} height={653} className={'w-full h-full -z-10 absolute opacity-55'}/>
      <header className="flex items-center justify-between py-5 px-10">
        <div className="">
          <Image src={'/assets/logo-elemes.png'} alt="" width={207} height={50}/>
        </div>

          <div className="">
            <ul className="flex gap-5 text-black font-semibold">
              <li>Home</li>
              <li>About</li>
              <li>Promotions</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

        <div className="">
          <a href="" className="text-black font-semibold mr-4">Masuk</a>
          <a href="" className="bg-green-500 p-3 rounded-full font-semibold">Daftar Sekarang</a>
        </div>
      </header>

      <div className="flex px-10 mt-3 items-center">
        <div className="">
          <p className="text-green-500 text-6xl font-bold">Good Food Us <br/> Good Mood</p>
          <p className="text-gray-600 text-xl w-3/6">I would think that conserving our natural resources should be a conservative position: 
            Not to waste food, and not to throw away a lot of the food that we buy.</p>
          <div className="mt-8">
            <a href="" className="bg-green-500 p-3 rounded-full font-semibold mr-4">Daftar Sekarang</a>
            <a href="" className="text-black font-semibold">About Us</a>
          </div>
        </div>
        <div className="bg-gray-300 rounded-full p-5 ">
          <Image src={'/assets/salad.png'} alt="" width={700} height={700}/>
          <Image src={'/assets/review.png'} alt="" width={300} height={150} className="absolute bottom-20 right-72"/>
        </div>
      </div>
    </div>
  );
}
