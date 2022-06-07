import { useRouter } from 'next/router'

const UsersByIdPage = () => {
    const router = useRouter();
    console.log(router.query) 

    return(
      <>
        <h1>Users By Id Page</h1>
      </>
    )
}
  
export default UsersByIdPage;