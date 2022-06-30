export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center border-black">
      <div className="flex flex-col items-center min-w-full bg-primary bg-blur-sm">
        <div className="top-0 z-50 max-w-3xl p-0 navbar">
          <div className="navbar-start">
            <a className="text-2xl font-bold text-black"><span className="text-palette-4">Stock</span>Check</a>
          </div>
          <div className="navbar-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        
        </div>
        
        <div className="max-w-3xl p-0 hero" >
          <div className="flex-row justify-between min-w-full p-0 py-16 hero-content backdrop-blur-sm">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-black">Don't chase the market</h1>
              <h1 className="text-4xl font-bold text-black">Lead it.</h1>
              <p className="w-1/2 mt-4 text-black">Powering leading companies to create unique possibilities. Exponential growth is possible when creativity is unbound.</p>
              <button className="w-1/3 my-8 text-white btn btn-circle">Open Dashboard</button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-full py-20 bg-white hero h-96 ">
        <div className="flex flex-col max-w-3xl text-center align-center">
          <h1 className="text-3xl font-extrabold text-black">
            Chart the Market. Change the Game.
          </h1>
          <p className="pt-8 text-black">Join the most powerful entities creating a richer world. Enrich yourself and your friends.</p>
          <div className="flex flex-wrap justify-center mt-10 text-neutral">
            <p>Video Placeholder</p>
          </div>
        </div>
        
      </div>

      <div className="min-w-full py-20 bg-primary hero h-96">
        <div className="flex flex-col max-w-3xl text-center align-center">
          <h1 className="text-3xl font-extrabold text-black">
            Market Summary
          </h1>
          <div className="flex flex-wrap justify-center mt-10 text-neutral">
            <p>Graph Placeholder</p>
          </div>
        </div>
      </div>

      <footer className="items-center min-w-full bg-white h-36 footer text-neutral">
        <div className="flex flex-row justify-between w-3/4 max-w-3xl m-auto">
          <div>
            <p>2022 StockCheck - No rights reserved</p>
          </div>
          <div>
            <a href="https://github.com/gregvansci/stock-visualizer-tool" className="link link-hover" target="_blank">GitHub Repo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}