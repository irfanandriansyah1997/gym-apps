import type { Children, ReactElement, ReactNode } from "react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _generateClassName = (args: any) => {
  if (typeof args === "string" && args) return [args];

  if (typeof args === "object" && Array.isArray(args)) {
    return args.reduce((prev, current) => {
      const formattedClassName = _generateClassName(current);

      if (formattedClassName.length > 0) prev.push(...formattedClassName);
      return prev;
    }, []);
  }

  if (typeof args === "object" && !Array.isArray(args) && args) {
    return Object.keys(args).reduce<string[]>((prev, current) => {
      if (current && typeof args[current] === "boolean") {
        if (args[current]) prev.push(current);
      }

      return prev;
    }, []);
  }

  return [];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cx = (args: any) => {
  return _generateClassName(args).join(" ");
};

interface CheckIsElementExistPropsArgs {
  element: ReturnType<typeof Children.toArray>[0];
  propsKey: string;
  propsValue: string;
}

export const checkIsElementExistProps = (
  args: CheckIsElementExistPropsArgs
): boolean => {
  const { element, propsKey, propsValue } = args;

  const aliasedElement = element as ReactElement;
  const isReactElement =
    typeof aliasedElement === "object" &&
    Object.prototype.hasOwnProperty.call(aliasedElement, "props");
  const isPropsExists =
    typeof aliasedElement.props === "object" &&
    Object.prototype.hasOwnProperty.call(aliasedElement.props, propsKey) &&
    aliasedElement.props[propsKey] === propsValue;

  return isReactElement && isPropsExists;
};

/**
 * @description a helper function to find an element, the same as Array.prototype.find() more or less.
 * @function findChild
 * @param children array of react child
 * @param predicate the predicate to find. In this context we are using props.name
 */
export const findAndCloneChild = (
  children: ReactNode,
  predicate: string
): ReactElement | undefined => {
  let Element: ReactElement | null = null;
  let isMatched = false;

  React.Children.forEach(children, (child) => {
    if (!isMatched && React.isValidElement(child)) {
      const compare = `${child.props.name}` || "";
      if (compare === predicate) {
        isMatched = true;
        Element = child;
      }
    }
  });

  if (!React.isValidElement(Element)) return undefined;

  return Element;
};
