import { useEffect, useState } from 'react';
import './App.css';
import Login from './login/Login.jsx';
import { getTokenFromUrl } from './Utils/spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './player/Player';
import { useDataLayerValue } from './DataLayer';

// Needs to be in Server.js
const spotifyWApi = new SpotifyWebApi();

function App() {
  const [spotToken, setSpotToken] = useState(null);
  const [{ user, token, playlists, playlistTracks, currentlyPlaying }, dispatch] = useDataLayerValue();
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    const hash = getTokenFromUrl(); 
    window.location.hash = '';

    const _spotifyToken = hash.access_token;

    if (_spotifyToken) {
      
      dispatch({type: 'SET_TOKEN', 
      token: _spotifyToken});

      spotifyWApi.setAccessToken(_spotifyToken);

      spotifyWApi.getMe().then(user => {
       

        dispatch({ type: 'SET_USER', 
        user: user
      });
      })

  
     
      spotifyWApi.getUserPlaylists().then(playlists => {
        dispatch({ 
        type: 'SET_PLAYLISTS', 
        playlists: playlists,
      });
      });

   



      }
    }, []);

  console.log("My username is ", user);
  console.log("My token is ", token);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login /> 
        )

      }
    <Login /> 
    {/* SPOTIFY LOGIN - STANDARD (NEEDS TO SIGN UP IF NOT HAVE SPOTIFT ACCOUNT) */}
    {/* LOGIN / SIGN UP - Create User Profile / Bio / Image */}

    {/* DASHBOARD - profile / bio, playlist */}
    {/* SEARCH - search for songs */}
    {/* RESULTS - result of songs */}
    {/* COMMENTS - RIGHT HANDSIDE */}
    {/* MUSIC PLAYER - Play/Play, Skip, Comments icon, Save Icon */}


    </div>
  );
}

export default App;
