
import ContactSection from '../components/Contacts/ContactSection';
import CrisisNotice from '../components/Contacts/CrisisNotice';
import EmailSupport from '../components/Contacts/EmailSupport';
import TLCEmailContactForm from '../components/Contacts/TLCEmailContactForm';

type ContactPageProps = {
  mode: "contact" | "email-support";
};

function ContactPage({ mode }: ContactPageProps){
  // Toggle rendering based on mode
  if (mode === "contact") {
    return (
      <>
        <ContactSection />
        <TLCEmailContactForm 
          title={`TLC Email` + "    " + `Contact Form`}
          subtitle="Questions or Comments" 
        />
         <CrisisNotice />
      </>
    );
  }

  if (mode === "email-support") {
    return (
      <>
      <EmailSupport  />
       <TLCEmailContactForm 
          title="Crisis Email Support Form" 
        subtitle="Please let us know how we can help" 
      />
       <CrisisNotice />
      </>
    );
  }



}

export default ContactPage;