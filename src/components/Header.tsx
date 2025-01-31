// 'use client'
import Link from 'next/link'


const Header = () => {

  return (
    <header className="sticky top-0 z-50">
        <nav className='flex overflow-hidden'>
            {/* logo */}
            <div className="text-4xl font-bold ml-4 mt-4 text-green-500 2xsm:invisible md:visible font-dancing_script">Vishal</div>

            {/* for navbar */}
            <div className='flex-grow flex xsm:justify-items-start xsm:-ml-5 md:justify-center font-sans'>
            <div className='flex 2xsm:gap-3 2xsm:-ml-14 xsm:gap-8 sm:gap-10 md:gap-10 md:mx-4 mt-6'>
                <Link className='wavy-navbar' href='#home-section'>Home</Link>
                <Link className='wavy-navbar' href='#about-section'>About</Link>
                <Link className='wavy-navbar' href='#skills-section'>Skills</Link>
                <Link className='wavy-navbar' href='#experiance-section'>Experiance</Link>
                <Link className='wavy-navbar' href='#projects-section'>Projects</Link>
                <Link className='wavy-navbar' href='#contact-section'>Contact</Link>
            </div>
            </div>

            {/* Hire me */}
        <div className='ml-auto mx-16 mt-5 mb-4 2xsm:invisible sm:visible xmd:visible font-sans'>
          <Link href='#contact-section'>
            <div className='relative inline-block'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl'></div>
              <button className='relative px-5 py-1 bg-[#0b1d2a] text-green-500 border border-transparent rounded-3xl hover:text-white'>
                Hire me
              </button>
            </div>
          </Link>
        </div>

        </nav>
    </header>
  )
}

export default Header
