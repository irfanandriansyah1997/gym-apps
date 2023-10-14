import type { ComponentProps, HTMLAttributes } from "react";

import Typography from "@/components/Typography";

import "./styles.scss";

interface LabelProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "children"> {
  active?: boolean;
  activeColor?: "primary" | "secondary";
  size?: "default" | "large" | "small";
  text: string;
}

type TypographyProps = ComponentProps<typeof Typography>;

const Label = (props: LabelProps) => {
  const {
    active,
    activeColor = "primary",
    size = "default",
    text,
    ...rest
  } = props;

  let modifierKind: TypographyProps["modifier"] = "body-5";
  if (size === "large") modifierKind = "body-4";
  if (size === "small") modifierKind = "body-6";

  return (
    <div
      {...rest}
      className="label"
      data-option-size={size}
      data-option-active={Boolean(active)}
      data-option-active-color={activeColor}
    >
      <Typography.paragraph
        modifier={modifierKind}
        fontWeight={500}
        margin="0"
        color={active ? "white" : "heading"}
      >
        {text}
      </Typography.paragraph>
    </div>
  );
};

export default Label;
