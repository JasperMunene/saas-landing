import Image from 'next/image';
import Logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

const links = [
  { label: 'About', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Updates', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'Careers', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content=[''] before:top-2 before:bottom-0 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:blur">
          <Image src={Logo} alt="logo" height={40} width={40} className='relative' />
          </div>
          <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
            {links.map((link) => (
              <a href={link.href} key={link.label} className="text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center gap-6 mt-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkedin />
            <SocialPin />
            <SocialYoutube />
          </div>
          <p className='mt-6'>&copy; 2024 <a href="https://github.com/JasperMunene">Jasper</a>, Inc All rights reserved</p>
        
      </div>
    </footer>
  );
};
