import type { HTMLAttributes, LiHTMLAttributes } from "react";

import { cx } from "@/utils/dom";

import "./styles.scss";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  alignItems?: string;
  gap?: number;
  justifyContent?: string;
  orientation?: "horizontal" | "vertical";
}

const List = (props: ListProps) => {
  const {
    alignItems = "initial",
    children,
    className,
    gap = 8,
    justifyContent = "initial",
    orientation = "horizontal",
    ...rest
  } = props;

  return (
    <ul
      {...rest}
      className={cx(["list", className])}
      style={{ ...(rest.style || {}), gap }}
      data-option-orientation={orientation}
      data-option-align-items={alignItems}
      data-option-justify-content={justifyContent}
    >
      {children}
    </ul>
  );
};

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  alignItems?: string;
  gap?: number;
  justifyContent?: string;
  orientation?: "horizontal" | "vertical";
}

List.Item = (props: ListItemProps) => {
  const {
    alignItems = "initial",
    gap = 8,
    justifyContent = "initial",
    orientation = "horizontal",
  } = props;

  return (
    <li
      {...props}
      style={{ gap }}
      data-option-orientation={orientation}
      data-option-align-items={alignItems}
      data-option-justify-content={justifyContent}
    />
  );
};

export default List;
