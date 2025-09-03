"use client";

import css from './Modal.module.css';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { createPortal } from "react-dom";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    routerBack?: boolean;
}

export default function Modal({ onClose, children, routerBack }: ModalProps) {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.code === 'Escepe') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => { window.removeEventListener('keydown', handleEsc) }
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    })

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    }

    const router = useRouter();
    const close = () => router.back();

    return createPortal(
        <>
            <div
                onClick={handleBackdropClick}
                className={css.backdrop}
                role="dialog"
                aria-modal="true"
            >
                <div className={css.modal}>
                    {children}
                    {routerBack && (
                        <button onClick={close}>Close</button>
                    )}

                </div>
            </div>
        </>,
        document.body
    )
}