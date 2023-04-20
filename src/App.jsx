import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="h-7">
          <Navbar />
        </div>
        <div className="h-full">
          <Body />
        </div>
        <div className="h-7">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
