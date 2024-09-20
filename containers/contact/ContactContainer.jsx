import Layout from "@/components/_shared/core/layout";
import ContactComponent from "@/components/contact/ContactComponent";

const ContactContainer = () => {
    return (
        <Layout withNavigation={true}>
            <ContactComponent />
        </Layout>
    );
};

export default ContactContainer;