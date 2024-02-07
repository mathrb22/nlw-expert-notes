import { ExternalLink, Github } from 'lucide-react';
import logoNlwExpert from './assets/logo-nlw-expert2.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { SearchBar } from './components/search-bar';

export function App() {
	return (
		<>
			<div className='mx-auto max-w-6xl my-12 px-4 space-y-6'>
				<div className='flex justify-between flex-1'>
					<img src={logoNlwExpert} alt='logo' className='h-6' />

					<a
						className='flex items-center gap-2 text-slate-500 hover:text-slate-400 cursor-pointer transition-all duration-200'
						href='https://github.com/mathrb22/nlw-expert-notes'
						target='_blank'>
						<Github className='h-5' />
						Github
						<ExternalLink className='h-5' />
					</a>
				</div>

				<form className='w-full'>
					<SearchBar />
				</form>
				<div className='h-px bg-slate-800' />

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6'>
					<NewNoteCard />
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
					<NoteCard
						note={{
							date: new Date(),
							content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.!',
						}}
					/>
				</div>
			</div>
		</>
	);
}
