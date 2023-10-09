import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <div className='text-center mb-6'>
            <img className='w-32 h-32 mx-auto mt-4 mb-2' src={logo} alt="" />
            <p className='text-xl'>Business Gathering Gurus</p>
            
        </div>
    );
};

export default Header;