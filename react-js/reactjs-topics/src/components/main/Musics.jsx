import React from 'react'
import "./Main.css"
function Musics() {
    const musicList = [
  {
    id: 1,
    name: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    releaseDate: "2017-01-06",
    genre: "Pop",
    duration: "3:53"
  },
  {
    id: 2,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    releaseDate: "2019-11-29",
    genre: "Synth-pop",
    duration: "3:20"
  },
  {
    id: 3,
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    releaseDate: "2020-03-27",
    genre: "Disco-pop",
    duration: "3:23"
  },
  {
    id: 4,
    name: "Someone Like You",
    artist: "Adele",
    album: "21",
    releaseDate: "2011-01-24",
    genre: "Soul",
    duration: "4:45"
  },
  {
    id: 5,
    name: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    releaseDate: "2014-11-10",
    genre: "Funk-pop",
    duration: "4:30"
  }
];

  return (
    <div className="musics-container">
      <h2>🎵 Music List</h2>
      <table className="music-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release</th>
            <th>Genre</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {musicList.map((music) => (
            <tr key={music.id}>
              <td>{music.id}</td>
              <td>{music.name}</td>
              <td>{music.artist}</td>
              <td>{music.album}</td>
              <td>{music.releaseDate}</td>
              <td>{music.genre}</td>
              <td>{music.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Musics;