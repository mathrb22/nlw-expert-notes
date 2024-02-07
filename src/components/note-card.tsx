import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { X } from 'lucide-react';

export interface NoteCardProps {
	note: {
		date: Date;
		content: string;
	};
}

export function NoteCard({ note }: NoteCardProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger className='text-left rounded-md bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600 transition-all outline-none'>
				<span className='text-sm font-medium text-slate-300'>
					{formatDistanceToNow(note.date, {
						locale: ptBR,
						addSuffix: true,
					})}
				</span>
				<p className='text-sm leading-6 text-slate-400'>{note.content}</p>
				<div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='inset-0 fixed bg-black/50' />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}>
					<Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
						<Dialog.Close className='absolute top-4 right-4 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-lime-600 transition-all outline-none'>
							<X size={20} />
						</Dialog.Close>
						<div className='flex flex-1 flex-col gap-3 p-5'>
							<span className='text-sm font-medium text-slate-300 '>
								{formatDistanceToNow(note.date, {
									locale: ptBR,
									addSuffix: true,
								})}
							</span>
							<p className='text-md leading-6 text-slate-400'>{note.content}</p>
						</div>

						<button
							type='button'
							className='w-full bg-slate-800 py-4 text-center text-sm font-medium text-slate-300 outline-none group focus-visible:ring-2 focus-visible:ring-lime-600 transition-all'>
							Deseja{' '}
							<span className='text-red-400 group-hover:underline'>
								apagar essa nota
							</span>
							?
						</button>
					</Dialog.Content>
				</motion.div>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
