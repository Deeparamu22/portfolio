import React, { useRef, useState,useEffect} from 'react'
import style from './Whole.module.css'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
// import ProgressProvider from "./ProgressProvider";
import emailjs from 'emailjs-com'
import 'react-circular-progressbar/dist/styles.css';
export default function Whole() {
  let i=-1;
  const home=useRef(null);
  const colors=['#2C83C6','#C33726','#F765A3','#EC9A00','#480DA7']
  const about=useRef(null)
  const skill=useRef(null)
  const portfolio=useRef(null);
  const contact=useRef(null);
  const video=useRef(null);
  const [menu,setmenu]=useState('bestproject')
  const skills=[{name:"HTML,CSS",per:90,color:'#165BA9'},{name:'VanillaJS',per:80,color:'#A155B9'},{name:"Basic Java",per:80,color:'#F765A3'},{name:'NodeJS',per:90,color:'#5FDED7'},{name:'React',per:80,color:'#F48154'},{name:'MYSQL',per:70,color:'#74D5F5'},{name:'JQuery',per:90,color:'#28BF10'},{name:'GitHub',per:90,color:'#662D91'}];
  const scrollsection=(element)=>{
    window.scrollTo({
      top:element.current.offsetTop,
      behavior:'smooth'
    })
  };
  const [location,setlocation]=useState(0)
  let p=0
  const all=[{
    pht:'/assests/Screenshot from 2023-03-13 22-04-35.png',
    name:'ToDo Daily',
    learn:['react','bestproject','fullstatck'],
    learnthings:['#react',"#mysql","#Whatsapp API","#Node Connection","#Own desgin"],
    link:'https://github.com/Deeparamu22/todo'
  },{
    pht:'/assests/Screenshot from 2023-03-14 07-42-46.png',
    name:'Fashiya-Shopping Website',
    learn:['vanillajs','bestproject'],
    learnthings:['#vanilla Js',"#localStroage","#Own desgin"],
    link:'https://splendid-jelly-d9b3ad.netlify.app/'
  },{
    pht:'assests/Screenshot from 2023-03-14 07-48-03.png',
    name:'Product-Feedback App',
    learn:['react','fullstatck','bestproject'],
    learnthings:['#react',"#mysql","#Node Connection"],
    link:'https://github.com/Deeparamu22/productfeedback.git'
  },{
    pht:'assests/Screenshot from 2023-03-14 08-00-09.png',
    name:'Invoice',
    learn:['Node','fullstatck','bestproject'],
    learnthings:["#Express JS","#mysql","#Node Connection"],
    link:'https://github.com/Deeparamu22/invoice.git'

  },
  {
    pht:'assests/Screenshot from 2023-03-14 10-02-31.png',
    name:'Comments Section ',
    learn:['react','fullstatck'],
    learnthings:['#react',"#mysql","#Node Connection"],
    link:'https://github.com/Deeparamu22/client.git'
  },
  {
    pht:'assests/Screenshot from 2023-03-14 10-15-23.png',
    name:'QR Code Generator',
    learn:['react','api'],
    learnthings:['#react',"API"],
    link:'https://sage-yeot-18a9a1.netlify.app/'
  },{
    pht:'assests/Screenshot from 2023-03-14 10-25-01.png',
    name:'Rest Country API',
    learn:['react','api'],
    learnthings:['#react',"#API"],
    link:'https://deepasearchcountry.netlify.app/'
  }
  ,{
    pht:'assests/Screenshot from 2023-03-14 10-20-30.png',
    name:'Pomotoro',
    learn:['vanillajs'],
    learnthings:['#conic-gradient',"#async-await"],
    link:'https://voluble-gaufre-a4bb8f.netlify.app'
  }]
  const navigatefunction=(e,a)=>{
    console.log(a);
    let link;
    all.forEach((aa)=>(aa.name==a)?link=aa.link:null)
    window.open(link);
  }
  useEffect(() => {
    console.log(location)
  
   
  }, [location])
  const sendMail = (e) => {
    console.log(e.target);
      e.preventDefault();

      emailjs.sendForm('gmail', 'email', e.target, 'yMyQh9CyjcF5AfbC_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
  }
  const videos=['assests/Screencast from 14-03-23 05:19:36 AM IST.webm','assests/Screencast from 14-03-23 07:39:18 AM IST.webm','assests/Screencast from 14-03-23 07:49:47 AM IST.webm','assests/Screencast from 14-03-23 08:02:23 AM IST.webm']
  return (
    <div className={style.whole}>
      <div className={style.topDiv}>
        <div className={style.top1}>
        <img src='assests/index.svg' className={style.logo} alt={'gg'}/>
        <p onClick={()=>scrollsection(home)} className={style.hometext}>Home</p>
        <p onClick={()=>scrollsection(about)} className={style.hometext}>About Me</p>
        <p onClick={()=>scrollsection(skill)} className={style.hometext}>Skill</p>
        <p onClick={()=>scrollsection(portfolio)} className={style.hometext}>Portfolio</p>
        <p onClick={()=>scrollsection(video)} className={style.hometext}>Videos</p>
        <div className={style.contact} onClick={()=>scrollsection(contact)}>Contact Me</div>
        </div>
        <div className={style.topmain} ref={home}>
          <div className={style.hellodiv}><h1 className={style.hello}>Hello,I'm <span className={style.deepa}>Deepa</span> Welcome To My World</h1></div>
          <img src='assests/programming-concept-illustration_114360-1213-removebg-preview.png' className={style.photo} alt={'ggg'}/>
        </div>
        <div className={style.topprofile}>
          <div className={style.photdiv}><img src='assests/index2.jpeg' alt='profile' className={style.profilePhoto}/>
          <div className={style.backgroundStyle}></div>
          </div>
          <div className={style.aboutme} ref={about}>
            <h1>About Me</h1>
            <p>I am <span className={style.deepa}>Deepa,</span> I am from Madurai I am curious to learn new things daily.
Especially I love to learn new concepts in react js and I have a good communication skills,
And a ability to work in a team environment</p></div>
        </div>
        <div className={style.skillWholeDiv} ref={skill}>
          <h1>My Professional skills</h1>
<div className={style.progressbar}>
  {
    skills.map((a)=>{
     return <div className={style.progressDiv}><CircularProgressbar value={a.per} text={`${a.per}%`} styles={buildStyles({pathColor: a.color,textColor: a.color})}/><p>{a.name}</p></div>
    })
  }
</div>

        </div>
        <div className={style.portfolio} ref={portfolio}>
          <div>
          <h1 style={{marginTop:'113px'}}>Portfolio</h1>
          </div>
          <div className={style.portfoliomenu}>
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='bestproject'  defaultChecked={menu==='bestproject'}/><h3  className={style.select}>Best Projects</h3></label>
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='fullstatck'  defaultChecked={menu==='fullstatck'}/><h3  className={style.select}>Fullstack</h3></label>
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='react'  defaultChecked={menu==='react'}/><h3  className={style.select}>React</h3></label>
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='Node'  defaultChecked={menu==='Node'}/><h3  className={style.select}>Nodejs</h3></label>  
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='vanillajs'  defaultChecked={menu==='vanillajs'}/><h3  className={style.select}>VanillaJS</h3></label>
            <label><input type={'radio'} name='portfolioMenu' className={style.portfolioMenuInput} onClick={(e)=>setmenu(e.target.value)} value='api'  defaultChecked={menu==='api'}/><h3  className={style.select}>API</h3></label>
          </div>
          <div className={style.portfolioimgdiv}>
            {
              (menu==='bestproject')?all.filter((a)=>a.learn.includes('bestproject')).map((b)=>{ 
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                  <img src={b.pht} className={style.img}/>
                  <h3 className={style.name}>{b.name}</h3>
                  <div className={style.learnthingswhole}>
                   <p style={{display:"none"}}> {i=-1}</p>
                 { b.learnthings.map((c)=>{
                  return  <p className={style.learnthingsdiv}>{c}</p>
                  })}
                  </div>
                </div>
              }):(menu==='react')?all.filter((a)=>a.learn.includes('react')).map((b)=>{
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                <img src={b.pht} className={style.img}/>
                <h3 className={style.name}>{b.name}</h3>
                <div className={style.learnthingswhole}>
               { b.learnthings.map((c)=>{
                return  <p className={style.learnthingsdiv}>{c}</p>
                })}
                </div>
              </div>
              }):(menu==='fullstatck')?all.filter((a)=>a.learn.includes('fullstatck')).map((b)=>{
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                <img src={b.pht} className={style.img}/>
                <h3 className={style.name}>{b.name}</h3>
                <div className={style.learnthingswhole}>
               { b.learnthings.map((c)=>{
                return  <p className={style.learnthingsdiv}>{c}</p>
                })}
                </div>
              </div>
              }):(menu==='vanillajs')?all.filter((a)=>a.learn.includes('vanillajs')).map((b)=>{
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                <img src={b.pht} className={style.img}/>
                <h3 className={style.name}>{b.name}</h3>
                <div className={style.learnthingswhole}>
               { b.learnthings.map((c)=>{
                return  <p className={style.learnthingsdiv}>{c}</p>
                })}
                </div>
              </div>
              }):(menu==='Node')?all.filter((a)=>a.learn.includes('Node')).map((b)=>{
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                <img src={b.pht} className={style.img}/>
                <h3 className={style.name}>{b.name}</h3>
                <div className={style.learnthingswhole}>
               { b.learnthings.map((c)=>{
                return  <p className={style.learnthingsdiv}>{c}</p>
                })}
                </div>
              </div>
              }):(menu==='api')?all.filter((a)=>a.learn.includes('api')).map((b)=>{
                return  <div className={style.portfoliosmallDiv} onClick={(event)=>{navigatefunction(event,b.name)}}>
                <img src={b.pht} className={style.img}/>
                <h3 className={style.name}>{b.name}</h3>
                <div className={style.learnthingswhole}>
               { b.learnthings.map((c)=>{
                return  <p className={style.learnthingsdiv}>{c}</p>
                })}
                </div>
              </div>
              }):null
            }
          </div>
        </div>
        <div className={style.videoswhole} ref={video}>
          <h1>Project Videos</h1>
          <div className={style.videodiv}>
          <i class="fa-solid fa-chevron-left" style={{fontSize:'30px'}} onClick={()=>(location!=-1)?setlocation(location-1):setlocation(3)}></i>
          <div className={style.videosmain}>
          <div  className={style.videoinner}>
          <video width="1300px" height="800px" controls="controls" muted src={videos[location]}>
        </video>
        
              </div>
          </div>
          <i class="fa-solid fa-chevron-right" style={{fontSize:'30px'}} onClick={()=>(location!=3)?setlocation(location+1):setlocation(0)}></i>
          </div>
        </div>
        <div className={style.contactwhole} ref={contact}>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_TNi3iOF9S4.json"  background="transparent"  speed="1"  style={{width: '500px',height: '500px'}}  loop  autoplay></lottie-player>
        <div className={style.contact1}>
        <h1>Contact</h1>

        <div className={style.contactinner}>
        <form onSubmit={sendMail} className={style.contactMain}>
        <input type='text' required={true} placeholder='Enter Your Name' className ={style.inputstyle} name='name'/>
        <input type = 'email' required={true} placeholder='Enter Your Email Address' className ={style.inputstyle} name='email' />
        <input type='text' required={true} placeholder='Enter The Subject' className ={style.inputstyle} name='subject' /> 
        <textarea required={true} placeholder='Enter Your Message...' name='message'></textarea>
        <input type='submit' className={style.sendButton} value='SEND'></input>
      </form>
      </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}