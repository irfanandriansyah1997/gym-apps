import { getColorVariable } from "@/utils/theme";
import type { COLOR_PALLETE } from "@/constant";

interface IconProps {
  color?: keyof typeof COLOR_PALLETE;
  fontSize?: string | number;
  icon: string;
}

const Icon = (props: IconProps) => {
  const { color = "text", fontSize, icon } = props;

  return (
    <span
      className={"material-symbols-outlined"}
      style={{
        color: `var(${getColorVariable(color)})`,
        fontSize,
      }}
    >
      {icon}
    </span>
  );
};

export default Icon;
