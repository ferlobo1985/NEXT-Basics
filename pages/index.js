import Link from 'next/link';
import Image from 'next/image';

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

      <Image
        src="/images/image_one.jpg"
        alt="Picture about a horse"
        layout="responsive"
        width={6016}
        height={4016}
      />

    </>
  )
}

export default HomePage;