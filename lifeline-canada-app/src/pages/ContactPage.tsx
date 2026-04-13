import ContactSection from '../components/Contacts/ContactSection';
import CrisisNotice from '../components/Contacts/CrisisNotice';
import EmailSupport from '../components/Contacts/EmailSupport';
import TLCEmailContactForm from '../components/Contacts/TLCEmailContactForm';

import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function ContactPage() {
  const { mode } = useParams<{ mode: string }>();
  console.log('ContactPage mode:', mode); // Debugging log

  if (mode === 'contact-us') {
    return (
      <>
        <ContactSection />
        <TLCEmailContactForm
          title="TLC Email Contact Form"
          subtitle="Questions or Comments"
        />
        <CrisisNotice />
      </>
    );
  }

  if (mode === 'support') {
    return (
      <>
        <EmailSupport />
        <TLCEmailContactForm
          title="Crisis Email Support Form"
          subtitle="Please let us know how we can help"
        />
        <CrisisNotice />
      </>
    );
  }

  // fallback for invalid URLs
  return <NotFound />; // You can create a NotFound component or simply return null
}

export default ContactPage;
