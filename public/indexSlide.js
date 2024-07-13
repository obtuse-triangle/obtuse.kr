console.log("indexSlide.js");
posts = document.querySelectorAll(".posts-scroll>div, .posts-scroll>a");
if (typeof autoSlide === "undefined")
  autoSlide = () =>
    anime({
      targets: ".progress-bar2",
      width: "100%",
      duration: 8000,
      easing: "easeInOutQuad",
      complete: () => {
        if (document.querySelector(".progress-bar2").style.width === "100%") {
          document.querySelector(".progress-bar2").style.width = "0%";
          if (window.location.pathname === "/") {
            console.log("complete");
            selected += 1;
            if (selected >= posts.length) selected = 1;
            render();
          }
          setTimeout(() => {
            autoSlideAni.restart();
          }, 1200);
        }
      },
    });
if (typeof selected === "undefined") selected = 0;
else if (selected) autoSlideAni = autoSlide();
function render() {
  anime({
    targets: ".posts-scroll",
    translateX: -selected * 80 + "vw",
    easing: "easeInOutQuart",
    duration: 1200,
    complete: () => {
      document.querySelectorAll(".progress-bar2").width = "0%";
    },
  });
  posts.forEach((post, index) => {
    if (index == selected) {
      anime({
        targets: post,
        scale: 1,
        filter: "blur(0px)",
        easing: "easeInOutQuart",
        duration: 1200,
      });
      post.onclick = null;
    } else {
      anime({
        targets: post,
        scale: 0.9,
        filter: "blur(5px)",
        easing: "easeInOutQuart",
        duration: 500,
      });
      if (index > selected) {
        post.onclick = (e) => {
          e.preventDefault();
          console.log("clickNext");
          selected += 1;
          autoSlideAni.restart();
          autoSlideAni.pause();
          setTimeout(() => {
            autoSlideAni.restart();
          }, 300);
          render();
        };
      } else if (index < selected) {
        post.onclick = (e) => {
          e.preventDefault();
          console.log("clickPrev");
          selected -= 1;
          autoSlideAni.restart();
          autoSlideAni.pause();
          setTimeout(() => {
            autoSlideAni.restart();
          }, 300);
          render();
        };
      }
    }
  });
}

render();
selected == 0 &&
  setTimeout(() => {
    document.querySelectorAll(".next-slide, .posts-scroll>a").forEach((next) => {
      next.onclick = (e) => {
        e.preventDefault();
        selected = 1;
        anime({
          targets: ".posts-scroll",
          translateX: -1 * 80 + "vw",
          easing: "easeInOutQuart",
          duration: 1200,
        });

        posts.forEach((post, index) => {
          if (index == selected) {
            anime({
              targets: post,
              scale: 1,
              filter: "blur(0px)",
              easing: "easeInOutQuart",
              duration: 1200,
            });
            post.onclick = null;
          } else {
            anime({
              targets: post,
              scale: 0.9,
              filter: "blur(5px)",
              easing: "easeInOutQuart",
              duration: 500,
            });
          }
        });
        setTimeout(() => {
          render();
          autoSlideAni = autoSlide();
        }, 1200);
      };
    });
  }, 300);
