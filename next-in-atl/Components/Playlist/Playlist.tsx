import react from "react";
import { Song } from "../Songs/Song";
import styles from "./Playlist.module.scss";
import{SliceLike, SliceZone, SliceZoneLike} from "@prismicio/react"
import{components } from "../../slices"
import { IPrimary } from "../../slices/Song";

const songList=[
    {
        imageLink:"./assets/Led Zeppelin.jpeg",
        title:"Dazed and Confused",
        album: "Led Zeppelin",
        duration: "6:24"
    },
    {
        imageLink:"./assets/Creatures of habits.jpeg",
        title:"The Drunk",
        album: "Creatures of Habit",
        duration: "3:54"
    },
    ];
interface IPlaylist{
    slices: SliceZoneLike<SliceLike<string>>;
    setSong: (data: IPrimary) => void;
}
export const Playlist = (props: IPlaylist) => {

    return (
        <><div className={styles.playlist}>
            <div className="table-header">
                <span className={styles["song-nr"]}>
                    #
                </span>
                <span className={styles["song-cover"]}>
                    Cover
                </span>
                <span className={styles["song-title"]}>
                    Title
                </span>
                <span className={styles["song-album"]}>
                    Album
                </span>
                <span className={styles["song-duration"]}>
                    Duration
                </span>
                </div>
        </div>
       { <div id="songs-wrapper" className={styles["songs"]}>
                        {/* <Song Index={1} song Info={songList[0]} />*/}
                        {songList.map(function(details,index) {
                        return <Song index={index+1} songInfo={details} />
                    })}
                    </div> }
        </>
    );
};