import './App.css';
import profilePic from './prof.jpg';

function App() {
  return (
    <div className="App">
      {/* profile picture & following */}
      <div className='picAndFollow'>
        <div className='imageWrapper'>
          <img src={profilePic} alt='profile' />
        </div>
      </div>

      {/* profile bio */}
      <div className='profileBio'></div>
    </div>
  );
}

export default App;
