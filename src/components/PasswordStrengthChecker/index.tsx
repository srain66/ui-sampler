import { PasswordStrength } from "@/interfaces/passwordStrength";
import "./style.css";
import { useMemo } from "react";
interface IProps {
  strength: PasswordStrength;
}

export default function PasswordStrengthChecker({ strength }: IProps) {
  const strengthClass = useMemo(() => strength.toLowerCase(), [strength]);

  return (
    <div id="password-strength-checker" className="wrapper">
      <div className="head">
        <p>Password Strength</p>
        <p className={`title ${strengthClass}`}>{strength}</p>
      </div>
      <div className="bar-container">
        <div className={`bar ${strengthClass}`} />
      </div>
      <p className="description">
        {strength === PasswordStrength.STRONG
          ? "Your Password is STRONG!"
          : "Your Password is easily guessable!"}
      </p>
    </div>
  );
}
