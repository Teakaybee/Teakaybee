import AboutPage from "@/components/about/aboutpage";
import ContactPage from "@/components/contact/contactpage";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import MusicPage from "@/components/musicpage/musicpage";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <MusicPage />
      <AboutPage/>
      <ContactPage/>
      <Footer/>
    </>
  );
}
