import { useParams } from "react-router";

const Post = () => {

    const urlParameters = useParams();
    console.log(urlParameters);
    return (
    <>
    <div>This is post with id {urlParameters.id} page</div>
    </>  );
}
 
export default Post;