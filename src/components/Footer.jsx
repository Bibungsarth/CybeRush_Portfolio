/**
 * @copyright 2024 cybeRush
 * @license Apache-2.0
 */


// Components
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/bibungsarth'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bibungsarth'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/CyberRush44'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10 reveal-up"> {/*(reveal-up) temporary*/}
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]"> {/*(reveal-up) permanent*/}
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:cyber.rush44@gmail.com"
              label="Start project"
              icon="chevron_right"
            // classes="reveal-up" {permanent}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.webp" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">CybeRush</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;