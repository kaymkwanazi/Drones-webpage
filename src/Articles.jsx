import Picture1 from './assets/drone1.jpg';
import Picture2 from './assets/drone2.jpg';
import Picture3 from './assets/drone3.jpg';
import Picture4 from './assets/drone4.jpg';


function Articles(){
return (
    <div>
        <h3 className="latest-article">LATEST ARTICLES</h3>
        <div className="rectangle-2"></div>

        <div className="cards-section">
            <div className='my-card'>
                <img className="card-img" src ={Picture1} alt="drone1" width={"20%"} />
                <div className="rectangle-2"></div>
                <p>How  to automate <br></br> surveillance drones</p>
            </div>
            <div className='my-card'>
                <img className="card-img" src ={Picture2} alt="drone1" width={"20%"} />
                <div className="rectangle-2"></div>
                <p>Robotics and Artificial  <br></br> Intelligence</p>
            </div>
            <div className='my-card'>
                <img className="card-img" src ={Picture3} alt="drone1" width={"20%"} />
                <div className="rectangle-2"></div>
                <p>Improving Lives through  <br></br> Robotic Prosthetics</p>
            </div>
            <div className='my-card'>
                <img className="card-img" src ={Picture4} alt="drone1" width={"20%"} />
                <div className="rectangle-2"></div>
                <p>Power of Robotics in  <br></br> Agriculture</p>
            </div>
           
        </div>
       
    </div>
);
}
export default Articles;