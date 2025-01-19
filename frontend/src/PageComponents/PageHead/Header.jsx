import Background from "./Background";
import Navbar from "./Navbar";
import Banner from "./Banner";

export default function Header() {
  return (
    <header>
      <Navbar />
      <Background />
      <Banner />
    </header>
  );
}
