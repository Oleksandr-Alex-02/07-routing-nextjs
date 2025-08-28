
import axios from 'axios';
import { Note, NoteFormType } from "../types/notes"


export interface NoteData {
    notes: Note[];
    totalPages: string;
}
const NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
axios.defaults.baseURL = "https://notehub-public.goit.study/api";

export const fetchNotes = async (currentPage: number, searcjQuery: string) => {
    const res = await axios.get<NoteData>(
        "/notes", {
        params: {
            search: searcjQuery,
            page: currentPage,
        },
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
}