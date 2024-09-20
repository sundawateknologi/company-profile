import Layout from "@/components/_shared/core/layout";
import ServicesComponent from "@/components/services/ServicesComponent";

const ServicesContainer = () => {
    return (
        <Layout withNavigation={true}>
            <ServicesComponent />
        </Layout>
    );
};

export default ServicesContainer;