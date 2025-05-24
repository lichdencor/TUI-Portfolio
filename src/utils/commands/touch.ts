import { vfs } from '../terminal/virtualFs.ts';

export function touch(args: string[]): string {
  args.forEach(file => {
    if (!vfs.exists(file)) {
      vfs.write(file, '');  // create empty file if it doesn't exist
    }
  });
  return '';  // no output on success
}

