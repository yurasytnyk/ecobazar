interface Props {
  className?: string;
}

export const HeartIcon = ({ className }: Props) => {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.9995 24.5717C-11.6667 9.83289 6.99999 -6.16711 14.9995 3.9503C23 -6.16711 41.6666 9.83289 14.9995 24.5717Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
