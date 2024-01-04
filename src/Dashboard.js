import React from 'react'
import './Dashboard.css';
import search from './assets/search.png';
import msg from './assets/message-circle.png';
import bell from './assets/bell.png';
import menu from './assets/menu.png';
import home from './assets/home.png';
import libr from './assets/file-text.png';
import cal from './assets/calendar.png';



function Dashboard() {
  return (
    <div className=''>
      <div className='header'>
        <div className='topright'>
          <a href="">Community</a>
          <a href="">Courses</a>
          <a href="">My Classes</a>
          <a href=""><img src={search} alt="" /></a>
          <a href=""><img src={msg} alt="" /></a>
          <a href=""><img src={bell} alt="" /></a>
          <div className='mtop'>
            <a href=""><img src={menu} alt="" className='menuicon' /></a>
            <div className='pp'></div>
            <p className='hpp'>pp</p>
          </div>
        </div>
      </div>
      <div className='contents'>
        <div className='sidebar'>
          <div className='s1'>
            <img src="" alt="" className='uimg' />
            <p className='uname'>Kalyani Khona</p>
            <a href="" className='vpro'>view profile</a>
          </div>

          <div className='menu'>
            <div >
              <a href="" className='ma'><div className='m1'><div><img src={home} alt="" className='mimg' /></div><div><h5 className='mlist'>Home</h5></div></div></a>
              <a href="" className='ma'><div className='m1'><div><img src={msg} alt="" className='mimg' /></div><div><h5 className='mlist'>Messages</h5></div></div></a>
              <a href="" className='ma'><div className='m1'><div><img src={libr} alt="" className='mimg' /></div><div><h5 className='mlist'>E-Library</h5></div></div></a>
              <a href="" className='ma'><div className='m1'><div><img src={cal} alt="" className='mimg' /></div><div><h5 className='mlist'>Calander</h5></div></div></a>
              <a href="" className='ma'><div className='m1'><div><img src={cal} alt="" className='mimg' /></div><div><h5 className='mlist'>Settings</h5></div></div></a>
              <a href="" className='ma'><div className='m1'><div><img src={cal} alt="" className='mimg' /></div><div><h5 className='mlist'>Support</h5></div></div></a>

              
              
              
              
              
              

            </div>


          </div>
        </div>

        <div className='hm'>
          <h1 className='home'>Home</h1>
        </div>
        <div className='options'>

          <div className='a1'>
            <p>ongoing courses</p>
          </div>
          <div className='a1'>
            <p>ongoing courses</p>
          </div>
          <div className='a1'>
            <p>ongoing courses</p>
          </div>
          <div className='a1'>
            <p>ongoing courses</p>
          </div>
        </div>

        <div className='outer'>
          <div className='l-out'>

          </div>
          <div className='r-out'>
            <div className='cal'>
              <div className='m-y-out'>
                <h3 className='m-y'>September 2023</h3>

              </div>

              <div className='dout'>
                <div className='date'>
                  <h5 className='dhh'>3</h5>
                  <p className='dhp'>mon</p>
                </div>
                <div className='date'><h5 className='dhh'>4</h5><p className='dhp'>tue</p></div>
                <div className='date'><h5 className='dhh'>5</h5><p className='dhp'>wed</p></div>
                <div className='date'><h5 className='dhh'>6</h5><p className='dhp'>thu</p></div>
                <div className='date'><h5 className='dhh'>7</h5><p className='dhp'>fri</p></div>
                <div className='date'><h5 className='dhh'>8</h5><p className='dhp'>sat</p></div>
              </div>

            </div>
            <div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard