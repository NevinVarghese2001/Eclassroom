import React from 'react'
import './Dashboard.css';
import search from './assets/search.png';
import msg from './assets/message-circle.png';
import bell from './assets/bell.png';
import menu from './assets/menu.png';
import home from './assets/home.png';
import libr from './assets/file-text.png';
import cal from './assets/calendar.png';
import videocam from './assets/Videocam.png';
import assignment from './assets/Assignment.png';
import tik from './assets/tick.png';
import done from './assets/Done.png';
import pending from './assets/Pending actions.png';
import chevron from './assets/chevron.png'
import week from './assets/Icon.png';
import lesson from './assets/Icon (1).png';
import vector from './assets/Vector.png';
import tik2 from './assets/Group 1000002309.png';
import untik from './assets/Group 1000002311.png';
import input from './assets/input-trailing-icon.png';
import plus from './assets/Plus.png';
import tiksqr from './assets/Tick Square.png';
import danger from './assets/Danger.png';


function Dashboard() {
  return (
    <div className=''>
      <div className='header'>
        <div className='topright'>
          <a className='hd-op' href="">Community</a>
          <a className='hd-op' href="">Courses</a>
          <a className='hd-op' href="">My Classes</a>
          <a className='hd-op' href=""><img src={search} alt="" /></a>
          <a className='hd-op' href=""><img src={msg} alt="" /></a>
          <a className='hd-op' href=""><img src={bell} alt="" /></a>
          <div className='mtop'>
            <a className='hd-op1' href=""><img src={menu} alt="" className='menuicon' /></a>
            <div className='pp'>
            
            </div>
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
              <a href="" className='ma'><div className='m1'><div><img src={home} alt="" className='mimg' /></div><div><h5 className='mlist' id='m-home'>Home</h5></div></div></a>
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
             
            <div className='a1-a'>
              <div className='ongoing'>
                 <img src={pending} className='pending' alt="" />
                 <img src={done} className='done' alt="" />
              </div>
            </div>
            <div className='a1-b'> 
               <div className='a1-b1'>
                <p className='ongoing-4'>4</p>
               </div>
               <div className='a1-b1'>
                <p>Ongoing Courses</p>
               </div>
            </div>
          </div>
           
          
          <div className='a1'>
          <div className='a1-a'>
              <div className='assignment'>
                 
                 <img src={tik} className='tik' alt="" />
              </div>
            </div>
            <div className='a1-b'> 
               <div className='a1-b1'>
                <p className='ongoing-4'>4</p>
               </div>
               <div className='a1-b1'>
                <p>Assignments</p>
               </div>
            </div>
          </div>

          <div className='a1'>
            <div className='a1-a'>
              <div className='watch'>
                 
                 <img src={videocam} className='tik' alt="" />
              </div>
            </div>
            <div className='a1-b'> 
               <div className='a1-b1'>
                <p className='ongoing-4'>40h</p>
               </div>
               <div className='a1-b1'>
                <p>Watch Time</p>
               </div>
            </div>
          </div>
          <div className='a1'>
          <div className='a1-a'>
              <div className='certi'>
                 
                 <img src={assignment} className='tik' alt="" />
              </div>
            </div>
            <div className='a1-b'> 
               <div className='a1-b1'>
                <p className='ongoing-4'>4</p>
               </div>
               <div className='a1-b1'>
                <p>Certificates</p>
               </div>
            </div>
          </div>
        </div>

        <div className='outer'>
          <div className='l-out'>
             <div className='l-out1'>
               <div className='ongoing-courses'>
                    <div className='on-head'>
                      <p>Ongoing Courses</p>
                    </div>
                    <div className='on-icon'>
                      <img src={chevron} alt="" className='chevron1' />
                      <img src={chevron} alt="" />
                    </div>
               </div>
               <div className='on-card'>
                <div className='on-card-img'>


                </div>
                <div className='on-card-details'>
                  <div className='card-lay-1'>
                      <h1>900 Hour Teacher Training</h1>
                  </div>
                  <div className='card-lay-2'>
                    <div className='week'>
                           
                             <div><img src={week} alt="" /></div>
                             <div ><p className='week-p'>12 Week</p></div>
                           
                    </div>
                    <div className='lesson'>
                    <div><img src={lesson} alt="" /></div>
                             <div ><p className='lesson-p'>35 Lessons</p></div>
 
                    </div>
                    <div className='hybrid'>
                      <div className='hbd'>
                          <p className='hbdp'>HYBRID</p>
                      </div>

                    </div>

                  </div>
                  <div className='card-lay-3'>
                    <div>
                      <h3 className='lay-3-h'>25% Completed</h3>
                    </div>
                    <div className='graph'>
                      <div className='graph-red'></div>
                      <div className='graph-grey'>

                      </div>
                    </div>

                  </div>
                  <div className='card-lay-4'>
                    <div className='lay-4-line'></div>

                  </div>
                  <div className='card-lay-5'>
                    <div className='next-class'>
                      <p className='lay-5-p'>Next Class due on 23 June 2023</p>
                    </div>
                    <div className='con-btn'>
                      <p className='lay-5-p'>Continue</p>
                    </div>

                  </div>

                </div>
               </div>

             </div>
             <div className='l-out2'>
              <div className='l-assignments'>
                <div className='l-heading'>
                  <div className='l-heading-1'>
                    <h2 className='l-heading-1-h'>Assignments</h2>
                  </div>
                  <div className='l-heading-2'>
                    <p className='l-heading-2-p'>(12)</p>
                  </div>
                </div>
                <div className='ass-lay2'>
                  <div className='lay-2-img'>
                    <img src={vector} alt="" />
                  </div>
                  <div className='ass-lay-2'>
                    <p className='ass-lay-2p' >2/5 completed</p>
                  </div>

                </div>
                <div className='ass-lay3'>
                     <div className='ass-lay3-img'>
                      <img src={tik2} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Lesson Plan 1</p>
                      <p className='ass-dates'>01 Sep 2022</p>
                     </div>
                     <div className='ass-lay-3-3'>
                      <p className='ass-pass'>PASS</p>
                      <p className='ass-grade'>Grade</p>
                     </div>
                </div>
                <div className='ass-lay4'>
                   <div className='ass-lay3-img'>
                      <img src={tik2} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Philosophy</p>
                      <p className='ass-lay4-dates'>01 Sep 2022</p>
                     </div>
                     <div className='ass-lay-4-3'>
                      <p className='ass-pass'>90/100</p>
                      <p className='ass-grade'>Grade</p>
                     </div>
                </div>
                <div className='ass-lay5'>
                  <div className='ass-lay3-img'>
                      <img src={untik} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Yoga Mudra</p>
                      <p className='ass-lay4-dates'>03 Sep 2022</p>
                     </div>
                     <div className='ass-lay-4-3'>
                      <p className='ass-pass'>0/100</p>
                      <p className='ass-grade'>To Do</p>
                     </div>
                </div>
                <div className='ass-lay5'>
                  <div className='ass-lay3-img'>
                      <img src={untik} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Mock Test</p>
                      <p className='ass-lay6-dates'>06 Sep 2022</p>
                     </div>
                     <div className='ass-lay-6-3'>
                      <p className='ass-pass'>0/100</p>
                      <p className='ass-grade'>To Do</p>
                     </div>
                </div>

              </div>
              <div className='l-attendance'>
               <div className='l-heading'>
                  <div className='l-heading-1'>
                    <h2 className='l-heading-1-h'>Attendance</h2>
                  </div>
                  <div className='l-att'>
                    <div><p className='l-att-p'>Filter</p></div>
                    <div><img src={input} alt="" className='l-att-img'/></div>
                  </div>
                </div>
                <div className='att-lay-2'>
                  <div className='ass-lay5'>
                  <div className='ass-lay3-img'>
                      <img src={plus} alt="" />
                     </div>
                     <div>
                      <p className='att-names'>Total Classes </p>
                      <p className='att-lay2-dates'>till 20 June 2023</p>
                     </div>
                     <div className='ass-lay-6-3'>
                      <p className='att-lay3-3'>20</p>
                     
                     </div>
                </div>
                </div>
                <div className='att-lay-3'>
                  <div className='ass-lay3-img'>
                      <img src={tiksqr} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Classes Attended</p>
                      <p className='att-lay3-dates'>till 20 June 2023</p>
                     </div>
                     <div className='att-lay3'>
                      <p className='att-lay3-3a'>10</p>
                      <p className='att-per1'>81%</p>
                     </div>
                </div>
                <div className='att-lay-4'>
                      <div className='ass-lay3-img'>
                      <img src={danger} alt="" />
                     </div>
                     <div>
                      <p className='ass-names'>Classes Missed</p>
                      <p className='att-lay4-dates'>till 20 June 2023</p>
                     </div>
                     <div className='att-lay4'>
                      <p className='att-lay4-3'>11</p>
                      <p className='att-per'>2%</p>
                     </div>
                </div>
              </div>

             </div>
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
                <div className='date' id='date4'><h5 className='dhh'>4</h5><p className='dhp'>tue</p></div>
                <div className='date'><h5 className='dhh'>5</h5><p className='dhp'>wed</p></div>
                <div className='date'><h5 className='dhh'>6</h5><p className='dhp'>thu</p></div>
                <div className='date'><h5 className='dhh'>7</h5><p className='dhp'>fri</p></div>
                <div className='date'><h5 className='dhh'>8</h5><p className='dhp'>sat</p></div>
              </div>

            </div>
            <div className='cal-2'>
            <div className='live-section'>
              <div className='ls-btn'>
                 <p>LIVE SESSION</p>

              </div>
              <div className='ls-head'>
                   <p className='ls-head-p'>Swadhyay with Dr. Atul</p>
              </div>
              <div className='ls-time'>
                  <p className='ls-head-p'>10:00am - 12:00pm</p>
              </div>
            </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>09:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>10:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>11:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>12:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>13:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>14:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>15:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>16:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>17:00</div>
                  <div className='cal-2-time-line'></div>
                 </div>
                 <div className='cal-2-time'>
                  <div className='cal-2-time-p'>18:00</div>
                  <div className='cal-2-time-line'></div>
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