import Link from "next/link";
import type { PropsWithChildren } from "react";
import { createElement } from "react";

import { cx } from "@/utils/dom";
import { getColorVariable } from "@/utils/theme";
import type { COLOR_PALLETE } from "@/constant";

import "./styles.scss";

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  link: "link",
  paragraph: "p",
  span: "span",
} as const;

const modifiers = {
  "body-1": "body-1",
  "body-2": "body-2",
  "body-3": "body-3",
  "body-4": "body-4",
  "body-5": "body-5",
  "body-6": "body-6",
} as const;

interface TypographyProps {
  className?: string;
  color?: keyof typeof COLOR_PALLETE;
  ellipsis?: boolean;
  fontWeight?: number;
  href?: string;
  margin?: number | string;
  modifier?: keyof typeof modifiers;
  tagElement?: keyof typeof elements;
  textDecoration?: string;
}

const Typography = (props: PropsWithChildren<TypographyProps>) => {
  const {
    children,
    className,
    color = "text",
    ellipsis = false,
    fontWeight = 400,
    href,
    margin = 0,
    modifier = "body-3",
    tagElement = "paragraph",
    textDecoration = "initial",
    ...res
  } = props;
  const selectedModifier = modifiers[modifier];
  const selectedTag = elements[tagElement];

  if (!selectedTag) return null;

  if (selectedTag !== "link") {
    return createElement(
      elements[tagElement],
      {
        ...res,
        className: cx([
          "typography",
          {
            [`typography--${selectedModifier}`]:
              typeof selectedModifier === "string",
          },
          className,
        ]),
        style: {
          color: `var(${getColorVariable(color)})`,
          fontWeight,
          margin,
          overflow: ellipsis ? "hidden" : "initial",
          textDecoration,
          textOverflow: ellipsis ? "ellipsis" : "initial",
          whiteSpace: ellipsis ? "nowrap" : "initial",
        },
      },
      children
    );
  }

  if (href) {
    return (
      <Link
        {...res}
        className={cx([
          "typography",
          {
            [`typography--${selectedModifier}`]:
              typeof selectedModifier === "string",
          },
          className,
        ])}
        href={href}
        style={{
          color: `var(${getColorVariable(color)})`,
          fontWeight,
          margin,
          overflow: ellipsis ? "hidden" : "initial",
          textDecoration,
          textOverflow: ellipsis ? "ellipsis" : "initial",
          whiteSpace: ellipsis ? "nowrap" : "initial",
        }}
      >
        {children}
      </Link>
    );
  }

  return null;
};

Typography.h1 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h1" />;
};

Typography.h2 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h2" />;
};

Typography.h3 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h3" />;
};

Typography.h4 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h4" />;
};

Typography.h5 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h5" />;
};

Typography.h6 = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="h6" />;
};

Typography.span = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="span" />;
};

Typography.links = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="link" />;
};

Typography.paragraph = (
  props: PropsWithChildren<Omit<TypographyProps, "tagElements">>
) => {
  return <Typography {...props} tagElement="paragraph" />;
};

export default Typography;
