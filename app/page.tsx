import { Navbar } from "./components/navbar";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-[linear-gradient(to_bottom,#2f0000,#591313)]"></div>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  );
}
