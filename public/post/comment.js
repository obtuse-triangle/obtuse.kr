//public/post/comment.js

//submit comment
const commentForms = document.querySelectorAll(".commentForm");

commentForms.forEach((commentForm) => {
  commentForm.addEventListener("submit", async (e) => {
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
      alert(JSON.parse(data.error.message).message);
    } else {
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
  });
});

//toggle reply form
document.querySelectorAll("a.commentReply").forEach((elm) => {
  elm.addEventListener("click", (e) => {
    e.preventDefault();
    const commentReplyForm =
      e.target.parentElement.parentElement.parentElement.querySelector(".commentReplyForm");
    commentReplyForm.classList.toggle("hidden");
  });
});

//toggle report form
document.querySelectorAll("a.commentReport").forEach((elm) => {
  elm.addEventListener("click", async (e) => {
    e.preventDefault();
    const commentReportForm =
      e.target.parentElement.parentElement.parentElement.querySelector(".reportForm");
    commentReportForm.classList.toggle("hidden");
  });
});

//submit report form
const reportForms = document.querySelectorAll(".reportForm");
reportForms.forEach((reportForm) => {
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = {
      content: e.target.content.value,
    };
    fetch(
      `https://strapi.obtuse.kr/api/comments/api::article.article:${e.target.postID.value}/comment/${e.target.commentID.value}/report-abuse`,
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
          e.target.parentElement.parentElement.innerHTML =
            "신고가 접수되었습니다. 댓글 삭제는 검토 후 이루어집니다.";
        }
      })
      .catch((err) => {
        alert(err);
      });
  });
});
