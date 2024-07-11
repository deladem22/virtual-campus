import { SymOutline } from "./sym-outline";

const projectLinks = [
	{
		name: "About",
		href: "",
	},
	{
		name: "Data & Privacy Policy",
		href: "",
	},
];

function Footer() {
	return (
		<footer className="container mx-auto py-6 lg:rounded-xl mt-6 bg-zinc-100 dark:bg-neutral-800 lg:mb-4 lg:rounded-xl max-lg:rounded-t-lg max-md:rounded-t-0 max-md:mb-16">
			<div className="mb-2">
				<SymOutline className="size-12" />
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="col-span-2 lg:col-span-1">
					<div className="font-bold">Virtual Campus</div>

					<div className="text-secondary mb-2">
						Virtual Campus is An open initiative to promote collaboration and knowledge sharing
						among students of Ghana Communication Technology University (GCTU). 
					</div>

					<div className="flex gap-4 flex-wrap">
						

						<div className="flex gap-2 items-center text-secondary shrink-0">
							<div className="size-2 rounded-full bg-green-500" />
							All systems green
						</div>
					</div>
				</div>

				<div className="lg:col-start-3 col-span-1">
					<header className="font-bold">Project</header>

					<ul className="text-secondary">
						{projectLinks.map((link) => (
							<li key={link.href}>
								<a className="hover:underline" href={link.href}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
