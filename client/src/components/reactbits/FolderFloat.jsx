import React from 'react';
import { motion } from 'framer-motion';
import { Folder, FolderOpen } from 'lucide-react';

export const FolderFloat = ({
  folders = [],
  activeFolderId,
  onSelectFolder,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-end justify-center gap-3 md:gap-4 ${className}`}>
      {folders.map((folder, index) => {
        const isActive = folder.id === activeFolderId;

        return (
          <motion.div
            key={folder.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="relative"
          >
            <motion.button
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectFolder(folder.id)}
              className={`relative group flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'bg-bg-surface border-brand-primary shadow-lg ring-2 ring-brand-primary/20 text-brand-primary'
                  : 'bg-bg-surface/70 backdrop-blur-sm border-border-subtle hover:border-border-hover text-text-secondary hover:text-text-primary'
              }`}
            >
              <div
                className={`absolute -top-2 left-4 h-2.5 px-3 rounded-t-md border-t border-l border-r text-[9px] font-mono uppercase tracking-wider font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-bg-subtle text-text-tertiary border-border-subtle group-hover:text-text-secondary'
                }`}
              >
                Dir
              </div>

              <div
                className={`transition-colors ${
                  isActive ? 'text-brand-primary' : 'text-text-tertiary group-hover:text-brand-primary'
                }`}
              >
                {isActive ? (
                  <FolderOpen className="w-4 h-4 fill-brand-primary/20" />
                ) : (
                  <Folder className="w-4 h-4" />
                )}
              </div>

              <span className="text-xs md:text-sm font-semibold tracking-tight">
                {folder.label}
              </span>

              {folder.count !== undefined && (
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-primary/15 text-brand-primary'
                      : 'bg-bg-subtle text-text-tertiary'
                  }`}
                >
                  {folder.count}
                </span>
              )}

              {isActive && (
                <motion.div
                  layoutId="activeFolderGlow"
                  className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                />
              )}
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FolderFloat;
