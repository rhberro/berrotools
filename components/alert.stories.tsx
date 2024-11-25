import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertTitle } from "./alert";
import { expect } from "@storybook/test";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {},
  tags: ["autodocs"],
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "error", "success", "warning"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </>
    ),
    variant: "default",
  },
};

export const Error: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </>
    ),
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </>
    ),
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </>
    ),
    variant: "warning",
  },
  async play(options) {
    const { canvasElement } = options;
    canvasElement.click();
    expect(canvasElement).toHaveTextContent("Title");
    expect(canvasElement).toHaveTextContent("Description");
  },
};
