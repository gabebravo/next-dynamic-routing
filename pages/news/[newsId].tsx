// our-domain.com/news/1234567
import { useRouter } from "next/router" // custom hook to get route params
import React from 'react';

export default function DetailPage() {
  const router = useRouter(); // route object with all the data
  const newsId = router.query.newsId
  console.log("newsId", newsId)

  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  );
}
