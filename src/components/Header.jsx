import PropTypes from "prop-types"

export default function Header(onSearch) {
  return (
    <div className="bg-black  p-4     flex items-center justify-between">
      <div className="Page flex items-center space-x-4">
        <h1 className="text-red-700 text-[40px] uppercase font-bold">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a className="text-white font-medium" href="">
            Home
          </a>
          <a className="text-white font-medium" href="">
            About
          </a>
          <a className="text-white font-medium" href="">
            Contact
          </a>
        </nav>
      </div>
      <div className="Search flex items-center space-x-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="p-2 px-4 rounded-lg text-black"
        />
        <button
          type="button"
          className="bg-red-700 py-1 px-3 text-white font-semibold rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
