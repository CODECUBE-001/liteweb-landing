import logo from '../Assets/logo.png';

const Header = () => {
  return (
    <header className='p-4'>
        <div className="logo">
          <img src={logo} alt="" className="w-[60px] mx-auto" />
        </div>
        
        {/* <div className="hamburger"></div> */}
    </header>
  )
}

export default Header