import { ThemeProvider, Button, mergeTheme, defaultTheme } from "evergreen-ui";
import theme from "@styles/theme";

const ButtonPrimaryRadius = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const themeEvergreen = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          primary: {
            color: "white",
            borderRadius: 32,
            background: theme.color.B400,
            selectors: {
              _hover: {
                background: theme.color.B500
              },
              _active: {
                //Pressed
                background: theme.color.B600
              },
              _focus: {
                background: theme.color.B500,
                border: `2px solid ${theme.color.B200}`
              },
              _disabled: {
                background: theme.color.B200
              }
            }
          },
          secondary: {
            background: theme.color.N0,
            selectors: {
              _disabled: {
                color: theme.color.N500
              }
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider value={themeEvergreen}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
};

export default ButtonPrimaryRadius;
