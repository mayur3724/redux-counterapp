import React from "react";
import songsData from "../data/songData";
import { clickedSong } from "../redux/actions/songActions"; 
import { useDispatch } from "react-redux";


const SongList = () => {
    const dispath = useDispatch();
    return (
        <div>
            {
                songsData.map((song) => (
                    <p onClick={()=>dispath
                        (clickedSong(song))} key={song.id}>
                        {song.name}
                    </p>
                ))
            }
        </div>
    )
}
export default SongList;