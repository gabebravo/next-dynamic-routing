// our-domain.com
import React from 'react';
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <Link href="/news">
        <h3>
          <a>Go to News Feed</a>
        </h3>
      </Link>
    </div>
  );
}
