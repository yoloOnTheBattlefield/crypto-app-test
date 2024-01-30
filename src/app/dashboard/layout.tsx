"use client";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cities, setCities] = useState(["tokio", "perth"]);
  const [value, setValue] = useState("");

  return (
    <div>
      <div style={{ height: "100px", background: "green" }}>
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <Link href={`/city/${city}`}>{city.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
}
