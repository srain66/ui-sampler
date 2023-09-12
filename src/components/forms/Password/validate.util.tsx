import { StrengthRating } from "./strength.interface";

export const validateStrength = (value: string): StrengthRating => {
  // 영문, 8자 이상
  const fairRegEx = /^(?=.*[a-zA-Z]).{8,}$/;
  // 영문 + 숫자, 8자 이상
  const goodRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  // 영문 + 숫자, 특수문자 포함, 8자리 이상
  const strongRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,}$/;

  if (!value.match(fairRegEx)) {
    return StrengthRating.WEAK;
  }
  if (!value.match(goodRegEx)) {
    return StrengthRating.FAIR;
  }
  if (!value.match(strongRegEx)) {
    return StrengthRating.GOOD;
  }
  return StrengthRating.STRONG;
};
