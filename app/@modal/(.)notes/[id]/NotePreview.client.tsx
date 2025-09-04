"use client"

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { getIdNotes } from '@/lib/api';
import { Note } from '@/types/note'

import Modal from '@/components/Modal/Modal';
import NotePreviewClient from '@/components/NotePreview/NotePreview';

type Props = {
    onClose: () => void;
};

export default function NotePreview({ onClose }: Props) {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const { data: note, error, isLoading } = useQuery<Note>({
        queryKey: ["note", { id }],
        queryFn: () => getIdNotes(id),
        refetchOnMount: false,
    })

    if (isLoading) {
        return <p>Loading please wait...</p>
    }

    if (error || !note) {
        return <p>Something went wrong.</p>
    }

    const close = () => router.back();

    return (
        <Modal onClose={onClose}>
            <NotePreviewClient note={note} onClose={close} />
        </Modal>
    );
};