import  styles from "./Song.module.scss";

interface IsongInfo{
imageLink:string;
title:string;
album:string;
dueation:string;
}

interface IProps{
index:number;
songInfo:IsongInfo;
}

export const Song = (props:IProps) => {
    const index=props.index;
    const songinfo=props.songInfo;
    return(
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
    )
}