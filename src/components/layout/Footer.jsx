import { Github } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Resources',
      links: [
        { label: 'Role-Based Prep', href: '/roles' },
        { label: 'Coding Challenges', href: '/challenges' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/contact-us' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'FAQ', href: '/faqs' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/chingu-voyages/V59-tier2-team-22',
          external: true,
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/chingu-voyages/V59-tier2-team-22',
      icon: Github,
    },
  ];

  return (
    <footer className='bg-gray-900 text-gray-300 pt-12 pb-8'>
      <div className='container mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Column */}
          <div className='col-span-1'>
            <h3 className='text-white text-lg font-bold mb-4'>
              Interview Prep
            </h3>
            <p className='text-sm text-gray-400 mb-6'>
              Master technical interviews with curated questions, challenges,
              and expert guidance.
            </p>
            {/* Social Icons */}
            <div className='flex gap-4'>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}
                    className='text-gray-400 hover:text-yellow-400 transition-colors duration-200'>
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-semibold mb-4'>{section.title}</h4>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className='text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200'>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 pt-8'>
          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-400 mb-4 md:mb-0'>
              © {currentYear} Interview Prep Team. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-200'>
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-200'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
