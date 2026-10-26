import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function CacheTestPage() {
  "use cache";

  cacheLife("hours");

  const time = new Date().toISOString();

  return (
    <main>
      <h1>Cache Test</h1>

      <p>Server Time:</p>
      <p>{time}</p>
    </main>
  );
}