import { Layout, Background } from "../../components";
import { ContactDetails, ContactForm } from "../../components";

export const Contact = () => (
  <Layout>
    <Background />
    <div className="row">
      <ContactDetails />
    </div>
    <div className="row">
      <ContactForm />
    </div>
  </Layout>
);

