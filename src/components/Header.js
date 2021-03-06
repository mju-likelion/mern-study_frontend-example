import { Link } from 'react-router-dom';
import axios from '../lib/axiosInstance';

function Header() {
  async function handleLoginCheck() {
    const result = await axios.get('/auth/check');
    console.log(result);
  }

  return (
    <header className="bg-yellow-300">
      <div className="items-center container flex flex-row h-16 justify-between mx-auto">
        <div>
          <Link to="/">
            <p className="font-bold text-gray-900">My Blog</p>
          </Link>
        </div>
        <div>
          <button
            className="mx-1 px-2 py-1 text-gray-900"
            type="button"
            onClick={handleLoginCheck}
          >
            Login Check
          </button>
          <Link to="/auth/login">
            <button className="mx-1 px-2 py-1 text-gray-900" type="button">
              Log In
            </button>
          </Link>
          <Link to="/auth/signup">
            <button
              className="border border-gray-700 rounded mx-1 px-2 py-1 text-gray-700"
              type="button"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
