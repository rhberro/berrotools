import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  args: {
    children: "Click me",
    onClick: fn(),
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    variant: {
      options: ["default", "ghost", "outline"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  async play(options) {
    const { canvasElement } = options;
    canvasElement.click();
  },
};
