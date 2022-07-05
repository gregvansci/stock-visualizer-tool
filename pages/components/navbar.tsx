export default function Navbar() {
  return (
    <div className="top-0 z-50 max-w-3xl p-0 navbar">
      <div className="navbar-start">
        <a className="px-2 text-2xl font-bold text-white bg-black border-"><span className="text-palette-3">Stock</span>Check</a>
      </div>
      <div className="navbar-end">
        <label htmlFor="my-drawer-4" className="w-24 mr-3 text-black btn-xs btn glass btn-circle bg-palette-3 drawer-button">Log In</label>
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  )
}