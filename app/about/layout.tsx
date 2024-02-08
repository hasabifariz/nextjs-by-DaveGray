import { Chilanka } from 'next/font/google';
import React from 'react'

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
		<h1>From About Layout</h1>
		<main>{children}</main>
		</>
	)
}
