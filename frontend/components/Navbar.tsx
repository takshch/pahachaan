import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex items-center px-5 py-2 bg-indigo-600 text-white border-none">
      <span className="mr-auto font-medium text-lg">Pahachaan</span>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/codes">
              <a>Codes</a>
            </Link>
          </li>
          <li>
            <Link href="/identities">
              <a>Identities</a>
            </Link>
          </li>
          <li>
            <button className="bg-purple-500 px-3 py-0.5 rounded">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
