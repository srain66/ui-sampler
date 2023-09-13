import styled from "styled-components";
import { useMemo } from "react";
import { PasswordStrength } from "@/interfaces/passwordStrength";
import { Bar, BarContainer, Header, Status, Wrapper, Text } from "./styles";

interface IProps {
  strength: PasswordStrength;
}

export default function PasswordStrengthChecker({ strength }: IProps) {
  const { color, width, text } = useMemo(
    () => differentByStrength[strength],
    [strength]
  );

  return (
    <Wrapper>
      <Header>
        <p>Password Strength</p>
        <Status style={{ color }}>{strength}</Status>
      </Header>
      <BarContainer>
        <Bar style={{ backgroundColor: color, width }} />
      </BarContainer>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const differentByStrength = {
  [PasswordStrength.STRONG]: {
    color: "#10B981",
    width: "90%",
    text: "Your password is STRONG!",
  },
  [PasswordStrength.GOOD]: {
    color: "#3B82F6",
    width: "60%",
    text: "Your password is easily guessable.",
  },
  [PasswordStrength.FAIR]: {
    color: "#F59E0B",
    width: "30%",
    text: "Your password is easily guessable.",
  },
  [PasswordStrength.WEAK]: {
    color: "#EF4444",
    width: "10%",
    text: "Your password is easily guessable.",
  },
};
