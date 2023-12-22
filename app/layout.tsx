import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

export const metadata = {
	title: "Are we RSC yet?",
	description: "React Server Components support data",
} satisfies Metadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleAnalytics gaId="UA-22970573-1" />
			<body>{children}</body>
		</html>
	);
}
