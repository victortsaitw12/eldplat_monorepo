import { ThemeProvider, Button, mergeTheme, defaultTheme } from "evergreen-ui";
import theme from "@styles/theme";
interface ComponentProps {}

const ButtonPrimaryRadius = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const themeEvergreen = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          primaryRadius: {
            color: "white",
            paddingX: 12,
            paddingY: 8,
            borderRadius: 32,
            backgroundColor: theme.color.B400,
            selectors: {
              _hover: {
                backgroundColor: theme.color.B500
              },
              _active: {
                //Pressed
                backgroundColor: theme.color.B600
              },
              _focus: {
                backgroundColor: theme.color.B500,
                border: `2px solid ${theme.color.B200}`
              },
              _disabled: {
                backgroundColor: theme.color.B200
              }
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider value={themeEvergreen}>
      <Button appearance="primaryRadius" {...props}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonPrimaryRadius;
