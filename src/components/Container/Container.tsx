import type { PropsWithChildren } from "react";

import { cx } from "@/utils/dom";

import "./styles.scss";

interface ContainerProps {
  className?: string;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, className } = props;

  return (
    <section className={cx(["container", className])}>
      <div>{children}</div>
    </section>
  );
};

export default Container;
