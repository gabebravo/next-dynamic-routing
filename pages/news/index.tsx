// our-domain.com/news
import React from 'react';
import Link from "next/Link"

export default function NewsPage() {
  return (
    <div>
      <h1>The News Feed Page</h1>
      <ul>
        <li>
          <Link href="/news/123">
            Article 123
          </Link>
        </li>
        <li>
          <Link href="/news/234">
            Article 234
          </Link>
        </li>
        <li>
          <Link href="/news/345">
            Article 345
          </Link>
        </li>
      </ul>
    </div>
  );
}
