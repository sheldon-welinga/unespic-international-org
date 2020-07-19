import React, { Component } from 'react';
import video from "../videos/home-video.mp4";
import poster from "../images/video-cover.jpg";
import {AiOutlineDownCircle} from "react-icons/ai";

class HomeVideo extends Component{
    // console.log(slider);
    componentDidMount(){
        //Scrolling the window;
        window.addEventListener("DOMContentLoaded", ()=>{
            document.getElementById("outline").addEventListener("click", ()=>{
                if(window.innerWidth >=1100){
                    window.scrollBy({top: 700, behavior: "smooth"})
                }
                else if(window.innerWidth >=400 && window.innerWidth <1100){
                    window.scrollBy({top: 600, behavior: "smooth"})
                }
                else{
                    window.scrollBy({top: 580, behavior: "smooth"})
                }
            })
        })
    }

    render(){
        return (
            <div className="section">
                <div className="caption">
                    <h1>Unespic</h1>
                    <p>International Foundation</p>
                </div>
                <div className="video-container">
                    <video poster={poster} autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <AiOutlineDownCircle  id="outline"/>
            </div>
        )
    }   
}

export default HomeVideo;

