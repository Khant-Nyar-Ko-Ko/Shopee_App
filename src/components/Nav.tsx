import { Link } from "react-router-dom";

interface NavProps {
  handleToggleSidebar: () => void;
  cartItemCount: number;
}

const Nav: React.FC<NavProps> = ({ handleToggleSidebar, cartItemCount }) => {
  return (
    <nav className="w-screen h-16 bg-green-800 flex items-center justify-around sticky top-0 left-0 z-10">
      <h2 className="text-xl font-semibold text-white">7-Eleven</h2>
      <ul className="flex gap-10 justify-center text-white text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <input
        type="text"
        className="rounded-lg px-4 py-2"
        placeholder="Search"
      />
      <div className="flex gap-5 items-center">
        <p className="text-white">Login</p>
        <div className="relative" onClick={handleToggleSidebar}>
          <div className="absolute bg-red-500 bottom-3 left-4 rounded-full w-5 h-5">
            <p className="text-white text-sm text-center">{cartItemCount}</p>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            className="text-white text-xl"
          >
            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;