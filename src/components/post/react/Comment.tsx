// import Image from "astro/components/Image.astro";
import Timestamp from "./Timestamp";
import type Comment from "@interfaces/comment";
// import CommentComp from "./Comment" as CommentComp1;
import CommentForm from "./CommentForm";
import ReportForm from "./ReportForm";

import { useState, useEffect } from "react";

type Props = {
  children: Comment;
  postID: number;
};

const CommentComp = ({ children, postID }: Props) => {
  const [replyForm, setReplyForm] = useState(false);
  const [reportForm, setReportForm] = useState(false);
  return (
    <div className="flex gap-4">
      <img
        src={
          children.author.avatar
            ? children.author.avatar
            : `https://ui-avatars.com/api/?background=d9a6f5&color=433B4E&name=${children.author.name}`
        }
        alt={children.author.name}
        className="rounded-full w-[40px] h-[40px]"
      />
      <div className="w-full">
        <h3 className="font-bold">{children.author.name}</h3>
        <p className="font-thin">{children.content}</p>
        <div className="flex gap-4">
          <p className="text-xs text-gray-400">
            <Timestamp updatedAt={children.updatedAt} />
          </p>
          <p className="text-xs text-gray-400">
            <a
              className="commentReply cursor-pointer"
              onClick={() => {
                setReplyForm(!replyForm);
                reportForm && setReportForm(false);
              }}
            >
              Reply
            </a>
          </p>
          <p className="text-xs text-gray-400">
            <a
              className="commentReport cursor-pointer"
              onClick={() => {
                setReportForm(!reportForm);
                replyForm && setReplyForm(false);
              }}
            >
              Report
            </a>
          </p>
        </div>
        {reportForm && <ReportForm postID={postID} commentID={children.id} />}
        {replyForm && (
          <CommentForm classList="commentReplyForm" postID={postID} commentID={children.id} />
        )}
        <div className="my-4">
          {children.children.map((cc) => {
            // console.log(cc);
            return <CommentComp postID={postID} children={cc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentComp;
