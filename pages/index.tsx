import Navbar from "./components/navbar";
import Greeting from "./components/Home/greeting";
import Preview from "./components/Home/preview";
import Summary from "./components/Home/summary";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="drawer drawer-end"> 
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex flex-col items-center justify-center border-black">
          <div className="flex flex-col items-center min-w-full bg-primary bg-gradient-to-b from-primary to-secondary">
            <Navbar/>
            <Greeting/>
          </div>
          <Preview/>
          <Summary/>
          <Footer/>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-4 overflow-y-auto w-80 bg-white text-black">
          <h3 className="bg-white">Welcome Back</h3>
          
        </div>
      </div>
    </div>
  )
}