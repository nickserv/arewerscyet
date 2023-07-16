import "core-js/proposals/array-grouping-v2";
import { Fragment, HTMLAttributes } from "react";
import { metadata } from "./layout";
import "./page.css";
import data from "./page.json";

function Heading({
	level = 1,
	...props
}: {
	level?: 1 | 2 | 3;
} & HTMLAttributes<HTMLHeadingElement>) {
	const Component: keyof JSX.IntrinsicElements = `h${level}`;
	const fontSize = `${1.333 ** (4 - level)}em`;
	return <Component {...props} style={{ fontSize, ...props.style }} />;
}

export default function Home() {
	const statusEmoji = new Map([
		["Unsupported", "🚫"],
		["Planned", "💬"],
		["Canary", "🦜"],
		["In development", "💻"],
		["Stable", "✅"],
	]);

	return (
		<>
			<Heading>{metadata.title}</Heading>
			{data.map(({ category, entries }) => (
				<Fragment key={category}>
					<Heading level={2}>{category}</Heading>
					{entries.map(({ name, status, url }) => (
						<Fragment key={name}>
							<Heading level={3}>
								<a href={url}>{name}</a>
							</Heading>
							<p>
								{statusEmoji.get(status)} {status}
							</p>
						</Fragment>
					))}
				</Fragment>
			))}
		</>
	);
}
