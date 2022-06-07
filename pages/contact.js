import { useRouter } from 'next/router';
import Redirect from '../components/redirect';

const ContactPage = () => {
    const router = useRouter();

    const redirectUser = () => {
      router.push('/');
    }


    return(
      <>
        <h1>Contact</h1>
        <Redirect/>
      </>
    )
}
  
export default ContactPage;