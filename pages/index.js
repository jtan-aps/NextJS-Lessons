import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default HomePage;
