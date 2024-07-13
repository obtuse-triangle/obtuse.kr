import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  postID: number;
  commentID: number;
};

export default function ReportForm({ postID, commentID }: Props) {
  const [reportBody, setReportBody] = useState("");
  const [reportForm, setReportForm] = useState(true);
  const ReportFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      content: reportBody,
    };
    fetch(
      `https://strapi.obtuse.kr/api/comments/api::article.article:${postID}/comment/${commentID}/report-abuse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer bc31b59f4cf0df8dda5c4dceb3792434a3e9ec3620333266b01d4edb7207dc1654cf9c84bad0c03a60caf495a86c1399ebe9dbda54c6e6e1ea8a770a7b131c41d153f3b245201f7bebdc8c69cf31a63af100876534fbbdd52892c71ff3225355cf85217d78c7cde1f7103041e205cb2ceb2861c918d138060db197c5a73dea1e`,
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          toast.success("신고가 접수되었습니다. 댓글 삭제는 검토 후 이루어집니다.");
          setReportForm(false);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      {reportForm && (
        <form className="reportForm" onSubmit={ReportFormSubmit}>
          <div className="flex gap-2 w-full min-h-[50px] my-3">
            <div className="inputDiv min-h-[50px]">
              <textarea
                name="content"
                id="content"
                placeholder="신고사유"
                className="w-full h-full"
                onChange={(e) => {
                  setReportBody(e.target.value);
                }}
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-full mr-0 m-auto bg-primaryColor text-secondaryColor px-8 py-4 block"
          >
            Send
          </button>
          <input type="hidden" name="postID" id="postID" value={postID} />
          <input type="hidden" name="commentID" id="commentID" value={commentID} />
        </form>
      )}
      <ToastContainer theme="dark" />
    </>
  );
}
