	import { Link } from "@remix-run/react";

	const projectLinks = [
	{
		name: "About",
		href: "https://github.com/deladem22/virtual-campus/README.md",
	},
	
	{
		name: "Roadmap",
		href: "https://compa.so/roadmap",
	},
	{
		name: "Data & Privacy Policy",
		href: "",
	},
	];

	const members = [
	{
		name: "Deladem Kpor ",
		imgSrc: "/dela_img.jpg",
	},
	{
		name: "Asamoah Yeboah",
		imgSrc: "/kojo.jpg",
	},
	{
		name: "John Coleman",
		imgSrc: "/colman.jpg",
	},
	];

	function Footer() {
	return (
		<footer className="container mx-auto py-6 lg:rounded-xl mt-6 bg-zinc-100 dark:bg-neutral-800 lg:mb-4 lg:rounded-xl max-lg:rounded-t-lg max-md:rounded-t-0 max-md:mb-16">
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
			<div className="col-span-2 lg:col-span-1">
			<div className="font-bold">
				<Link className="block shrink-0" to="/">
				<img src="/sym.svg" width={32} className="inline" alt="virtual-campus" />
				</Link>
				GCTU-Vitual Campus
			</div>

			<div className="text-secondary mb-2">
				An open initiative to promote collaboration and knowledge sharing
				among students of Ghana Communication & Technology University.
			</div>

			<div className="flex gap-4 flex-wrap">
				<a
				className="inline-flex shrink-0 items-center rounded-lg gap-2 px-2 py-1 bg-zinc-200 dark:bg-neutral-700 dark:bg-opacity-50 font-medium"
				href="https://github.com/deladem22/virtual-campus"
				>
				<div className="i-lucide-github" />
				Source code
				</a>

				<div className="flex gap-2 items-center text-secondary shrink-0">
				<div className="size-2 rounded-full bg-green-500" />
				All systems green
				</div>
			</div>
			</div>

			<div className="lg:col-start-3 col-span-1">
			<header className="font-bold">Final Year Project</header>

			<ul className="text-secondary">
				{projectLinks.map((link) => (
				<li key={link.href}>
					<a className="hover:underline" href={link.href}>
					{link.name}
					</a>
				</li>
				))}
			</ul>

			<div className="mt-6">
				<header className="font-bold">Members Profile</header>
				<div className="flex gap-4 mt-2">
				{members.map((member, index) => (
					<div key={index} className="text-center">
					<img
						src={member.imgSrc}
						alt={member.name}
						className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
					/>
					<div className="text-secondary mt-2 text-sm">{member.name}</div>
					</div>
				))}
				</div>
			</div>
			</div>
		</div>
		</footer>
	);
	}

	export { Footer };
