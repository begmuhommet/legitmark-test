'use client';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

const HomeScreen = () => {
  // States
  const [open, setOpen] = useState(false);

  // Handlers
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  // Renders
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="container">
        <div className="flex items-center justify-center">
          <Button onClick={handleOpenModal}>Open</Button>
        </div>
      </div>

      <Modal open={open} onClose={handleCloseModal}>
        Bega
      </Modal>
    </main>
  );
};

export default HomeScreen;
