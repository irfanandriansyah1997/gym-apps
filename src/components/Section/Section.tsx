import type { PropsWithChildren } from "react";
import { Fragment } from "react";

interface SectionProps {
  // INFO: this props used for mapping component manually using Children API
  // eslint-disable-next-line react/no-unused-prop-types
  name: string | number;
}

/**
 * Section Component
 *
 * @returns {JSX.Element}
 */
const Section = (props: PropsWithChildren<SectionProps>) => {
  const { children } = props;

  if (children) {
    return <Fragment>{children}</Fragment>;
  }

  return null;
};

export default Section;
