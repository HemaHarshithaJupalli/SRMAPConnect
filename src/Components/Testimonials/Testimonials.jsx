import React, { useRef } from 'react'
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

export const Testimonials = () => {
 const slider=useRef();
 let tx=0;
    const handleForward=()=>{
if(tx>-50){
    tx-=25;
}
slider.current.style.transform=`translateX(${tx}%)`
    }

    const handleBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={handleForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={handleBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Karunya</h3>
                                <span>SRM AP</span>
                            </div>
                        </div>
                        <p>SRM AP provides an excellent platform for academic and personal growth. The faculty's dedication and world-class infrastructure make it a great place to learn and innovate-BTech Student.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Surya</h3>
                                <span>SRM AP</span>
                            </div>
                        </div>
                        <p>The interdisciplinary approach and international collaborations at SRM AP have given me global exposure and real-world skills- MBA Graduate.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Revathi</h3>
                                <span>SRM AP</span>
                            </div>
                        </div>
                        <p>The campus fosters innovation through its research-driven programs. I had the opportunity to publish papers and work on cutting-edge project- PhD Scholar.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Arun</h3>
                                <span>SRM AP</span>
                            </div>
                        </div>
                        <p>SRM AP's vibrant ecosystem, from labs to extracurriculars, shaped my overall development and prepared me for a successful career- Alumnus.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
