import AnnouncementsBanner from "./components/AnnouncementsBanner/AnnouncementsBanner";
import HeroSection from "./components/HeroSection/HeroSection";
import ShowRoomLinks from "./components/ShowRoomLinks/ShowRoomLinks";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,#ffffff,#f0f2f5,#f0f2f5,#f0f2f5,#f0f2f5)]">
        <Navbar />
        <HeroSection />
      </div>
      <ShowRoomLinks />
    </>
  );
}
