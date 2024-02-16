import './App.css';
import profilePic from './prof.jpg';
import { FaCaretDown } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      {/* profile picture & following */}
      <div className='picAndFollow'>
        <div className='imageWrapper'>
          <img src={profilePic} alt='profile' />
        </div>

        <div className='followWrapper'>
          <div className='stats'>
            <div className='postsStatsDiv'>
              <p>3,617</p>
              <p>posts</p>
            </div>

            <div className='followersStatsDiv'>
              <p>500</p>
              <p>followers</p>
            </div>

            <div className='followingStatsDiv'>
              <p>969</p>
              <p>following</p>
            </div>
          </div>

          <div className='buttonsDiv'>
            <button className='followBtn'></button>
            <button> <FaCaretDown /> </button>
          </div>
        </div>
      </div>

      {/* profile bio */}
      <div className='profileBio'>
        <h3>Courtney Styles</h3>
        <p className='career'>Photographer</p>
        <p>🏆 2023 Best photographer of the year</p>
        <p>Founder of <span className='blueLink'>@photosYellow</span></p>
        <p>Inquiries: <span className='blueLink'>courtney@email.com</span></p>
        <span className='blueLink'>www.stylesPhotography.com</span>
      </div>
    </div>
  );
}

export default App;
