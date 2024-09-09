import Picture5 from './assets/drone5.jpg';

function About() {
  return (
    <div className='about-us-section'>
      <div className='cust-row'>
        <img className='about-us-img' src={Picture5}/>

        <div className='about-us-section-text'>
          <p className='about-us-heading'>About Us</p>
          <div className="rectangle-2"></div>

          <div className='about-us-paragraph-section'>
            <p className='about-us-paragraph'> 
                Welcome to our dronoticz, where innovation and technology converge to shape the future. 
                We revolutionize industries and improve lives worldwide through our passion for pushing the boundaries of what robots can do. 
                With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way in the robotics revolution.
                Our brilliant team creates intelligent machines that seamlessly integrate into daily life, enhancing productivity, safety, and efficiency.
                Join us on this exciting journey as we unlock new frontiers, solve complex challenges, and shape a future where intelligent machines work hand-in-hand with humans. 
                Discover the power of robotics and be part of the revolution.
              </p>
          </div>
        </div>
      </div>

      <div className='subscribe-section'>

          <p className='subscribe-heading'>SUBSCRIBE</p>
          <p>
            Sign-up to our newsletter
          </p>
           <form>
            <input className="email-input" type='email' placeholder='Your email'></input>
              <div className='submit'>
                  <input className="submit-button" type='submit' value={"SUBMIT"}></input>
              </div>
          </form>
      </div>

    </div>
  );
}

export default About;
