import { createContext, useContext, useState, type ReactNode } from 'react'

interface ModalContextType {
    isDemoModalOpen: boolean
    openDemoModal: () => void
    closeDemoModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}

interface ModalProviderProps {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

    const openDemoModal = () => setIsDemoModalOpen(true)
    const closeDemoModal = () => setIsDemoModalOpen(false)

    return (
        <ModalContext.Provider value={{
            isDemoModalOpen,
            openDemoModal,
            closeDemoModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}