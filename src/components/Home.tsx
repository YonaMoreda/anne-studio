import '../stylesheets/Home.css'
import ProfilePicture from  '../../public/generic_pp.png'

function Home() {

  return (
    <>
      <div className='anne-header'>Anne Architectural Studio</div>
      <div className='anne-intro'>
          <div className='anne-profile-pic-containrer'>
              <img className="anne-profile-pic" src={ProfilePicture} alt={"profile_picture"}/>
          </div>
        <div className='anne-whoami'>Hi, I am Anne. I am an architect, designer, planner. Welcome to my architecture portfolio,
            where I showcase a selection of work that reflects my passion for innovative, functional, and sustainable design.</div>
      </div>
      <div className='vert-navbar'>
        <div className='navbar-link'>Explore</div>
          <div className='navbar-link'>About</div>
          <div className='navbar-link'>Contact</div>
          <div className='navbar-link' style={{border: '.1px solid whitesmoke', borderRadius: '10px', width: "150%", textAlign: 'center', marginTop: '10px'}}>Book now</div>
      </div>
    </>
  )
}

export default Home
