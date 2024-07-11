console.log("indexSlide.js");
posts = document.querySelectorAll(".posts-scroll>a");
if (typeof selected === "undefined") selected = 0;

function render() {
  posts.forEach((post, index) => {
    anime({
      targets: ".posts-scroll",
      translateX: -selected * 80 + "vw",
      easing: "easeInOutQuart",
    });
    if (index == selected) {
      anime({
        targets: post,
        scale: 1,
        filter: "blur(0px)",
        easing: "easeInOutQuart",
      });
      post.onclick = null;
    } else {
      anime({
        targets: post,
        scale: 0.9,
        filter: "blur(5px)",
        easing: "easeInOutQuart",
      });
      if (index > selected) {
        post.onclick = (e) => {
          e.preventDefault();
          selected += 1;
          render();
        };
      } else if (index < selected) {
        post.onclick = (e) => {
          e.preventDefault();
          selected -= 1;
          render();
        };
      }
    }
  });
}

render();
