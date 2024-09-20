import Layout from "@/components/_shared/core/layout";
import HomeComponent from "@/components/home/HomeComponent";

const HomeContainer = () => {
    return (
        <Layout withNavigation={false}>
            <HomeComponent />
        </Layout>
    );
};

export default HomeContainer;