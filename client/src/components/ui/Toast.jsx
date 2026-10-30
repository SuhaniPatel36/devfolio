import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ isVisible, message, type = 'success', onClose }) => {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-brand-primary shrink-0" />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-bg-surface border border-border-subtle rounded-card shadow-elevation max-w-sm">
          {icons[type] || icons.success}
          <div className="text-xs font-medium text-text-primary leading-snug">{message}</div>
          {onClose && (
            <button onClick={onClose} className="p-1 rounded text-text-tertiary hover:text-text-primary cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
