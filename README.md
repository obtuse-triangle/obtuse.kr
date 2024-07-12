# obtuse.kr(개시예정) 개인 블로그 및 포트폴리오 사이트

## 🚀 시작하기

> 이 프로젝트는 strapi에 의존성을 가집니다. [strapi를 설치](https://docs.strapi.io/dev-docs/quick-start)한 후 .env 파일과 /public/post/comment.js파일에 strapi의 주소와 토큰을 입력해주세요.
> .env 파일의 예시는 .env.example을 참고하시기 바랍니다. 샘플 구동은 .env.example에 있는 주소와 토큰을 사용하실 수 있습니다.
> (단, CORS 정책으로 인해 샘플 api로 호스팅 시에 주소는 http://localhost:4321 또는 http://127.0.0.1:4321으로만 가능합니다)

```
git clone https://github.com/obtuse-triangle/obtuse.kr.git
cd obtuse.kr
npm install
npm run dev
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
