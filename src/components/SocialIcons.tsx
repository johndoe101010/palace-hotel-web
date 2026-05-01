type SocialIconProps = {
  className?: string;
  size?: number;
};

export const WhatsAppIcon = ({ className, size = 22 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M12.02 2.5a9.45 9.45 0 0 0-8.14 14.25L2.9 21.5l4.86-1.15A9.45 9.45 0 1 0 12.02 2.5Zm0 1.7a7.75 7.75 0 0 1 6.61 11.8 7.74 7.74 0 0 1-9.92 2.77l-.36-.18-2.9.69.6-2.85-.21-.35a7.75 7.75 0 0 1 6.18-11.88Zm-3.06 3.8c-.17 0-.43.05-.66.31-.22.25-.87.85-.87 2.08 0 1.22.9 2.41 1.03 2.58.12.17 1.75 2.8 4.3 3.8 2.1.83 2.54.66 3 .62.45-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.41-.56-.42L8.96 8Z" />
  </svg>
);

export const FacebookIcon = ({ className, size = 22 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M13.55 22v-8.52h2.86l.43-3.32h-3.29V8.04c0-.96.27-1.62 1.65-1.62h1.76V3.45A23.6 23.6 0 0 0 14.4 3c-2.54 0-4.28 1.55-4.28 4.4v2.76H7.25v3.32h2.87V22h3.43Z" />
  </svg>
);

export const InstagramIcon = ({ className, size = 22 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.25" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const TripadvisorIcon = ({ className, size = 22 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 8.8 3 6.4h4.5A13.5 13.5 0 0 1 12 5.6c1.6 0 3.12.27 4.5.8H21l-1.5 2.4" />
    <circle cx="7.8" cy="12.1" r="3.6" />
    <circle cx="16.2" cy="12.1" r="3.6" />
    <circle cx="7.8" cy="12.1" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="16.2" cy="12.1" r="1.25" fill="currentColor" stroke="none" />
    <path d="M10.55 14.2 12 16l1.45-1.8" />
  </svg>
);
