import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

const Home = () => {
  return (
    <Layout>
      <Page title="Home">
        <section className="main-content">
          <Sidebar />
          <ProductList />
        </section>
      </Page>
    </Layout>
  );
};
export default Home;
