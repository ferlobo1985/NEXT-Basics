import Link from 'next/link'

const HomePage = () => {
  return(
    <>
      <h1>Honey I am home</h1>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/111">User 111</Link>
        </li>
        <li>
          <Link href="/wheels/4/red/round">Wheel</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage;