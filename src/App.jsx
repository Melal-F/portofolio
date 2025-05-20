import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";
import Sidebar from "./components/sidebar/Sidebar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Sidebar />
        <Parallax type='Home' />
      </section>
      <section id='About'>
        <About />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
