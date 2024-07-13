import fetchApi from "@lib/strapi";
import type Comment from "@interfaces/comment";
import CommentComp from "./Comment";
import CommentForm from "./CommentForm";
import "../../../styles/comment.css";

import { useState, useEffect } from "react";

type Props = {
  id: number;
};

const CommentList = ({ id }: Props) => {
  console.log("Component rendered with id:", id);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Fetching comments for id:", id);
    fetchApi<Comment[]>({
      endpoint: `/comments/api::article.article:${id}`,
    })
      .then((response) => {
        console.log("API response:", response);
        setComments(response);
      })
      .catch((error) => {
        console.error("API error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h2 className="text-3xl">Comment</h2>
      <CommentForm postID={id} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="my-4 gap-4 flex flex-col">
          {comments.length > 0 ? (
            comments.map((c) => <CommentComp key={c.id} children={c} postID={id} />)
          ) : (
            <p>No comments found.</p>
          )}
        </div>
      )}
      {/* <script src="/post/comment.js"></script> */}
    </div>
  );
};

export default CommentList;
