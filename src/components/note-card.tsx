export function NoteCard() {
	return (
		<button className='text-left rounded-md bg-slate-800 p-5 flex flex-col space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600 transition-all outline-none'>
			<span className='text-sm font-medium text-slate-300'>há 4 dias</span>
			<p className='text-sm leading-6 text-slate-400'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis facere harum minus, blanditiis ipsum rerum repellendus adipisci
				eaque nesciunt saepe hic aliquid odit laborum? Incidunt provident similique
				ut nam!
			</p>
			<div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
		</button>
	);
}
