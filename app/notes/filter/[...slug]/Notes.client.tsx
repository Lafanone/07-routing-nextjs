'use client';

import Link from 'next/link';
import css from '../../../../app/page.module.css';

interface Note {
  id: string;
  title: string;
  createdAt: string;
}

interface NotesClientProps {
  notes: Note[];
  tagParam: string;
}

export default function NotesClient({ notes, tagParam }: NotesClientProps) {
  return (
    <div>
      <h2 className={css.title}>
        {tagParam === 'all' ? 'All Notes' : `Category: ${tagParam}`}
      </h2>

      {notes.length > 0 ? (
        <ul className={css.list}>
          {notes.map((note) => (
            <li key={note.id} className={css.card}>
              <Link 
                href={`/notes/${note.id}`} 
                scroll={false}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <h3 className={css.cardTitle}>{note.title}</h3>
                <p className={css.cardDate}>
                   {new Date(note.createdAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.empty}>{`No notes found for "${tagParam}"`}</p>
      )}
    </div>
  );
}