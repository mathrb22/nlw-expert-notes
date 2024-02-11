import { ExternalLink, Github } from 'lucide-react';
import logoNlwExpert from './assets/logo-nlw-expert2.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { SearchBar } from './components/search-bar';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

interface Note {
	id: string;
	date: Date;
	content: string;
}

export function App() {
	const [search, setSearch] = useState('');
	const [notes, setNotes] = useState<Note[]>(() => {
		const notes = localStorage.getItem('notes');

		if (notes) {
			return JSON.parse(notes);
		}

		return [];
	});

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		const query = event.target.value;
		setSearch(query);
	}

	const filteredNotes =
		search !== ''
			? notes.filter((note) =>
					note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			  )
			: notes;

	function onNoteCreated(content: string) {
		const newNote: Note = {
			id: crypto.randomUUID(),
			date: new Date(),
			content,
		};

		const notesArray = [newNote, ...notes];

		setNotes(notesArray);
		localStorage.setItem('notes', JSON.stringify(notesArray));
	}

	function onNoteDeleted(id: string) {
		const notesArray = notes.filter((note) => {
			return note.id !== id;
		});

		setNotes(notesArray);

		localStorage.setItem('notes', JSON.stringify(notesArray));

		toast.success('Nota apagada com sucesso!', {
			position: 'top-center',
			duration: 2500,
		});
	}

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
					<SearchBar handleSearch={handleSearch} />
				</form>
				<div className='h-px bg-slate-800' />

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6'>
					<NewNoteCard onNoteCreated={onNoteCreated} />

					{filteredNotes.map((note) => (
						<NoteCard onNoteDeleted={onNoteDeleted} key={note.id} note={note} />
					))}
				</div>
			</div>
		</>
	);
}
