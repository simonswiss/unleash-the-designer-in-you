import { Link } from '@remix-run/react'

export default function Index() {
	return (
		<div className="mt-48 max-w-xl mx-auto relative group">
			<div className="group-hover:translate-y-10 transition absolute rounded-xl translate-y-8 inset-4 bg-slate-100 ring-1 ring-slate-300 delay-75"></div>
			<div className="group-hover:translate-y-5 absolute transition rounded-xl translate-y-4 inset-2 bg-slate-200 ring-1 ring-slate-300"></div>
			<div className="relative flex flex-col items-center rounded-xl bg-gradient-to-t from-slate-100 to-background ring-2 ring-black/5 p-12 shadow-xl">
				<img
					src="https://placekitten.com/400/400"
					alt="Simon Vrachliotis"
					className="h-52 w-52 rounded-full object-cover -mt-40  border-4 border-background ring-2 ring-black/10 shadow-md"
				/>
				<div className="mt-6 flex flex-col justify-center items-center">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<h1 className="text-2xl font-medium">Simon Vrachliotis</h1>
					</div>
					<p className="mt-2 text-center text-muted-foreground">
						Joined 31/10/2023
					</p>

					<Link className="text-center mt-2 grid group/notes" to="#">
						<span className="text-9xl text-slate-300 font-thin group-hover/notes:text-slate-400">
							5
						</span>
						<span className="uppercase tracking-widest text-slate-600 font-medium group-hover/notes:text-slate-800">
							notes
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
