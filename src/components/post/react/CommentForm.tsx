import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  classList?: string;
  postID: number;
  commentID?: number;
};

const submitComment = async (e: any) => {
  e.preventDefault();

  const body = {
    content: e.target.content.value,
    threadOf: e.target.commentID ? parseInt(e.target.commentID.value) : null,
    author: {
      id: e.target.email.value,
      name: e.target.nickname.value,
      email: e.target.email.value,
      avartar: "",
    },
  };

  console.log(body);

  const res = await fetch(
    `https://strapi.obtuse.kr/api/comments/api::article.article:${e.target.postID.value}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer bc31b59f4cf0df8dda5c4dceb3792434a3e9ec3620333266b01d4edb7207dc1654cf9c84bad0c03a60caf495a86c1399ebe9dbda54c6e6e1ea8a770a7b131c41d153f3b245201f7bebdc8c69cf31a63af100876534fbbdd52892c71ff3225355cf85217d78c7cde1f7103041e205cb2ceb2861c918d138060db197c5a73dea1e`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  console.log(data);
  if (data.error) {
    toast.error(JSON.parse(data.error.message).message);
    // alert(JSON.parse(data.error.message).message);
  } else {
    toast.success("댓글이 등록되었습니다.");
    const elm = document.createElement("div");
    elm.classList.add("flex", "gap-4");
    elm.innerHTML = `<img
  src="https://ui-avatars.com/api/?background=d9a6f5&color=433B4E&name=${e.target.nickname.value}"
          alt=${e.target.nickname.value}
          width="40px"
          height="40px"
          class="rounded-full w-[40px] h-[40px]"
        />
        <div>
          <h3 class="font-bold">${e.target.nickname.value}</h3>
          <p class="font-thin">${e.target.content.value}</p>
        </div>`;
    e.target.nickname.value = "";
    e.target.content.value = "";
    e.target.email.value = "";
    e.target.parentElement.querySelector(".commentForm+div").appendChild(elm);
    if (e.target.commentID) {
      e.target.parentElement.querySelector(".commentReplyForm").classList.add("hidden");
    }
  }
  // else {
  //   window.location.reload();
  // }
};

const CommentForm = ({ classList, postID, commentID }: Props) => {
  return (
    <form className={"commentForm " + classList} onSubmit={submitComment}>
      <div className="flex gap-2 w-full min-h-[150px] my-3">
        <div className="flex gap-2 flex-col min-w-[20rem]">
          <div className="inputDiv">
            <input type="text" name="nickname" id="nickname" placeholder="nickname" required />
          </div>
          <div className="inputDiv">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>
        </div>
        <div className="inputDiv min-h-[150px]">
          <textarea
            name="content"
            id="content"
            placeholder="comment input"
            className="w-full h-full"
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
      {commentID ? (
        <input type="hidden" name="commentID" id="commentID" value={commentID} />
      ) : (
        <></>
      )}
      <ToastContainer theme="dark" />
    </form>
  );
};
export default CommentForm;
