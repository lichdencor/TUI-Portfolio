const helpText = `
GNU bash, versión 5.2.37(1)-release (x86_64-pc-linux-gnu)
These shell commands are defined internally. Type 'help' to see this list.

Available commands:
  cat    - concatenate and display file contents
  echo   - display a line of text
  grep   - print lines matching a pattern
  ls     - list directory contents
  rm     - remove files or directories
  touch  - create empty files or update timestamps

Type 'help <command>' to get more info on a specific command.
`;

export function help(args: string[]): string {
  if (args.length === 0) {
    return helpText.trim();
  }

  const cmd = args[0].toLowerCase();
  switch (cmd) {
    case "cat":
      return "cat: concatenate FILE(s) to standard output.";
    case "echo":
      return "echo: display a line of text.";
    case "grep":
      return "grep: search for PATTERN in input lines.";
    case "ls":
      return "ls: list information about files.";
    case "rm":
      return "rm: remove files or directories.";
    case "touch":
      return "touch: change file timestamps or create empty files.";
    default:
      return `help: no help topics match '${cmd}'. Try 'help' to see available commands.`;
  }
}

