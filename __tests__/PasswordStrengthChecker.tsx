import { render } from "@testing-library/react";
import { PasswordStrength } from "@/interfaces/passwordStrength";
import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";

describe("<PasswordStrengthChecker />", () => {
  it("renders when password is strong", () => {
    const { container } = render(
      <PasswordStrengthChecker strength={PasswordStrength.STRONG} />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders when password is good", () => {
    const { container } = render(
      <PasswordStrengthChecker strength={PasswordStrength.GOOD} />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders when password is fair", () => {
    const { container } = render(
      <PasswordStrengthChecker strength={PasswordStrength.FAIR} />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders when password is weak", () => {
    const { container } = render(
      <PasswordStrengthChecker strength={PasswordStrength.WEAK} />
    );
    expect(container).toMatchSnapshot();
  });
});
