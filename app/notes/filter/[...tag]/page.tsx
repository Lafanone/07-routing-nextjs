import { fetchNotes } from '../../../../lib/api';
import css from '../../../../app/page.module.css';

interface Props {
  params: Promise<{
    tag: string[];
  }>;
}

export default async function FilteredNotesPage(props: Props) {
  const params = await props.params;

  const tagParam = decodeURIComponent(params.tag[0]);

  const querySearch = tagParam === 'all' ? undefined : tagParam;

  const { notes } = await fetchNotes({
    page: 1,
    perPage: 10,
    search: querySearch,
  });

  return (
    <div>
      <h2 className={css.title}>
        {tagParam === 'all' ? 'All Notes' : `Category: ${tagParam}`}
      </h2>

      {notes.length > 0 ? (
        <ul className={css.list}>
          {notes.map((note) => (
            <li key={note.id} className={css.card}>
              <h3 className={css.cardTitle}>{note.title}</h3>
              <p className={css.cardDate}>
                 {new Date(note.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.empty}>{`No notes found for "${tagParam}"`}</p>
      )}
    </div>
  );
}