import type { PropsWithChildren } from "react";
import React from "react";

import { findAndCloneChild } from "@/utils/dom";

interface SingleSwitchProps {
  match: string | number;
}

/**
 * Single Switch Component
 *
 * @returns {JSX.Element}
 */
const SingleSwitch = (props: PropsWithChildren<SingleSwitchProps>) => {
  const { children, match } = props;
  const Element = findAndCloneChild(children, `${match}`);

  if (!Element || !React.isValidElement(Element)) return null;

  return Element;
};

export default SingleSwitch;
