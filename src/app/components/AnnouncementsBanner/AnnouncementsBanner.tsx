import Image from "next/image";

interface AnnouncementsBannerProps {
  text: string;
}

export default function AnnouncementsBanner({
  text,
}: AnnouncementsBannerProps) {
  return (
    <div className="h-8	text-center text-xs bg-blue-400 text-white flex justify-center items-center">
      {text}{" "}
      <Image
        src="https://cdn.prod.website-files.com/6335b33630f88833a92915fc/63e519115f5d67d8f5450447_miniarrowwhite.svg"
        alt="Teext-me Logo"
        width={10}
        height={1}
        className="ml-1"
      />
    </div>
  );
}
