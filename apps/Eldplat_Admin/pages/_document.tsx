import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { extractStyles } from "evergreen-ui";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);
      const page = await ctx.renderPage();
      const { css, hydrationScript } = extractStyles();
      return {
        ...page,
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="evergreen-css"
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {sheet.getStyleElement()}
          </>
        ),
        hydrationScript
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <div id="backdrop-root" />
          <div id="overlay-root" />
          <div id="notification-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
