import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import useShowSinglePost from "../../hooks/useShowSinglePost";
import { useAuthContext } from "../../context/AuthContext";

export default function Single() {
  const { id } = useParams();
  const [post1, setPost] = useState();
  const { loading, showPost } = useAuthContext();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await showPost(id);
        setPost(res || []);
        // console.log(res);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="">
      <SinglePost post={post1} />
    </div>
  );
}
