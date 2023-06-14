import Logo from '../assets/logo-test.svg'
export function Header () {
  return (
    <header className='logo'>
      <img src={Logo} alt='Logo for my firs project' />
      <section>
        <p className='title'>Crypto Dashboard</p>
        <p>Check your favorite coins</p>
      </section>
    </header>
  )
}
