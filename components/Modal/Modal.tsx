'use client';

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.back();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <div
      className={styles.backdrop}
      onClick={() => router.back()}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => router.back()}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '1.5rem',
            lineHeight: 1
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;