import fetchApi from "@lib/strapi";
import type Comment from "@interfaces/comment";
import CommentComp from "./Comment";
import CommentForm from "./CommentForm";
import "../../../styles/comment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";

type Props = {
  id: number;
};

const CommentList = ({ id }: Props) => {
  console.log("Component rendered with id:", id);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const toastID = toast.loading("댓글 로드중...");
    console.log("Fetching comments for id:", id);
    fetchApi<Comment[]>({
      endpoint: `/comments/api::article.article:${id}`,
    })
      .then((response) => {
        console.log("API response:", response);
        setComments(response);
        toast.update(toastID, {
          render: "댓글을 성공적으로 불러왔습니다.",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("API error:", error);
        toast.update(toastID, {
          render: "댓글을 불러오지 못했습니다.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
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
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
};

export default CommentList;
