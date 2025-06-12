// This ensures the file is treated as a module.
export {};

declare global {
  interface Window {
    /**
     * The Facebook Pixel function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: (...args: any[]) => void;
  }
} 