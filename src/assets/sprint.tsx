export default function ReportsIcon(props: { width: number; height: number }) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10L12 18L15 15L20 20"
          stroke="#A9A9A9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 4V12M16 12L19 9M16 12L13 9"
          stroke="#A9A9A9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
