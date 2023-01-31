import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer-main">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <small className="text-muted">Copyright 2023 @ samreach.xyz</small>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
