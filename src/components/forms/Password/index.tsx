import { ChangeEvent, useMemo, useState } from "react";
import { styled } from "styled-components";
import StrengthChecker from "./StrengthChecker";
import { validateStrength } from "./validate.util";

interface IProps {
  strengthChecker: boolean;
}

export default function Password({
  strengthChecker = true,
}: IProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  const strength = useMemo(() => validateStrength(value), [value]);
  const handleChange = (value: string) => setValue(value);

  return (
    <Wrapper>
      <label>
        <span>Password</span>
        <Input
          type="password"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
        />
      </label>

      {strengthChecker && <StrengthChecker strength={strength} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 320px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
`;
