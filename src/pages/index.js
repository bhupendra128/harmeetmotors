import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Services from "sections/services";
import OurTeam from "sections/our-team";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Harmeet Group"
          description="Harmeet Motors deals in sales of motors"
        />
        <OurTeam />
        <Services />
      </Layout>
    </ThemeProvider>
  );
}
