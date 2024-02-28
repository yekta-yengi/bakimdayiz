import Image from "next/image";
import gif from "../public/gif.gif";
export default function Home() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://media3.giphy.com/media/ep2ayik8eTtv1ogn8k/giphy.gif?cid=ecf05e47sam9k2h1oj2nrpmaa7snnmclfp8bxifh4a5r34b1&ep=v1_gifs_related&rid=giphy.gif&ct=g)` }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white">Cermodern, yakında yeni arayüzü ile karşınızda...</h1>
          <p className=" text-2xl mb-5">Bakımdayız...</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
