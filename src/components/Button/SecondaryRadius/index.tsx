import { ThemeProvider, Button, mergeTheme, defaultTheme } from "evergreen-ui";
import theme from "@styles/theme";

const ButtonSecondaryRadius = ({
  children,
  props
}: {
  children: React.ReactNode;
}) => {
  const themeEvergreen = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          secondaryRadius: {
            color: theme.color.N700,
            paddingX: 12,
            paddingY: 8,
            borderRadius: 32,
            backgroundColor: theme.color.N0,
            selectors: {
              _hover: {
                backgroundColor: theme.color.N0
              },
              _active: {
                //Pressed
                backgroundColor: theme.color.N100
              },
              _focus: {
                backgroundColor: theme.color.N0,
                border: `2px solid ${theme.color.B200}`
              },
              _disabled: {
                color: theme.color.N500,
                backgroundColor: theme.color.N0
              }
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider value={themeEvergreen}>
      <Button appearance="secondaryRadius" {...props}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonSecondaryRadius;
