import { useRouter } from 'next/router'

const ContactPage = () => {
    const router = useRouter();

    const redirectUser = () => {
      router.push('/');
    }


    return(
      <>
        <h1>Contact</h1>
        <button onClick={redirectUser}>
          Go to home
        </button>
      </>
    )
}
  
export default ContactPage;