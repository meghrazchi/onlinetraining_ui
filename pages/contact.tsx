import type { NextPage } from 'next'
import ContactPromo from "../components/ContactPromo";
import Contact from "../components/Contact";
import Map from "../components/Map";

const ContactPage: NextPage = () => {
  return (
    <>
      <ContactPromo />
      <Contact />
      <Map />
    </>
  )
}

export default ContactPage
