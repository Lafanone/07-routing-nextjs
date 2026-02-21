'use client';

import Modal from '../../../../components/Modal/Modal';
import css from './NotePreview.module.css'; 

interface Note {
  title: string;
  content: string;
  tag?: string;
  createdAt: string;
}

export default function NotePreviewClient({ note }: { note: Note }) {
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
        <div className={css.content}>{note.content}</div>
      </div>
    </Modal>
  );
}