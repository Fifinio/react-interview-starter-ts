import React from "react";

// returns desired svg icon based on props
export const Icon = (props: {
  icon: string;
  onClick?: () => void;
  className?: string;
}) => {
  let icon;
  switch (props.icon) {
    case "search":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            fill="#1A1B1D"
            d="M11.71 11h.79l4.99 5L16 17.49l-5-4.99v-.79l-.27-.28A6.471 6.471 0 016.5 13 6.5 6.5 0 1113 6.5c0 1.61-.59 3.09-1.57 4.23l.28.27zM2 6.5C2 8.99 4.01 11 6.5 11S11 8.99 11 6.5 8.99 2 6.5 2 2 4.01 2 6.5z"
          ></path>
        </svg>
      );
      break;
    case "checkbox":
      icon = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="3.5"
            fill="white"
            stroke="#E0E2EA"
          />
        </svg>
      );
      break;
    case "checkbox-checked":
      icon = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#4460F7" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.0001 10.7799L3.2201 7.9999L2.27344 8.9399L6.0001 12.6666L14.0001 4.66656L13.0601 3.72656L6.0001 10.7799Z"
              fill="white"
            />
          </svg>
        </svg>
      );
      break;
    case "close":
      icon = (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="#1A1B1D"
          />
        </svg>
      );
      break;
    case "star":
      icon = (
        <svg
          width="18"
          height="17"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.81 6.62L20 7.24L14.55 11.97L16.18 19L10 15.27L3.82 19L5.46 11.97L0 7.24L7.19 6.63L10 0L12.81 6.62ZM6.24 15.67L10 13.4L13.77 15.68L12.77 11.4L16.09 8.52L11.71 8.14L10 4.1L8.3 8.13L3.92 8.51L7.24 11.39L6.24 15.67Z"
            fill="#1A1B1D"
          />
        </svg>
      );
      break;
    case "star-filled":
      icon = (
        <svg
          width="18"
          height="17"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
            fill="#F9A52B"
          />
        </svg>
      );
      break;
    case "shopping-bag":
      icon = (
        <svg
          width="38"
          height="48"
          viewBox="0 0 38 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.5 9.02197H34C35.6569 9.02197 37 10.3651 37 12.022V43.522C37 45.1788 35.6569 46.522 34 46.522H4C2.34315 46.522 1 45.1788 1 43.522V12.022C1 10.3651 2.34315 9.02197 4 9.02197H11.5C11.5 4.87984 14.8579 1.52197 19 1.52197C23.1421 1.52197 26.5 4.87984 26.5 9.02197Z"
            stroke="#B9BDCF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    default:
      return null;
  }
  return icon;
};
