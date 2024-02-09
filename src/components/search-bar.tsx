import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

export interface SearchBarProps {
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ handleSearch }: SearchBarProps) {
	return (
		<div className='relative'>
			<Search className='absolute left-4 top-5 h-4 w-4 text-muted-foreground md:h-5 md:w-5' />
			<input
				type='text'
				placeholder='Busque em suas notas...'
				className='flex w-full rounded-md border border-slate-700 bg-transparent px-12 py-4 text-lg font-normal shadow-sm transition-colors  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 tracking-tight focus-visible:ring-lime-600 md:text-xl text-slate-300'
				onChange={handleSearch}
			/>
		</div>
	);
}
