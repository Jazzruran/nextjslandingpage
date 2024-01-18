import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <header>
      <nav className="text-xs flex justify-between flex-row text-center no-underline text-blue-500 h-16 items-center">
        <div className='flex-grow w-1/4 flex flex-row gap-16 justify-center'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className='flex justify-center'>
          <Image src='/logo.svg' alt='Logo' width={79} height={38} />
        </div>
        <div className='flex-grow w-1/4'>
          <button className='text-white bg-blue-900 w-36 h-7'>Buy Now</button>
        </div>
      </nav>
    </header>
  )
}
