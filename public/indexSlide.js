console.log("indexSlide.js");
posts = document.querySelectorAll(".posts-scroll>a");
if (typeof selected === "undefined") selected = 0;
if (typeof autoSlide === "undefined")
  autoSlide = () =>
    anime({
      targets: ".progress-bar2",
      width: "100%",
      duration: 8000,
      easing: "easeInOutQuad",
      complete: () => {
        if (window.location.pathname === "/") {
          console.log("complete");
          document.querySelector(".progress-bar2").style.width = "0%";
          selected += 1;
          if (selected >= posts.length) selected = 0;
          render();
        }
        setTimeout(() => {
          autoSlide();
        }, 300);
      },
    });

function render() {
  posts.forEach((post, index) => {
    anime({
      targets: ".posts-scroll",
      translateX: -selected * 80 + "vw",
      easing: "easeInOutQuart",
      duration: 1200,
      complete: () => {
        document.querySelectorAll(".progress-bar2").width = "0%";
      },
    });
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
          selected += 1;
          autoSlideAni.restart();
          autoSlideAni.pause();
          setTimeout(() => {
            autoSlideAni.play();
          }, 300);
          render();
        };
      } else if (index < selected) {
        post.onclick = (e) => {
          e.preventDefault();
          selected -= 1;
          autoSlideAni.restart();
          autoSlideAni.pause();
          setTimeout(() => {
            autoSlideAni.play();
          }, 300);
          render();
        };
      }
    }
  });
}

render();
if (typeof autoSlideAni === "undefined") autoSlideAni = autoSlide();
