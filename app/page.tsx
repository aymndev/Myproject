import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div id="c-page">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-[30px] italic">Welcome to our page !</p>
        <h1 id="header_title">IT&apos;S NICE TO MEET YOU</h1>

        <Link
          id="my_button"
          href="/service"
          className=" no-underline text-[25px] hover:scale-95 transition-transform duration-300 transform font-bold bg-slate-800 text-white px-6 py-3 rounded-lg inline-block text-center"
        >
          Tell me more
        </Link>
      </div>

      <div id="end" className="flex flex-col items-center mt-8 gap-4">


        <div id="contact" className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/facebook.png" alt="facebook" width={50} height={50} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/sociale.png" alt="instagram" width={50} height={50} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src="/twitter.png" alt="twitter" width={50} height={50} />
          </a>
        </div>

        <p>Copyright © 2026 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
}

