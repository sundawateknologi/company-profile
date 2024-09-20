import Layout from "@/components/_shared/core/layout";
import TechnologyComponent from "@/components/technology/TechnologyComponent";

const TechnologyContainer = () => {
    return (
        <Layout withNavigation={true}>
            <TechnologyComponent />
        </Layout>
    );
};

export default TechnologyContainer;