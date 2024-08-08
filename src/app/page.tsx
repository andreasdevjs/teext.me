import AnnouncementsBanner from "./components/AnnouncementsBanner/AnnouncementsBanner";
import HeroSection from "./components/HeroSection/HeroSection";
import ShowRoomLinks from "./components/ShowRoomLinks/ShowRoomLinks";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,#ffffff,#f9fcfe,#f2f9fa,#edf6f2,#eff2e8)]">
        <Navbar />
        <HeroSection />
      </div>
      <ShowRoomLinks />
    </>
  );
}
