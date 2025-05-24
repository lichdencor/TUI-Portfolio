import { useEffect, useRef, useState } from "react";
import { SystemConfigs } from "../../utils/terminal/TerminalConfigs.ts";
import { runCommand } from "../../utils/terminal/commandRouter.ts";
import "./Terminal.css";

export const Terminal = () => {
  const [lines, setLines] = useState<string[]>([
    "Welcome! Type <span class='highlight'>'info'</span> for resume & contact info, or try common Unix commands.",
  ]);
  const [command, setCommand] = useState("");
  const [context, setContext] = useState<"system" | "info-shell">("system");

  const terminalRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const prompt =
    context === "info-shell"
      ? `info-shell >>>${SystemConfigs.is_root ? "#" : " "} `
      : `${SystemConfigs.user}@${SystemConfigs.host}:~${SystemConfigs.is_root ? "#" : "$"}`;

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  const executeCommand = (input: string) => {
    if (!input.trim()) return;

    const newLines = [...lines, `<span class='prompt-color'>${prompt}</span>${input}`];
    const { outputLines, clear, reboot, newContext } = runCommand(input, context);

    if (clear) {
      setLines([]);
      return;
    }

    if (newContext && newContext !== context) {
      setContext(newContext);
    }

    setLines([...newLines, ...outputLines]);

    if (reboot) {
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  return (
    <div className="block terminal-container" onClick={() => hiddenInputRef.current?.focus()}>
      <h2>Terminal</h2>
      <div id="container" ref={terminalRef}>
        <div id="output">
          {lines.map((line, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div id="prompt" className="input-line">
            <span className="prompt-color">{prompt}</span>
            <input
              ref={hiddenInputRef}
              id="cmdline"
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  executeCommand(command);
                  setCommand("");
                }
              }}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

