export default function Index() {
	return (
		<div className="container mb-48 mt-36 flex flex-col items-center justify-center">
			<div className="h-4"></div>
			<div className="container flex flex-col items-center rounded-3xl bg-muted p-12">
				<div className="relative w-52">
					<div className="absolute -top-40">
						<div className="relative">
							<img
								src="https://placekitten.com/400/400"
								alt="Simon Vrachliotis"
								className="h-52 w-52 rounded-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="h-20"></div>
				<div className="flex flex-col items-center">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<h1 className="text-center text-h2">Simon Vrachliotis</h1>
					</div>
					<p className="mt-2 text-center text-muted-foreground">
						Joined 31/10/2023
					</p>
					<form method="post" action="/logout" className="mt-3">
						<button
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-12 py-3 leading-3"
							type="submit"
						>
							<span className="inline-flex items-center gap-1.5">
								<svg className="w-[1em] h-[1em] inline self-center scale-125 max-md:scale-150">
									<use href="/build/_assets/sprite-SZTQFBWO.svg#exit"></use>
								</svg>
								Logout
							</span>
						</button>
					</form>
					<div className="mt-10 flex gap-4">
						<a
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-4 py-2"
							href="/users/simonswiss/notes"
						>
							My notes
						</a>
						<a
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors outline-none focus-visible:ring-4 focus-within:ring-4 ring-ring ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-4 py-2"
							href="/settings/profile"
						>
							Edit profile
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
