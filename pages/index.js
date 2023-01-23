import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* DONT DO THIS
            <a href="/portfolio">Portfolio</a> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
            <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

// OR
// export default HomePage;
