import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import twitterLogo from '../assets/twitter.svg'
import Logo from '../assets/logo-test.svg'

export function Footer () {
  return (
    <footer className='footer'>

      <section className='logo'>
        <img src={Logo} alt='Logo for my firs project' />
        <section>
          <p className='title'>Crypto Dashboard</p>
          <p>Check your favorite coins</p>
        </section>
      </section>

      <p className='copyrights'>© 2023 - All rights reserved</p>

      <section className='rss'>
        <section className='rss-icons'>
          <a href='#'><img src={githubLogo} alt='Github Logo RSS' /></a>
          <a href='#'><img src={linkedinLogo} alt='Linkedin Logo RSS' /></a>
          <a href='#'><img src={twitterLogo} alt='Twitter Logo RSS' /></a>
        </section>
        <a className='rss-email' href='mailto:gianbarboza11@gmail.com'>Gianbarboza11@gmail.com</a>
      </section>
    </footer>
  )
}
