import Redirect from '../components/redirect';
import Head from 'next/head';

const ContactPage = () => {
    const title = 'Contact us'

    return(
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Contact us, and we will never reply back"/>
          <meta property="og:title" content="My page title" key="title"/>
        </Head>
        <h1>Contact</h1>
        <Redirect/>
      </>
    )
}
  
export default ContactPage;