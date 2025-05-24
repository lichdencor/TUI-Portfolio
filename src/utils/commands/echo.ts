import { vfs } from "../terminal/virtualFs.ts"

export function echo(args: string[]): string {
  // Simple support for: echo [text] > filename
  const redirectIndex = args.indexOf('>');

  if (redirectIndex !== -1) {
    const content = args.slice(0, redirectIndex).join(' ');
    const file = args[redirectIndex + 1];
    if (!file) return 'echo: syntax error near unexpected token `newline`';

    const success = vfs.write(file, content);
    return success ? '' : 'echo: write error: No space left on device';
  }

  // No redirection: just print joined args
  return args.join(' ');
}

