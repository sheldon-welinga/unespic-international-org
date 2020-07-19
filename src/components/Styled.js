import styled from "styled-components";
import defaultImg from "../images/about.jpg";
import donateImg from "../images/donate-background.jpg";
import loginImg from "../images/donate-login-background.jpg";
import contactImg from "../images/contact-header-image.jpg";

const AppStyles = styled.div`
${'' /* Global */}
    .App{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      min-height: 100vh;
    }

    .unespic-logo{
        width: 100%;
        height: auto;
    }

    .justify-center{
        justify-content: center;
    }

    .orange{
        color: #fbb02d;
    }

    .what-we-do{
        margin-top: 10px;
    }

    ${'' /* Video container */}
    .section {
        clear: both;
        overflow: hidden;
        height: 80vh;
        position: relative;
        width: 100vw !important;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-sizing: border-box;
    }

    .section .caption {
        text-align: center;
        font-size: 2rem;
        font-weight: 100;
        color:#fff;
        font-family: sans-serif;
        text-transform: uppercase;
        padding: 20px;
        margin: 15px;
        z-index:1;
        background-blend-mode: lighten;
        width: 100%;
        transition: font-size .4s ease-in-out; 
    }

    .section .caption h1{
        font-size: 5rem;
        font-weight: bold;
    }

    .section #outline{
        z-index: 1;
        position: absolute;
        bottom: 1.2rem;
        font-size: 60px;
        color: #fff;
        box-sizing: border-box;
    }

    .video-container video {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100% !important;
        min-height: 100% !important;
    }

   @media screen and (max-width: 500px){
        .section .caption h1{
            font-size: 2.5rem;
            transition: font-size .4s ease-in-out;
        }

        .section .caption p{
            font-size: 1.5rem;
        }

        .section #outline{
            font-size: 40px;
        }

        .heading, .faq-heading{
            font-size: 1.5rem;
        }
    } 

    @media screen and (max-width: 765px){
        .donate-section-image{
            min-height: 40vh;
        }
    }

    @media screen and (max-width: 285px){
        .section .caption h1{
            font-size: 1.5rem;
        }

        .section .caption p{
            font-size:1rem;
        }
    }
${'' /* 
    @media (min-aspect-ratio: 16/9){
        .video-container video{
            width: 100%;
            height: auto;
        }
    }

    @media (max-aspect-ratio: 16/9){
        .video-container video{
            width: auto;
            height: 100%;
        }
    }

    @media (max-width: 767px){
        .video-container video{
            display: none;
        }

        .section{
            background: url(${poster});
            background-size: cover;
        }
    } */}

    ${'' /* End of video container */}

    .all-pages-min-height{  /*To ensure all sections with the class have a minimum height even with n content*/
        min-height: 73vh;
        margin-bottom: 40px;
    }

    .center{
    align-items: center;
    text-align: center;
    }

    .img-responsive{
    display: inline-block;
    width: 100%;
    min-height: 50vh;
    } 

    .img-others-responsive{
        height: 100%;
        width: 100%;
    }

    .row{
        padding: 2px 20px;
    }

    form{
            margin: 10px 0 30px 0;
            border: 1px solid #fb6107;;
            padding: 20px;
            border-radius: 20px;
        }
    ${'' /* End of Global */}

    ${'' /* Top Header */}
    .header{
        background: #5c8001;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px 0 20px;
        font-size: 1rem;
    }

    .header .contact{
        color: #fff;
    }

    .header .loginandsignup a{
        text-decoration: none;
        color: #fff;
    }

    .header .loginandsignup .login{
        margin-right: 20px;
    }
    @media screen and (max-width: 370px){
        .header{
            flex-direction: column;
            align-items: center;
            padding: 0 ;
        }
        .header .contact{
            margin-bottom: 0;
        }
    }
    ${'' /* End of Top Header */}

    ${'' /* Navigation bar */}
    ${'' /* Start of Media Query */}
    @media screen and (min-width: 990px){
        .unespic-nav-list a{
        transition: all .5s ease-in-out; 
    }

    .unespic-nav-list >div{
        display: none;
        position: absolute;
        background-color: #fff;
        min-width: 150px;
        z-index: 100; 
        transition: all .5s ease-in-out;
        padding-bottom: 10px;
    }

    .unespic-nav-list:hover div{
        display: block;
    }

    .unespic-nav-list >div >div{
        transition: all .5s ease-in-out;
        padding: 3px 10px;
        margin: -2px;
    }
    .unespic-nav-list >div >div:hover{
        transform: translateX(15px);
    }      
}
${'' /* End of Media Query */}

${'' /* Navigation page */}
    .navbar{
            background: #fff;
            box-shadow:0 4px 4px -4px black;
            padding: 10px 10px;
            margin-bottom: 5px;
    }
    .navbar-brand, .navbar-nav, .nav-link, .nav-item a{
        color: #5c8001;;
        text-decoration: none;
    }

    .navbar-brand img{
        width:70%;
    }
    .nav-item{
        margin: 5px;
    }
    .nav-item a:hover{
        background:#7cb518;
        color:#fff;
    }

    .nav-item a{
        padding:6px 20px;
        width: 100%;
        border-radius: 5px;
        display: inline-block;
        transition: all .3s ease-in-out;
    }

    .nav-item .nav-item a{
        padding: 5px 10px;
    }

    .navbar-toggler:focus{
        outline:none;
    }

    .navbar-toggler{
        border:none;
        color:#fff;
        background-color:#7cb518;
    }
    ${'' /* End of navigation */}

    ${'' /* Footer */}
     .footer{
        bottom: 0%;
        width: 100%;
        color: #fff;
        padding: 0.2rem 0.5rem;        
     }

     .footer .footer-bottom{
        font-size: 1rem;   
    }
    .footer h3{
        font-size: 1.5rem;
    }

    .footer .contact-details span, 
    .contact .contact-details span{
        margin-left: 5px;
    }

    .footer .contact-btn{
        background-color:#fbb02d;
        border: 1px solid #fbb02d;
        padding: 2px 15px;
        border-radius: 20px;
        transition: all .4s ease-in-out;
    }

    .footer .contact-btn a{
        color: #fff;
        text-decoration: none;
    }

    .footer .contact-btn:hover{
        background-color:#fb6107;
    }

    .impact a{
        color: #fff;
    }


    @media screen and (max-width: 360px){
        .navbar-brand img{
            width: 60%;
        }
        .footer .row .col .footer-bottom{
            font-size: 12px;
        }

        .footer h3{
            font-size: 1.2rem;
        }
        
        .sc-AxirZ h3{
            font-size: 1.2rem;
        }
        .read-more .read-link{
            font-size: .8rem;
            margin: 0;
        }

        .volunteer-form .volunteer-title{
            font-size: 1.2rem;
        }

        .volunteer-form input::placeholder,
        .volunteer-form label,
        .volunteer-form select{
            font-size: .9rem;
        }

        .volunteer-form select option{
            font-size: .7rem;
        }

        .footer .contact-details span, 
        .contact .contact-details span{
           font-size: .8rem;
        }
    }
    ${'' /* End of Footer */}

    ${'' /* Error page */}
    .error-page .error >p{
        font-size: 1.3rem;
    }

    .error-page{
        height: 500px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-page .error{
        width: 25rem;
        min-height: 50%;
        height: 20rem;
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    ${'' /* End of Error page */}

    ${'' /* Causes */}
    .causes-images{
        width:100%;
        display: inline-block;
    }

    .causes{
        padding: 10px 2px;
        justify-content: center;
        box-sizing: border-box;
    }

    .causes #line{
        width: 25%;
        height: 3px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .causes-image-container .donate-now, 
    .donateBtn{
        position: absolute;
        z-index: 5;
        left: 5%;
        bottom: 10%;
        font-size: .75rem;
        text-transform: uppercase;
        background-color: #fbb02d;
        border-color:#fbb02d;
        color: #fff;
    }

    .causes .sub-title{
        font-size: 1.2rem;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .single-cause{
        margin: 20px 0;
        padding: 5px;
    }
    .causes-container, .news-container{
        box-shadow:0 4px 8px -4px black;
        height: 100%;
        padding: 10px;
    }
    .causes-image-container, .news-image-container{
        position: relative;
        padding-bottom: .8rem;
    }
   ${'' /* End of Causes */}
 
    ${'' /* Read and Donate Buttons */}
    .read-more{
        margin: 10px 0;
    }
    .volunteer-form .btn-outline-primary:hover{
        background-color : #fbb02d;
        color: #fff
    }
    .contact .btn-outline-primary:hover{
        background-color : #fbb02d;
        color: #fff
    }
    .contact .btn-outline-primary{
        border : 1px solid #fbb02d;
        color : #fbb02d;
    }
    .volunteer-form .btn-outline-primary{
        border : 1px solid #fbb02d;
        color: #fbb02d;
    }
    .read-more, 
    .donate-now{
        background-color: transparent;
        border:1px solid #5c8001;
        outline: none;
        color:#5c8001;
        padding: 5px 10px;
        border-radius: 20px;
        transition: all .4s ease-in-out;
    }

    .read-more:hover{
        background-color: #5c8001;
        transition: all .4s ease-in-out;
    }
    .read-more:hover .read-link{
        color: #fff;
    }
    .slider-read{
        background-color: #5c8001;
        color: #fff;
    }
    .slider-read:hover{
        background-color: transparent;
        color:#5c8001;
    }

    .read-link{
        color: #5c8001;
        text-decoration: none;
    }

    .donateBtn:hover{
        background-color: #fbb02d;
    }
    .donate-now:hover{
        background-color: #fb6107;
    }

    .donate-now >a{
        color: #fff;
    }

    .donateBtn{
        position: static;
        margin-bottom: 30px;
        border-color:#fb6107;
        background-color:#fbb02d;
    }
    .donateBtn a{
        color:#fff;
        transition: all .4s ease-in-out;
    }
    .donateBtn:hover, 
    .donate:hover >a{
        background-color: transparent;
    }
    .donateBtn:hover >a{
        color:#fb6107 ;
        text-decoration: none;  
    }
    .donate{
        background-color:  #fbb02d;
        padding: 0 20px;
        border-radius: 20px;
        transition: all .4s ease-in-out;
    }

    .donate >a{
        background-color: transparent;
        color:#fff;
    }
    .donate:hover{
        background-color: #fb6107;
    }

    .btn-outline-warning{
        color:#fbb02d;
        border-color: #fbb02d;
        transition: all .4s ease-in-out;
    }
    .btn-outline-warning:hover{
        background-color:#fbb02d;
        color:#fff;
    }

    ${'' /* End of Read Buttons */}

    ${'' /* About */}
    .about, .heading{
        margin: 0 20px;
    }

    .styled-about-title{
        color: #fff;
    }
    ${'' /* End of about */}

    ${'' /* Features */}
        .features-title, .partners .partners-title{
            color: #fb6107;
            margin-top: 16px;
        }

        .partners .partners-title{
            text-align: center;
        }
        .features{
            list-style: none;
            margin: 30px 0;
            padding: 0;
        }
        .features .features-list{
            margin: 10px 0;
            padding: 3px 0;
            transition: all .4s ease-in-out;
        }
        .features .features-list:hover{
            transform: translateX(10px);
        }
        .features .features-list >a:hover{
            text-decoration: none;   
        }
    ${'' /* End of Features */}

    ${'' /* Partners */}
    .partners-img-container{
        margin-bottom: 1rem;
        overflow: hidden;
    }

    .partners-img-container .partners-images{
        transform: scale(.9);
        opacity: .7;
        transition: all .4s ease-in-out;
    }

    .partners-img-container .partners-images:hover{       
        transform: scale(1.2);  
    }
    ${'' /* End of Partners */}

    ${'' /* Social Links */}
    .social >a{
        color:#f3de2c;
    }

    .social >a >span{
        margin-left: 10px;
        font-size: 1rem;
    }

    .social svg{
        font-size: 1.5rem;
        transition:all .4s ease-in-out;
        background-color: #fff;
        display: inline-block;
        padding: 0;
    }
    .social .social-facebook{
        color: #4968ad;
        border-radius: 50%;  
    }
    .social .social-linkedin{
        color: #49a1eb;
    }

    .social .social-youtube{
        color: #eb3223;
    }
    ${'' /* End of Social Links */}

    ${'' /* Become a Volunteer */}
    .volunteer-title{
        color: #fbb02d;
        text-transform: uppercase;
    }
    ${'' /* End of volunteer */}

    ${'' /* Comments */}
    .comments, .comments .btn-outline-success{
        border-color: #7cb518;
    }
    .comments .comments-title, .comments .btn-outline-success{
        color: #7cb518;
    }

    .comments textarea{
        margin-bottom: 12px;
    }
    .comments .btn-outline-success:hover{
       background-color: #7cb518;
       color: #fff;
    }
    ${'' /* End of comments */}

    ${'' /* Donate Page */}
    .donate-header{
        min-height: 40vh;
        background: url(${donateImg});
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .donate-header-login{
        background: url(${loginImg}); 
    }

    .forgot-password{
        margin-top: 20px;
    }

    .donate-header-title{
        margin-top: 20px;
    }

    .donate-guest{
        margin: 20px 0;
    }

    ${'' /* End of Donate Page */}

    ${'' /* Passwords validity */}
    .password-validity{
        color:#eb3223;
        margin-bottom: 5px;
        ${'' /* visibility: hidden; */}
        display: none;
    }

    .password-invalid{
        display: block;
    }
    ${'' /* End of password validity */}

    ${'' /* Gallery */}
    .gallery{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-template-rows: minmax(100px, auto);
        margin: 40px;
        max-width: 100%;
        grid-auto-flow: dense;
        grid-gap: 10px;
    }

    .gallery .gallery-image-container:nth-child(1){
         grid-row: span 3;
    }

    .gallery .gallery-image-container:nth-child(2){
        grid-column: span 2;
    }

    .gallery .gallery-image-container:nth-child(5){
        grid-column: span 2;
        grid-row: span 2;
    }

    .gallery .gallery-image-container:nth-child(7),
    .gallery .gallery-image-container:nth-child(10),
    .gallery .gallery-image-container:nth-child(11){
        grid-row: span 2;
    }

    .gallery-image-container:hover{
        background-color: #e91e62;
        opacity: 1;
    }

    @media screeen and (max-width: 990px){
        .gallery{
            grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
            grid-template-rows: minmax(100%, 100%);
        }   
    }

    @media screeen and (max-width: 680px){
        .gallery .gallery-image-container:nth-child(1){
            grid-row: unset !important;
        }

        .gallery .gallery-image-container:nth-child(2){
            grid-column: unset !important;
        }
        .gallery .gallery-image-container:nth-child(5){
            grid-column: unset !important;
            grid-row: unset !important;
        }
        .gallery .gallery-image-container:nth-child(7),
        .gallery .gallery-image-container:nth-child(10),
        .gallery .gallery-image-container:nth-child(11){
            grid-row: unset !important;
        }
    }

    ${'' /* End of Gallery */}

    ${'' /* Contact */}
    .contact{
        color:#7cb518;
    }

    .contact .contact-details{
        margin-left: 20px;
    }

    .contact-header-image{
        background: url(${contactImg}); 
    }

    ${'' /* End of Contact */}

    @media screen and (max-width: 324px){
        .donate-header h1{
            font-size: 1.6rem;
        }
        
        .donate-header-title{
            font-size: .85rem;
        } 

        form h3{
            font-size: 1.3rem;
        }

        form input::placeholder{
            font-size: .85rem;
        }
    }

    ${'' /* Parners */}

    ${'' /* Paypal */}
    ${'' /* Sucess payment */}
    .success-donation, .error-donation{
        background-color:rgb(170, 255, 137);
        min-height: 30vh;
        border-radius: 20px;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 10px;
    }

    .error-donation{
        background-color:rgb(255, 137, 137);
    }

    .success-donation h3, .error-donation h3{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
    }

    ${'' /* End of paypal */}

`;

const StyledHero = styled.header`
    min-height: 30vh;
    background: url(${(props)=> props.image? props.image: defaultImg}) center/cover no-repeat;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    h3{
        color:#fff;
    }
`;

const ImageGallery = styled.div`
        background: url(${(props)=> props.image? props.image: defaultImg}) center/cover no-repeat;
        min-height: 200px;
        opacity: .7;
        background-color: #ccc;
        transition: 0.3s ease-in-out;
        place-items: center;
        text-align: center;
        color: #fff;
        overflow: hidden;        

        @media screeen and (max-width: 680px){
            grid-row: unset !important;
            grid-column: unset !important;
        }
        
`;

const dashboardStyles = styled.div`
       .dashboardHeader{
           background-color : #5c8001;
           padding : 10px;
       }
`;

export {AppStyles, StyledHero, ImageGallery, dashboardStyles};