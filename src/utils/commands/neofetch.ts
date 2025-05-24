import { SystemConfigs } from "../terminal/TerminalConfigs";

function getUptime(): string {
  const ms = Date.now() - SystemConfigs.bootTime;
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}


function getBrowserInfo(): string {
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  const match = ua.match(/(Firefox|Chrome|Safari|Edge)\/([0-9.]+)/);
  const browser = match ? `${match[1]} ${match[2]}` : "Unknown";
  let info = `${platform}, ${browser}`;
  if (info.length > 30) {
    info = info.slice(0, 27) + "..."; // truncate to avoid overflow
  }
  return info;
}


function getCPUInfo(): string {
  const cores = navigator.hardwareConcurrency || "Unknown";
  return `Logical cores: ${cores}`;
}

function getMemoryInfo(): string {
  // performance.memory is only available in Chrome-based browsers
  if ((performance as any).memory) {
    const memory = (performance as any).memory;
    const usedMB = (memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
    const totalMB = (memory.totalJSHeapSize / 1024 / 1024).toFixed(2);
    return `JS Heap: ${usedMB} MB / ${totalMB} MB`;
  }
  return "Memory info not available";
}

function getTheme(): string {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "Dark";
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "Light";
  }
  return "Unknown";
}


export function neofetch(): string {
  return `
<pre>
  ⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀
  ⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀
  ⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢿⣿⣷⡀⠀
  ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣴⢿⣿⣧⠀
  ⣿⣿⣿⣿⣿⡿⠛⣩⠍⠀⠀⠀⠐⠉⢠⣿⣿⡇
  ⣿⡿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿
  ⢹⣿⣤⠄⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡏
  ⠀⠻⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠟⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠟⠁         

  ${SystemConfigs.user}@${SystemConfigs.host}
  -----------------------------
  OS:       Voidux Web 1.0
  Kernel:   JS 2025.05.23+
  Shell:    bash 5.2.37
  Terminal: ReactTerm
  Uptime:   ${getUptime()}
  Host:     ${getBrowserInfo()}
  Memory:   ${getMemoryInfo()}
  Theme:    ${getTheme()}
  Website:  lichdencor.com
</pre>
  `.trim();
}

