import styled from "styled-components";
import { StrengthRating } from "./strength.interface";
import { useMemo } from "react";

interface IProps {
  strength: StrengthRating;
}

export default function StrengthChecker({ strength }: IProps) {
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
  [StrengthRating.STRONG]: {
    color: "#10B981",
    width: "90%",
    text: "Your password is STRONG!",
  },
  [StrengthRating.GOOD]: {
    color: "#3B82F6",
    width: "60%",
    text: "Your password is easily guessable.",
  },
  [StrengthRating.FAIR]: {
    color: "#F59E0B",
    width: "30%",
    text: "Your password is easily guessable.",
  },
  [StrengthRating.WEAK]: {
    color: "#EF4444",
    width: "10%",
    text: "Your password is easily guessable.",
  },
};

const Wrapper = styled.div`
  min-width: 240px;
  width: "100%";
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem;
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;
`;

const Status = styled.p`
  flex: none;
  margin-left: auto;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #eee;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 0.5rem;
`;

const Text = styled.p`
  color: gray;
`;