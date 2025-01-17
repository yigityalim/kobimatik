import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="inline-flex items-center gap-x-2">
          Giriş Gerekli <Lock className="text-accent-blue size-[14px] dark:text-blue-400" />
        </DialogTitle>
        <div className="flex flex-col gap-4 p-4">
          <DialogDescription>Formda ilerleme kaydetmek için lütfen Giriş yapın.</DialogDescription>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Button onClick={onLogin}>Giriş Yap</Button>
            <DialogClose asChild>
              <Button variant="default">Kapat</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
