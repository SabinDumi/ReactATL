import react from "react";
import styles from "./Playlist.module.scss";

export const Playlist=()=>{

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
            <div className={styles["melody"]}>
                        <span className={styles["song-nr"]}>
                            1
                        </span>
                        <img src="./assets/Led Zeppelin.jpeg" className="song-cover">
                        </img>
                        <span className={styles["song-title"]}>
                            Dazed and Confused
                        </span>
                        <span className={styles["song-album"]}>
                            Led Zeppelin
                        </span>
                        <span className={styles["song-duration"]}>
                            6:24
                        </span>
                    </div>
        </div><div id="songs-wrapper" className={styles["songs"]}>
            </div></>
    );
};