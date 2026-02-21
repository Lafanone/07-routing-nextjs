import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function FilteredNotesPage(props: Props) {
  const params = await props.params;
  
  const tagParam = decodeURIComponent(params.slug[0]);
  const querySearch = tagParam === 'all' ? undefined : tagParam;

  const { notes } = await fetchNotes({
    page: 1,
    perPage: 10,
    search: querySearch,
  });

  return <NotesClient notes={notes} tagParam={tagParam} />;
}