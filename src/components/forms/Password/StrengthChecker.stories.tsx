import type { Meta, StoryObj } from "@storybook/react";
import StrengthChecker from "./StrengthChecker";
import { StrengthRating } from "./strength.interface";

const meta = {
  title: "Forms/StrengthChecker",
  component: StrengthChecker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { strength: { controls: "type" } },
} satisfies Meta<typeof StrengthChecker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Weak: Story = {
  args: {
    strength: StrengthRating.WEAK,
  },
};

export const Fair: Story = {
  args: {
    strength: StrengthRating.FAIR,
  },
};

export const Good: Story = {
  args: {
    strength: StrengthRating.GOOD,
  },
};

export const Strong: Story = {
  args: {
    strength: StrengthRating.STRONG,
  },
};
