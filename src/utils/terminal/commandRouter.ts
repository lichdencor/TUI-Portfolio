import { cat, echo, grep, help, ls, rm, touch } from '../commands';
import { neofetch } from '../commands/neofetch.ts';
import { SystemConfigs, InfoShellConfigs } from './TerminalConfigs.ts';

export function runCommand(
  input: string,
  context: 'system' | 'info-shell'
): {
  outputLines: string[];
  clear?: boolean;
  reboot?: boolean;
  newContext?: 'system' | 'info-shell';
} {
  const commands = input.split('|').map((cmd) => cmd.trim());

  let output = '';
  let outputLines: string[] = [];
  let newContext = context;

  for (let i = 0; i < commands.length; i++) {
    const [cmd, ...args] = commands[i].split(/\s+/);

    if (context === 'info-shell') {
      switch (cmd.toLowerCase()) {
        case 'help':
          output = InfoShellConfigs.general_help;
          break;
        case 'experience':
          output = InfoShellConfigs.experience_help;
          break;
        case 'education':
          output = InfoShellConfigs.education_help;
          break;
        case 'contact':
          output = InfoShellConfigs.contact_help;
          break;
        case 'exit':
          newContext = 'system';
          output = 'Exited info-shell.';
          break;
        default:
          output = `Command not found in info-shell: ${cmd}`;
      }
    } else {
      switch (cmd.toLowerCase()) {
        case 'info':
          newContext = 'info-shell';
          output = "Switched to info-shell. Type 'help' to get available commands.";
          break;
        case 'whoami':
          output = SystemConfigs.user;
          break;
        case 'date':
          output = new Date().toLocaleString();
          break;
        case 'clear':
          return { outputLines: [], clear: true };
        case 'reboot':
          outputLines.push(SystemConfigs.reboot_message.replace(/\n/g, '<br/>'));
          return { outputLines, reboot: true };
        case 'cat':
          output = cat(args, output);
          break;
        case 'touch':
          output = touch(args);
          break;
        case 'echo':
          output = echo(args);
          break;
        case 'ls':
          output = ls(args);
          break;
        case 'rm':
          output = rm(args);
          break;
        case 'grep':
          output = grep(args, output);
          break;
        case 'help':
          output = help(args);
          break;
        case 'neofetch':
          output = neofetch();
          break;
        default:
          output = SystemConfigs.invalid_command_message;
      }
    }
  }

  outputLines = output ? output.split('\n') : [];
  return { outputLines, newContext };
}


