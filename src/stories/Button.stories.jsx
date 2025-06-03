import Button from "../ui/Button";
import RootLayout from "../layouts/RootLayout";

export default {
  title: "ui/Button",
  component: Button,
  decorators: [
    (Story) => {
      return <RootLayout>{<Story />}</RootLayout>;
    },
  ],
  argTypes: {
    handleClick: { action: "handleClick" },
    size: { control: "text", options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Click Me",
  backgroundColor: "red",
  size: "md",
};

export const green = Template.bind({});
green.args = {
  label: "Click Me",
  backgroundColor: "green",
  size: "md",
};

export const small = Template.bind({});
small.args = {
  label: "Click Me",
  backgroundColor: "blue",
  size: "sm",
};

export const large = Template.bind({});
large.args = {
  label: "Click Me",
  backgroundColor: "blue",
  size: "lg",
};

export const longLabel = Template.bind({});
longLabel.args = {
  label: "This is a very long label for admin",
  backgroundColor: "blue",
  size: "lg",
};
