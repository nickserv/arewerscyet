import { metadata } from "./layout";
import "./page.css";
import data from "./page.json";

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
			<header>
				<h1>{metadata.title}</h1>
				<p>{metadata.description}</p>
			</header>

			<main>
				{data.map(({ category, entries }) => (
					<section key={category}>
						<h2>{category}</h2>
						{entries.map(({ name, status, url }) => (
							<article key={name} aria-label={name}>
								<h3>
									<a href={url}>{name}</a>
								</h3>
								<p>
									<span aria-hidden>{statusEmoji.get(status)}</span> {status}
								</p>
							</article>
						))}
					</section>
				))}
			</main>

			<footer>
				<h2>Related Resources</h2>
				<h3>
					<a href="https://github.com/reactwg/server-components/discussions/6">
						Libraries that support RSCs
					</a>
				</h3>
			</footer>
		</>
	);
}
