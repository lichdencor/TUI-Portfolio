import { vfs } from '../terminal/virtualFs.ts';

export function rm(args: string[]): string {
  if (args.length === 0) {
    return 'rm: missing operand';
  }

  const errors: string[] = [];

  args.forEach((file) => {
    if (vfs.exists(file)) {
      vfs.remove(file);
    } else {
      errors.push(`rm: cannot remove '${file}': No such file`);
    }
  });

  return errors.length > 0 ? errors.join('\n') : '';
}

