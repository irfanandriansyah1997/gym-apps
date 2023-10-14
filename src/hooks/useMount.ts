import { useEffect, useRef } from "react";

import { castingError } from "@/utils/error";

// eslint-disable-next-line @typescript-eslint/ban-types
const useMount = (fn: Function) => {
  const alreadyRun = useRef(false);

  useEffect(() => {
    if (alreadyRun.current === true) return;
    try {
      if (typeof fn === "function") fn();
      else
        throw new TypeError(
          "Argument that passed to useMount is not a function"
        );
    } catch (error) {
      console.error(castingError(error));
    } finally {
      alreadyRun.current = true;
    }
  }, [fn]);
};

export default useMount;
