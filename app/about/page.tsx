import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Us"
}

export default function About() {
  // throw new Error('not today!')
  return (
    <>
    <main className={styles.main}>
      <h1>About</h1>
      <Link href={'/'}>Go to Home</Link>
    </main>
    </>
  )
}
