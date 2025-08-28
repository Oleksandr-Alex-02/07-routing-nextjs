"use client";

import css from './NoteDetails.module.css';
import { useParams } from 'next/navigation';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getIdNotes } from '@/lib/api';
import { Note } from '@/types/notes'

export default function NoteDetailsClient() {
    const { id } = useParams<{ id: string }>()

    const { data, isLoading, error } = useQuery<Note>({
        queryKey: ["notes", { id }],
        queryFn: () => getIdNotes(id),
        placeholderData: keepPreviousData,
        refetchOnMount: false,
    })

    if (isLoading) {
        return <p>Loading please wait...</p>
    }

    if (error || !data) {
        return <p>Something went wrong.</p>
    }

    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.header}>
                    <h2>{data?.title}</h2>
                </div>
                <p className={css.content}>{data?.content}</p>
                {data?.createdat && (
                    <p className={css.date}>
                        {new Date(data.createdat).toLocaleString('uk-UA')}
                    </p>
                )}
            </div>
        </div>
    )
}
