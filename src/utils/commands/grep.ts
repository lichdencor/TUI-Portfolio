export function grep(args: string[], input?: string): string {
  if (args.length === 1 && input) {
    const pattern = args[0];
    const regex = new RegExp(pattern);
    return input.split('\n').filter(line => regex.test(line)).join('\n');
  }

  if (args.length === 2) {
    const [pattern, file] = args;
    const content = localStorage.getItem('vfs:' + file);
    if (!content) return `grep: ${file}: No such file`;
    const regex = new RegExp(pattern);
    return content.split('\n').filter(line => regex.test(line)).join('\n');
  }

  return 'grep: invalid usage';
}
