import ShowroomCard from "./ShowroomCard";

export default function ShowroomContent() {
  return (
    <aside className="showroom_content">
      <ul>
        <ShowroomCard showroomImg={"banner1.jpeg"} showroomImgAlt="A modern looking room." />
        <ShowroomCard showroomImg={"banner2.jpeg"} showroomImgAlt="A modern looking room." />
        <ShowroomCard showroomImg={"banner3.jpeg"} showroomImgAlt="A modern looking room." />
      </ul>
    </aside>
  );
}
