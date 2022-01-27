

import { faBookmark, faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastComment from "./LastComment";
import styles from "../Main.module.css";
import { useState } from "react";

const PostCard = () => {
    const [isliked, setIsliked] = useState(false);
    return (
    <div className={`${styles.postCard}`}>
        <div className={`${styles.postCardOwnerInfo}`}>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
           alt="User Avatar" 
           className={`${styles.postCardOwnerInfoAvatar}`}/>
           <div className={`${styles.postCardOwnerInfoName
        }`}>Aghaheee</div>
        </div>
        <div>
        <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fcde34998-0731-11ec-ab20-2ce30c912e38.jpg?crop=7251%2C4079%2C55%2C589&resize=1200"
           alt="Post Content" 
           className={`${styles.postcardContentImages}`}/>
            </div>
             <div className ={`${styles.postCardActions}`}>
                 <span onClick={()=> setIsliked((prev)=>(!prev))}>
                 <FontAwesomeIcon icon={isliked ? faHeartSolid : faHeart}/>
                 </span>
                 <span>
                 <FontAwesomeIcon icon={faComment}/>
                 </span>
                 <span>
                 <FontAwesomeIcon icon={faBookmark}/>
                 </span>
       
            </div>

        <div className={`${styles.postCardLastComments}`}>
            <LastComment /> 
            <LastComment /> 
            <LastComment /> 
        </div>
        <div className={`${styles.postCardSentInstantComment}`}>
            <input type="text" placeholder="write your comment here..." />
            <button disabled={true}>submit</button>
        </div>
    </div>);
}
 
export default PostCard;
