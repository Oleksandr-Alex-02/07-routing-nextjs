import Modal from '@/components/Modal/Modal';
import { getIdNotes } from '@/lib/api';

type Props = {
    onClose: () => void;
    params: Promise<{ id: string }>;
};

const NotePreview = async ({ onClose, params }: Props) => {
    const { id } = await params;
    const note = await getIdNotes(id);


    return (
        <Modal onClose={onClose} routerBack>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </Modal>
    );
};

export default NotePreview;