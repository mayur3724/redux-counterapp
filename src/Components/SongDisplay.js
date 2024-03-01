import React from "react";
import { UseSelector, useSelector } from "react-redux";

const SongDisplay=()=>{
    const SongDisplay = useSelector(state=>state.song);
    console.log(SongDetail);
    return (
        <div>
            <h1>Song Display</h1>
            {SongDetail && 
            <div>
            <p>{SongDetail.album}</p>
            <p>{SongDetail.artist}</p>
            <p>{SongDetail.year}</p>
            <p>{SongDetail.genre}</p>
            </div>
            }
        </div>
    )
}
export default SongDisplay;