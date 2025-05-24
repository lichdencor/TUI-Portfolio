export const fsKeyPrefix = "vfs:";
const MAX_STORAGE_BYTES = 100 * 1024; // 100 KB simulated disk space

function getUsedSpace(): number {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith(fsKeyPrefix))
    .reduce((total, key) => {
      const value = localStorage.getItem(key) || "";
      return total + key.length + value.length;
    }, 0);
}

function getFreeSpace(): number {
  return MAX_STORAGE_BYTES - getUsedSpace();
}

function canWrite(file: string, content: string): boolean {
  const oldSize = (localStorage.getItem(fsKeyPrefix + file) || "").length;
  const newSize = content.length;
  const delta = newSize - oldSize;
  return delta <= getFreeSpace();
}

export const vfs = {
  read(file: string): string | null {
    return localStorage.getItem(fsKeyPrefix + file);
  },

  write(file: string, content: string): boolean {
    if (!canWrite(file, content)) return false;
    localStorage.setItem(fsKeyPrefix + file, content);
    return true;
  },

  exists(file: string): boolean {
    return localStorage.getItem(fsKeyPrefix + file) !== null;
  },

  list(): string[] {
    return Object.keys(localStorage)
      .filter((key) => key.startsWith(fsKeyPrefix))
      .map((key) => key.slice(fsKeyPrefix.length));
  },

  remove(file: string): void {
    localStorage.removeItem(fsKeyPrefix + file);
  },

  clear(): void {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(fsKeyPrefix))
      .forEach((key) => localStorage.removeItem(key));
  },

  getUsedSpace,
  getFreeSpace,
  getMaxSpace: () => MAX_STORAGE_BYTES,
};

// Optional: command-level helper
export function echoCommand(file: string, content: string): string {
  const success = vfs.write(file, content);
  return success ? "" : "echo: write error: No space left on device";
}

