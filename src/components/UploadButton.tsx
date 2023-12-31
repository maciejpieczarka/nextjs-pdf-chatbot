'use client';
import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const UploadButton = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={v => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>Example content</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
