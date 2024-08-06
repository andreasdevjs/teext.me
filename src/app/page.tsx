import AnnouncementsBanner from "./components/AnnouncementsBanner/AnnouncementsBanner";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <AnnouncementsBanner text="Earn satoshis with each message" />
      <Navbar />
      <HeroSection />
    </div>
  );
}
