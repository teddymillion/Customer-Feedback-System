
import './Home.css';
//import img1 from './assets/img1.png';


export default function Home(){
    return(
        <div className='main1'>
          
      <div className="wrapper">
        
      <input type="radio" name="slide" id="one" defaultChecked />
      <input type="radio" name="slide" id="two" />
      <input type="radio" name="slide" id="three" />
      <input type="radio" name="slide" id="four" />
      <input type="radio" name="slide" id="five" />
      
      <div className="img img-1">
        <img src="images/7.jpg" alt="" />
      </div>
      <div className="img img-2">
        <img src="images/4.jpg" alt="" />
      </div>
      <div className="img img-3">
        <img src="images/8.jpg" alt="" />
      </div>
      <div className="img img-4">
        <img src="images/6.jpg" alt="" />
      </div>
      <div className="img img-5">
        <img src="images/3.jpg" alt="" />
      </div>
      <div className="sliders">
        <label htmlFor="one" className="one"></label>
        <label htmlFor="two" className="two"></label>    
        <label htmlFor="three" className="three"></label>
        <label htmlFor="four" className="four"></label>
        <label htmlFor="five" className="five"></label>
      </div>
    </div>
    <h1 className='home'>Ministry Of Innovation And Technology</h1>
    {/* <p>The innovation and technology ministry is one of 
      the 19 ministerial offices re-organize in a new manner 
      by being accountable to the office of the 
      
      prime minister 
      after duly established as per Article 55 Sub Article 1 of 
      the FDRE Proclamation No. 1097/2018.

                Misson-To ensure the sustainability of the country's development 
                by creating an environment in which innovation systems are implemented.
                Vision-Build a country that is conducive for job and wealth 
                creation through technology and innovation.
                value-Moral virtue and earnestness  
Avid thirst for knowledge and learning
Work ethic and diligence
Unbounded imagination and thinking
A foundation for generations to come
    </p> */}
        </div>
        
    )
}