import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "./Spotify.module.css";

function Spotify() {
  const [lfmName, updateLfmName] = useState("");
  const [lfmText, updateLfmText] = useState("");
  const [sLink, updateSLink] = useState("");

  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${process.env.REACT_APP_USER}&api_key=${process.env.REACT_APP_API_KEY}&limit=1&nowplaying=true&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => {
        updateLfmName(data.recenttracks.track[0].name)
        updateLfmText(data.recenttracks.track[0].artist["#text"])

        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + process.env.REACT_APP_AUTH //process.env.REACT_APP_SPOTIFY_CLIENT //Basic <base64 encoded client_id:client_secret>
          },
          body: "grant_type=client_credentials"
        }).then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('error')
        }).then(o => {
          fetch(`https://api.spotify.com/v1/search?q=${data.recenttracks.track[0].name.replaceAll(' ', "%20")}%20${data.recenttracks.track[0].artist["#text"].replaceAll(' ', "%20")}&type=track&limit=1`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "Authorization": "Bearer " + o.access_token 
            }
          }).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('error')
          }).then(d => {
            updateSLink(d.tracks.items[0].external_urls.spotify)
          }).catch((err) => {
            console.log("error: 'Whoops! Something went wrong with Spotify'")
            updateSLink("https://open.spotify.com/user/mskinsm?si=38e3cd9499194388")
          })
        }).catch(() => {
          console.log("error: 'Whoops! Something went wrong with Spotify'")
          updateSLink("https://open.spotify.com/user/mskinsm?si=38e3cd9499194388")
        })
      })
      .catch(() => {
        console.log("error: 'Whoops! Something went wrong with Last.fm'")

        //Default
        updateLfmName("Blush")
        updateLfmText("Leon Vynehall")
      });
  }, []);

  if(lfmName && lfmText){
    return (
      <div className={styles["spotify-container"]}>
          <FontAwesomeIcon icon={faSpotify} className={styles["spotify-icon"]} />
          <h3><span className="global-isdesktop">Currently listening to </span><a className="global-border-regular" href={sLink} target="_blank">{lfmName} by {lfmText}</a></h3>
      </div>
    );
  }

  return null
}

export default Spotify;
