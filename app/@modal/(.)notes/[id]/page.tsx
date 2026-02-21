import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePreviewPage(props: Props) {
  const params = await props.params;
  const note = await fetchNoteById(params.id);

  if (!note) return null;

  return <NotePreviewClient note={note} />;
}