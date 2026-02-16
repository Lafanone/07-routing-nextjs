import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchNoteById } from '../../../lib/api';
import NoteDetailsClient from './NoteDetails.client';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({ params }: Props) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const queryClient = new QueryClient();
    
    await queryClient.prefetchQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id),
    });

    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}