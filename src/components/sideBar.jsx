import IMG1 from '../assets/chat.png';
import IMG2 from '../assets/cart.png';
import IMG3 from '../assets/contact.png';
import IMG4 from '../assets/email.png';
import IMG5 from '../assets/logo.png';
import IMG6 from '../assets/price.png';
import IMG7 from '../assets/ticket.png';
import IMG8 from '../assets/tree.png';
import IMG9 from '../assets/calendar.png';
import IMG10 from '../assets/profile.jpeg';
import IMG11 from '../assets/logout.png';
import IMG12 from '../assets/icon3.png';
import IMG21 from '../assets/icon1.png';
import IMG22 from '../assets/icon2.png';
import IMG23 from '../assets/icon3.png';
import Links from '../components/links'

function Header(){
    <script src="https://kit.fontawesome.com/ab0a0ba58c.js" crossOrigin="anonymous"></script>
    return(
        <div style={{position: 'sticky', top: '0', fontFamily: 'satoshi'}} className="Header z-10 pt-0 min-w-[18.5vw] p-6 ml-6 w-fit bg-[#fcfcfe] flex flex-col justify-between">
            <div className="top">
                <div className="text mb-2 top-0 flex items-center max-md:gap-2 gap-4">
                    <img className='w-[40px] max-md:w-[30px]' src={IMG5} alt="" />
                    <p className='text-[30px] max-md:text-[20px] font-medium'>LOGO</p>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                    <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer hidden max-xs:block">
                            <img className='w-[30px] max-md:w-[25px]'  src={IMG21} alt="" />
                        </div>
                        <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer hidden max-xs:block">
                            <img className='w-[30px] max-md:w-[25px]' src={IMG22} alt="" />
                        </div>
                        <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer hidden max-xs:block">
                            <img className='w-[30px] max-md:w-[25px]' src={IMG23} alt="" />
                    </div>
                </div>

                <div className="card-box pr-2">
                    <p className='text-[23px] pl-4 mt-4 font-medium'>HOME</p>
                    <Links route={IMG3} desc='Contact'/>
                    <p className='text-[23px] pl-4 mt-4 font-medium'>APP</p>
                    <Links route={IMG1} desc='Chat'/>
                    <Links route={IMG9} desc='Calender'/>
                    <Links route={IMG4} desc='eMail'/>
                    <Links route={IMG7} desc='Tickets'/>
                    <p className='text-[23px] pl-4 mt-4 font-medium'>PAGE</p>
                    <Links route={IMG8} desc='Tree View'/>
                    <Links route={IMG6} desc='Pricing'/>
                </div>
            </div>
            <div className="bottom bg-[#f8f8f8] mt-10 mb-4 p-4 rounded-[15px]">
                <div className="person flex items-center gap-2">
                    <img className='w-[50px] rounded-full' src={IMG10} alt="" />
                    <div className="desc">
                        <p className='text-[#595be7] font-medium text-[17px]'>Nihal Jonnagadla</p>
                        <p className='text-[#88898f] text-[15px]'>Admin</p>
                    </div>
                </div>
                <div className="buttons flex jusify-between gap-12 mt-6">
                    <div className="flex hover:cursor-pointer gap-2">
                        <img className='w-[25px]' src={IMG12} alt="" />
                        <p>Setting</p>
                    </div>
                    <div className="flex hover:cursor-pointer gap-2">
                        <img className='w-[25px]' src={IMG11} alt="" />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;