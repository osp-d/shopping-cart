import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>Welcome to our shop</h1>
      <p>Discover a wide collection of various products</p>
      <Link
        to="shop"
        className="rounded-xl bg-gray-950 px-6 py-3 font-bold text-white no-underline hover:bg-gray-500"
      >
        Shop now
      </Link>
    </div>
  );
}

export default Home;
