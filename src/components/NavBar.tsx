import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="navContainer">
      <img src="icons/icon.svg" className="icon" />
      <div>
        <Link href="/">
          <img src="icons/home.svg" />
        </Link>
        <Link href="/">
          <img src="icons/rank.svg" />
        </Link>
      </div>
    </div>
  );
}
