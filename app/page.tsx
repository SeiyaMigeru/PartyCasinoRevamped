'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Promo from "./components/Promo";
import Hero from "./components/Hero";
import VerticalGame from "./components/VerticalGame";
import { GameCards } from "./components/GameCards";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Promo />
      <VerticalGame />
      <Steps />
      <GameCards />
      <Footer />
    </div>
  );
}
