
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="top-0 z-50 px-10 navbar">
        <div className="navbar-start">
          <a className="font-bold">StockCheck</a>
        </div>
        <div className="navbar-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
      </div>
      
      <div className="min-w-full hero">
        <div className="flex-row justify-between min-w-full px-20 py-20 hero-content">
          <div className="flex flex-col w-1/2">
            <h1 className="text-4xl font-bold">Don't chase the market</h1>
            <h1 className="text-4xl font-bold text-gray-300">Lead it.</h1>
            <p className="mt-4">Powering leading companies to create unique possibilities. Exponential growth is possible when creativity is unbound</p>
            <div className="flex flex-row mt-5">
              <button className="font-bold text-gray-300 glass btn btn-success btn-active">Open Dashboard</button>
            </div>
          </div>
          <div className="border ml-1/6 mockup-window bg-base-300">
            <div className="flex justify-center h-56 bg-base-200">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="mockup" />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-full py-20 hero bg-slate-200">
        <div className="flex flex-col text-center">
          <h1 className="text-4xl font-extrabold text-slate-700">
            Chart the Market. Change the Game.
          </h1>
          <p className="pt-8">Join the most powerful entities creating a richer world</p>
        </div>
        
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}