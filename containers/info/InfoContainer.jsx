import Layout from "@/components/_shared/core/layout";
import InfoComponent from "@/components/info/InfoComponent";

const InfoContainer = () => {
    return (
        <Layout withNavigation={true}>
            <InfoComponent />
        </Layout>
    );
};

export default InfoContainer;