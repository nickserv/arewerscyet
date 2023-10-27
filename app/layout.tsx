import type { Metadata } from "next";
import Script from "next/script";

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
			<Script src="https://www.googletagmanager.com/gtag/js?id=UA-22970573-1" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-22970573-1');
        `}
			</Script>
			<body>{children}</body>
		</html>
	);
}
