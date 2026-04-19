interface Props {
  svg?: string;
  circle?: string;
  r?: number;
  overflowVisible?: boolean;
}

export default function CircleSpinner({
  svg = "",
  circle = "",
  r = 50,
  overflowVisible = false,
}: Props) {
  const svgModifiers = svg
    .split(/\s+/)
    .filter(Boolean)
    .map((m) => `circle-svg--${m}`);
  const circleModifiers = circle
    .split(/\s+/)
    .filter(Boolean)
    .map((m) => `circle-svg__circle--${m}`);
  const svgClass = ["circle-svg", ...svgModifiers].join(" ");
  const circleClass = ["circle-svg__circle", ...circleModifiers].join(" ");

  return (
    <svg
      className={svgClass}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={overflowVisible ? { overflow: "visible" } : undefined}
    >
      <circle className={circleClass} cx="50" cy="50" r={r} />
    </svg>
  );
}
