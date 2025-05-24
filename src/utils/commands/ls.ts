import { vfs } from '../terminal/virtualFs.ts';

export function ls(_args: string[]): string {
  // For now, ignore args like directory names since vfs is flat

  const files = vfs.list();

  if (files.length === 0) {
    return '';
  }

  // Just join filenames with spaces, like `ls` output
  return files.join(' ');
}

