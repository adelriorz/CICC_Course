import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'
import TodoItem from './TodoItem'

function Modal() {
    const [showModal, setShowModal] = useState(false)

    const modalRef = useRef()

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Todo Item</button>
            {showModal && (
                <div className={styles.overlay}>
                    <div
                        ref={modalRef}
                        className={styles.modal}
                    >
                        <div className={styles.modalContent}>
                            <TodoItem />
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
