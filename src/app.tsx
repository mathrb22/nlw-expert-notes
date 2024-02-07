import logoNlwExpert from './assets/logo-nlw-expert2.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { SearchBar } from './components/search-bar';

export function App() {
	return (
		<>
			<div className='mx-auto max-w-6xl my-12 px-4 space-y-6'>
				<img src={logoNlwExpert} alt='logo' className='h-6' />

				<form className='w-full'>
					<SearchBar />
				</form>
				<div className='h-px bg-slate-800' />

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6'>
					<NewNoteCard />
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis facere harum minus, blanditiis ipsum rerum repellendus adipisci
				eaque nesciunt saepe hic aliquid odit laborum? Incidunt provident similique
				ut nam!'
					/>
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur'
					/>
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis facere harum minus, blanditiis ipsum rerum repellendus adipisci
				eaque nesciunt saepe hic aliquid odit laborum? Incidunt provident similique
				ut nam!'
					/>
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis'
					/>
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis facere harum minus, blanditiis ipsum'
					/>
					<NoteCard
						date={new Date()}
						content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
				perspiciatis facere harum minus'
					/>
				</div>
			</div>
		</>
	);
}
