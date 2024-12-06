import React from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  confirmText?: string; // Optional property for the confirm button text
  onConfirm?: () => void; // Optional property for handling confirmation
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose, confirmText, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">{message}</h2>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
          {onConfirm && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onConfirm}
            >
              {confirmText || 'Confirm'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
