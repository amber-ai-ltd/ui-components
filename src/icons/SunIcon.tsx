import type { IconProps } from './types.js';

export function SunIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
    </svg>
  );
}