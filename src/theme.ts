import { Theme } from "@aws-amplify/ui-react";

export const summerTheme: Theme = {
  name: "summerTheme",
  tokens: {
    components: {
      heading: {
        lineHeight: { value: "1" },
      },
      card: {
        backgroundColor: {
          value: "{colors.gray.100}",
        },
        outlined: {
          borderRadius: {
            value: "{radii.xl}",
          },
          borderColor: { value: "{colors.border.tertiary}" },
        },
        padding: { value: "{space.xl}" },
      },
    },
    colors: {
      gray: {
        "100": { value: "hsl(36,18%,89%)" },
      },
      yellow: {
        "10": { value: "hsl(61, 14%, 41%)" },
        "100": { value: "hsl(61, 52%, 45%)" },
      },
      green: {
        "100": { value: "hsl(101, 46%, 66%)" },
      },
      red: {
        "100": { value: "hsl(26, 72%, 38%)" },
      },
      border: {
        tertiary: { value: "{colors.green.100}" },
      },
      font: {
        primary: { value: "{colors.yellow.100}" },
        secondary: { value: "{colors.yellow.10}" },
        tertiary: { value: "{colors.red.100}" },
      },
    },
  },
};
