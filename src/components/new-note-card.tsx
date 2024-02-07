import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';

export function NewNoteCard() {
	const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
	const [content, setContent] = useState('');
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	function handleStartEditor() {
		setShouldShowOnboarding(false);
	}

	function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
		setContent(event.target.value);

		if (event.target.value === '') {
			setShouldShowOnboarding(true);
		}
	}

	function handleSaveNote(event: FormEvent) {
		event.preventDefault();

		console.log(content);

		toast.success('Nota criada com sucesso!', {
			position: 'top-center',
			duration: 2500,
		});

		handleDialogOpenChange();
	}

	function handleDialogOpenChange() {
		setIsDialogOpen(!isDialogOpen);
		setShouldShowOnboarding(true);
		setContent('');
	}

	return (
		<Dialog.Root open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
			<Dialog.Trigger className='rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600 transition-all outline-none'>
				<span className='text-sm font-medium text-slate-200'>Adicionar nota</span>

				<p className='text-sm leading-6 text-slate-400'>
					Grave uma nota em áudio que será convertida para texto automaticamente.
				</p>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='inset-0 fixed bg-black/50 data-[state=open]:animate-[dialog-overlay-show_300ms] data-[state=closed]:animate-[dialog-overlay-hide_300ms' />
				<Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none data-[state=open]:animate-[dialog-content-show_300ms] data-[state=closed]:animate-[dialog-content-hide_300ms]'>
					<Dialog.Close className='absolute top-4 right-4 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-lime-600 transition-all outline-none'>
						<X size={20} />
					</Dialog.Close>
					<form onSubmit={handleSaveNote} className='flex flex-1 flex-col '>
						<div className='flex flex-1 flex-col gap-3 p-5'>
							<span className='text-md font-medium text-slate-300 '>
								Adicionar nota
							</span>
							{shouldShowOnboarding ? (
								<p className='text-md leading-6 text-slate-400'>
									Comece{' '}
									<button className='font-medium text-lime-400 hover:underline outline-none'>
										gravando uma nota em áudio
									</button>{' '}
									ou se preferir {''}
									<button
										onClick={handleStartEditor}
										className='font-medium text-lime-400 hover:underline outline-none'>
										{' '}
										utilize apenas texto
									</button>
									...
								</p>
							) : (
								<textarea
									placeholder='Digite sua nota aqui...'
									autoFocus
									className='text-md leading-6 text-slate-300 bg-transparent resize-none flex-1 outline-none scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-0 overflow-y-auto'
									onChange={handleContentChanged}
								/>
							)}
						</div>
						<button
							disabled={content === ''}
							type='submit'
							className='w-full bg-lime-400 disabled:bg-lime-600 disabled:cursor-not-allowed hover:bg-lime-500 text-lime-950 py-4 text-center text-sm font-semibold outline-none group focus-visible:ring-2 focus-visible:ring-lime-600 transition-all'>
							Salvar nota
						</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
