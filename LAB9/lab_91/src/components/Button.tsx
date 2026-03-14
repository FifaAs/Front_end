import { memo } from "react";

export interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: "primary" | "secondary";
}


export const Button = memo(function Button({
  onClick,
  label,
  variant = "primary",
}: ButtonProps) {
  console.log(`🟢 Button "${label}" render`);

  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
});