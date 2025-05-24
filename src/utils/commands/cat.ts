import { vfs } from '../terminal/virtualFs';

export function cat(args: string[], input?: string): string {
  if (args.length === 0 && input) {
    return input;
  }

  return args.map(file => {
    const content = vfs.read(file);
    if (content === null) {
      return `cat: ${file}: No such file`;
    }
    return content;
  }).join('\n');
}

