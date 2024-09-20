import Layout from "@/components/_shared/core/layout";
import WorkComponent from "@/components/work/WorkComponent";

const WorkContainer = () => {
    return (
        <Layout withNavigation={true}>
            <WorkComponent />
        </Layout>
    );
};

export default WorkContainer;