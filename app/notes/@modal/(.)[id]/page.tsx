import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import css from './NotePreview.module.css';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function NotePreviewPage(props: Props) {
    const params = await props.params;

    const note = await fetchNoteById(params.id);

    return (
        <Modal>
            <div className={css.container}>
                <h2 className={css.title}>{note.title}</h2>
                <div className={css.meta}>
                    <span className={css.tag}>{note.tag || 'No Tag'}</span>
                    <span className={css.date}>
                        {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                </div>
        
                <div className={css.content}>
                    {note.content}
                </div>
            </div>
        </Modal>
    );
}