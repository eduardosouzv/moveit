import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [homeButton, homeButtonIsActive] = useState(true);
  const [rankButton, rankButtonIsActive] = useState(false);

  return (
    <div className="navContainer">
      <img src="icons/icon.svg" className="icon" />
      <div>
        <Link href="/">
          {homeButton ? (
            <img src="icons/home.svg" style={{ opacity: '1' }} />
          ) : (
            <img
              src="icons/home.svg"
              onClick={() => {
                rankButtonIsActive(false);
                homeButtonIsActive(true);
              }}
            />
          )}
        </Link>
        <Link href="/rank">
          {rankButton ? (
            <img src="icons/rank.svg" style={{ opacity: '1' }} />
          ) : (
            <img
              src="icons/rank.svg"
              onClick={() => {
                homeButtonIsActive(false);
                rankButtonIsActive(true);
              }}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
