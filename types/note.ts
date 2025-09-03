export interface Note {
    id: string,
    tag: string,
    title: string,
    content: string,
    createdat: string,
    updatedat: string,
}

export interface NoteFormType {
    tag: string,
    title: string,
    content?: string,
}

export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";