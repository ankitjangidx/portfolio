import Body from "./Components/Body";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="h-[5vh]">
        <Navbar />
      </div>
      <div className="h-[90vh]">
        <Body />
      </div>
      <div className="h-[5vh]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
