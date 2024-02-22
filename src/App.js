import './App.css';
import profilePic from './girl1.jpg';
import { FaCaretDown } from "react-icons/fa6";
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [followers, setFollowers] = useState(499);

  function handleFollow() {
    setIsClicked(!isClicked);
    if (isClicked) setFollowers(followers - 1);
    else setFollowers(followers + 1);
  }

  return (
    <div className="App">
      {/* profile picture & following */}
      <div className='picAndFollow'>
        <div className='imageDiv'>
          <img src={profilePic} alt='profile' />
        </div>

        <div className='followDivContainer'>
          <div className='statsDiv'>
            <div className='postsStatsDiv'>
              <p>3,617</p>
              <p>posts</p>
            </div>

            <div className='followersStatsDiv'>
              <p>{followers}</p>
              <p>followers</p>
            </div>

            <div className='followingStatsDiv'>
              <p>277</p>
              <p>following</p>
            </div>
          </div>

          <div className='buttonsDiv'>
            <button
              className={isClicked ? 'following' : 'followBtn'}
              onClick={handleFollow}
            >
              {isClicked ? 'Following' : 'Follow'}
            </button>
            <button className='caretBtn'> <FaCaretDown /> </button>
          </div>
        </div>
      </div>

      {/* profile bio */}
      <div className='profileBio'>
        <h3>Amara Pendo</h3>
        <p className='career'>Photographer</p>
        <p>🏆 2023 Best photographer of the year</p>
        <p>Founder of <span className='blueLink'>@BeautifulAfrica</span></p>
        <p>Inquiries: <span className='blueLink'>pendo@email.com</span></p>
        <span className='blueLink'>www.amaraphotography.com</span>
      </div>
    </div>
  );
}

export default App;
