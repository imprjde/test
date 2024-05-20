export const colorChanger = () => {
  let colors = [
    "red",
    "pink",
    "purple",
    "orange",
    "yellow",
    "teal",
    "sky",
    "fuchsia",
    "rose",
  ];

  let i = Math.floor(Math.random() * colors.length);

  let color = `bg-${colors[i]}-500`;
  return color;
};
