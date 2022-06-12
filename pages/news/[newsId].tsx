// our-domain.com/news/1234567
import Link from "next/Link"
import { useRouter } from "next/router" // custom hook to get route params
import React from 'react';

export default function DetailPage() {
  const router = useRouter(); // route object with all the data
  const newsId = router.query.newsId

  return (
    <div>
      <Link href="/news">
        <span className="back-link-text">&#8592; Back To News Feed</span>
      </Link>
      <h1>{`Article ${newsId}: Detail Page`}</h1>
    </div>
  );
}
