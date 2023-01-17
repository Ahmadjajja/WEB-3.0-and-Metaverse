"use client"; // this is a client component
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [data, setData] = useState<any>(null)
  const handler =async () => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data)
      });
  };
  return (
    <main className={styles.main}>
      <button onClick={()=> handler}>button</button>
      {data?.name}
    </main>
  );
}
