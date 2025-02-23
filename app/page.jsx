import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Navbar from "./Navbar";
export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
