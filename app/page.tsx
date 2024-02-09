import { metadata } from "./layout";
import "./page.css";
import data from "./page.json";

export default function Home() {
	const statusEmoji = new Map([
		["Unsupported", "🚫"],
		["Planned", "💬"],
		["Development", "💻"],
		["Experimental", "🧪"],
		["Canary", "🦜"],
		["Alpha", "🅰️"],
		["Beta", "🅱️"],
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
						{entries.map(({ name, status, url, client }) => (
							<article key={name} aria-label={name}>
								<h3>
									<a href={url}>{name}</a>
								</h3>
								<p>
									<span className="emoji" aria-hidden>
										{statusEmoji.get(status)}
									</span>{" "}
									{status}
								</p>
								{client && (
									<p>
										<span className="emoji">⚠️</span> Client
									</p>
								)}
							</article>
						))}
					</section>
				))}
			</main>

			<footer>
				<h2>Sources</h2>
				<h3>
					<a href="https://nickmccurdy.com/">Nick McCurdy</a>
				</h3>
				<h3>
					<a href="https://github.com/reactwg/server-components/discussions/6">
						Libraries that support RSCs
					</a>{" "}
					by <a href="https://leerob.io/">Lee Robinson</a>
				</h3>
				<h3>
					<a href="https://github.com/nickmccurdy/arewerscyet#readme">
						Maybe you?
					</a>{" "}
					😉
				</h3>
			</footer>
		</>
	);
}
