import { PasswordStrength } from "@/interfaces/passwordStrength";

export const validateStrength = (value: string): PasswordStrength => {
  // 영문, 8자 이상
  const fairRegEx = /^(?=.*[a-zA-Z]).{8,}$/;
  // 영문 + 숫자, 8자 이상
  const goodRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  // 영문 + 숫자, 특수문자 포함, 8자리 이상
  const strongRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,}$/;

  if (!value.match(fairRegEx)) {
    return PasswordStrength.WEAK;
  }
  if (!value.match(goodRegEx)) {
    return PasswordStrength.FAIR;
  }
  if (!value.match(strongRegEx)) {
    return PasswordStrength.GOOD;
  }
  return PasswordStrength.STRONG;
};
