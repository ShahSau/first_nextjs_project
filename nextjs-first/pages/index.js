import React from "react";
import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>hii</h1>
      <Link href="/portfolio">portfolio</Link>
      <br />
      <Link href="/clients">cleints</Link>
    </div>
  );
}

export default HomePage;
