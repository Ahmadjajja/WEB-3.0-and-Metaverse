"use client"; // this is a client component
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import PricingUI from "./pricing-ui/PricingUI"

export default function Home() {
  const [data, setData] = useState<any>(null);
  const handler = async () => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }; 
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <PricingUI/>
      </main>
    </ChakraProvider>
  );
}
