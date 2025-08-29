
import css from './SidebarNotes.module.css';
import Link from 'next/link';
import { getCategories } from '@/lib/api';


export default async function NotesSidebar() {
    const categories = await getCategories();

    return (
        <ul className={css.menuList}>
            {/* список тегів */}
            <li className={css.menuItem}>
                <a href={categories} className={css.menuLink}>
                    Назва тегу
                </a>
            </li>
        </ul>

    );
};
