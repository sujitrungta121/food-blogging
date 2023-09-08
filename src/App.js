import logo from './logo.svg';
import './App.css';
import foodTruck from "../src/assets/food-truck.png";
import pizza from "../src/assets/pizza-image.png";
import curvyLines from "../src/assets/curvy-image.png";
import foodImage from "../src/assets/food-image.png";
import foodPrep from "../src/assets/food-prep.png";
import Button from "../src/components/Button";
import { btnred } from './components/colors';
import Footer from './components/Footer';
import rightArrow from "../src/assets/right-arrow.png";
import leftArrow from "../src/assets/left-arrow.png"
import vector1 from "../src/assets/Vector 1.png";
function App() {

  const articles=[{
    id:1,
    img:foodPrep,
    type:"Grilled  Tomatoes at Home",
    desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:2,
    img:foodPrep,
    type:"Grilled  Tomatoes at Home",
    desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:3,
    img:foodPrep,
    type:"Grilled  Tomatoes at Home",
    desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },

]
  return (
    <div className="body">
     
      <div className="header">
     
        <div className="left">
        <img src={foodTruck} alt="This image is not loading" className="headerImg"/>
          <div className="headerTxt">
          <span className="headingText">Discover the <strong className="middle">Best </strong>Food and Drinks</span>
          <span style={{color:"#444957"}}>Naturally made Healthcare Products for the better care & support of your body.</span>
          <Button title="Explore Now" color={btnred} />
          </div>
        </div>
        <div className="right">
          <img src={pizza} alt="" className="img" />
          <img src={vector1} alt="" className=" img1" />
        </div>
      </div>
      {/* about section #1E2A5D, #303E82, */}
      <div className="about" style={{backgroundColor:"rgba(30, 42, 93, 0.04)"}}>
        <img src={foodImage} alt="" className="foodimg" />
        <div className="aboutText" >
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque autem quisquam suscipit doloremque tenetur, aliquid voluptatem perferendis nam exercitationem? Totam qui commodi earum! Necessitatibus atque quaerat temporibus consequatur provident libero, ut tenetur laudantium maxime, placeat dignissimos adipisci quae.</p>
          <Button title="Read More" color={btnred}/>
        </div>
      </div>
      <div className="articles">
        <h2 style={{padding:"16px"}}>Latest Articles</h2>
        <div className="cardStyle">
        {articles.map(item=>{return( 
          <div className="card">
          <img src={item.img} alt="" className="cardImg"/>
          <p className="type" style={{color:"#0E2368"}}>{item.type}</p>
          <p className="itemDesc">{item.desc}</p>
          <div className="btn">
          <Button title="Read More" />
          </div>
        </div>)}
       
      
        )}
        </div>
        <div className="navigation">
          <img src={leftArrow} alt="" className="arrow"/>
          <span>1/2</span>
          <img src={rightArrow} alt="" className="arrow"/>
        </div>
        <div className="footer">
        <Footer/>
       </div>
        </div>
    </div>
  );
}

export default App;
