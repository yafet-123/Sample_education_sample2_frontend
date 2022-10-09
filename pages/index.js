import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Aim } from "../components/Aim";
import { Contact } from "../components/Contact";
import { Strategy } from "../components/Strategy";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="relative hero-background w-full h-screen md:h-[40rem]">
        <div className="hidden  absolute left-16 bottom-0 z-10 md:flex flex-col w-96 h-96 bg-yellow-400 p-10">
          <h1 className="text-5xl md:text-6xl text-black font-bold uppercase">
            Success
          </h1>
          <p className="font-serif font-medium text-slate-900 tracking-wide leading-6 text-left capitalize my-5">
            Organizations need strong and capable stategic leaders who can
            motivate, coach, and inspire People to do strategic work ...
          </p>
          <button className="bg-white p-3 w-48 hover:bg-blue-600 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <About />
      <Aim />
      <Strategy />
      <Contact />
    </div>
  );
}
