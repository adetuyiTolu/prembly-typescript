# Changelog

## 0.1.0 (2026-02-20)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/adetuyiTolu/prembly-typescript/compare/v0.0.2...v0.1.0)

### Features

* **mcp:** add initial server instructions ([c56cc33](https://github.com/adetuyiTolu/prembly-typescript/commit/c56cc33cfde6e3f73fe28cec672f28a4cbb3b413))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([d4d6101](https://github.com/adetuyiTolu/prembly-typescript/commit/d4d6101f8785b38324b7b1951e58b2d82632716f))
* **client:** avoid removing abort listener too early ([592bfb8](https://github.com/adetuyiTolu/prembly-typescript/commit/592bfb8c58d5fcabfb5b90ae617a520dbc15b67e))
* **client:** invalid URL ([8cc1b50](https://github.com/adetuyiTolu/prembly-typescript/commit/8cc1b50fcf5133fcb147078549f9ede83aa15cbe))
* **docs:** fix mcp installation instructions for remote servers ([c53de7b](https://github.com/adetuyiTolu/prembly-typescript/commit/c53de7bb9508d7e62938a6738422a033dd226ce0))
* **mcp:** allow falling back for required env variables ([ef5ba9b](https://github.com/adetuyiTolu/prembly-typescript/commit/ef5ba9b9dee4bc19b12f5626d620fa7fe7b70b3e))
* **mcp:** correct code tool api output types ([832ca05](https://github.com/adetuyiTolu/prembly-typescript/commit/832ca05bf72954e1a68d305cf21f9ed623339ec7))
* **mcp:** fix env parsing ([a2205a0](https://github.com/adetuyiTolu/prembly-typescript/commit/a2205a0c979d2ef60a54d6f71235a071765faabd))
* **mcp:** fix options parsing ([ce81740](https://github.com/adetuyiTolu/prembly-typescript/commit/ce81740eb38bf0e4e07e6910f5f4d71bb969e784))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([aac9055](https://github.com/adetuyiTolu/prembly-typescript/commit/aac90554413db2f94bddde45c436a18250a31b95))
* **mcp:** update code tool prompt ([ed99fc2](https://github.com/adetuyiTolu/prembly-typescript/commit/ed99fc247b30740fafef0b9409395a8debfee8bd))


### Chores

* break long lines in snippets into multiline ([f53b6e5](https://github.com/adetuyiTolu/prembly-typescript/commit/f53b6e5313d87e59c10a4b1b02ab5930de485da5))
* **ci:** upgrade `actions/github-script` ([9c9cd8d](https://github.com/adetuyiTolu/prembly-typescript/commit/9c9cd8db24f0703d14dcef2a1cfb61a1d9c42027))
* **client:** do not parse responses with empty content-length ([f2da690](https://github.com/adetuyiTolu/prembly-typescript/commit/f2da690524d0cdf0e9e0cdb5bd0a48dedd8f0abd))
* **client:** restructure abort controller binding ([cd516b0](https://github.com/adetuyiTolu/prembly-typescript/commit/cd516b094be0f9534edeb825b4e54312820f6ad7))
* **internal/client:** fix form-urlencoded requests ([879d67e](https://github.com/adetuyiTolu/prembly-typescript/commit/879d67e712ffe43a158c52cf95c01a333689693e))
* **internal:** add health check to MCP server when running in HTTP mode ([adb1546](https://github.com/adetuyiTolu/prembly-typescript/commit/adb15461030ef62830b1583a3a360a25d6d59657))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([6c4f116](https://github.com/adetuyiTolu/prembly-typescript/commit/6c4f116107c8169d79919ee6734b4dc9262eb3e2))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([99314ff](https://github.com/adetuyiTolu/prembly-typescript/commit/99314ff3c3cd69b9264835ac662bcf460a646c59))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([ef45e86](https://github.com/adetuyiTolu/prembly-typescript/commit/ef45e869ddf625708edbd6ee68fcac6ff5b00333))
* **internal:** avoid type checking errors with ts-reset ([dea62e0](https://github.com/adetuyiTolu/prembly-typescript/commit/dea62e080bb6010be0115eab673cb6017bd3699c))
* **internal:** bump MCP dependencies ([18f97f3](https://github.com/adetuyiTolu/prembly-typescript/commit/18f97f3f07892b4a2ce733a2c8281b472d211b14))
* **internal:** cache fetch instruction calls in MCP server ([7747d17](https://github.com/adetuyiTolu/prembly-typescript/commit/7747d17bc3a5f6cbe0d0e418e5ec9d40eb08ca15))
* **internal:** codegen related update ([2fa22ab](https://github.com/adetuyiTolu/prembly-typescript/commit/2fa22ab81124a1d3a968938b041b53c839117015))
* **internal:** codegen related update ([b38342e](https://github.com/adetuyiTolu/prembly-typescript/commit/b38342ee13c1f1d64f399ce792d1e541a4fa0d58))
* **internal:** codegen related update ([4ff8d15](https://github.com/adetuyiTolu/prembly-typescript/commit/4ff8d158b9bb3977452a04b71d334d1eb4abf685))
* **internal:** codegen related update ([c2e5a30](https://github.com/adetuyiTolu/prembly-typescript/commit/c2e5a30660aab3a43c8793fdea01c90421b28860))
* **internal:** codegen related update ([a83d8a4](https://github.com/adetuyiTolu/prembly-typescript/commit/a83d8a4ab9b68070da7e3f1817dd95407c66aa49))
* **internal:** codegen related update ([e5d9fc2](https://github.com/adetuyiTolu/prembly-typescript/commit/e5d9fc22abd176f08ddd5f02cbf35b16057b08cd))
* **internal:** fix dockerfile ([f363b34](https://github.com/adetuyiTolu/prembly-typescript/commit/f363b34c97cea3e8f07b16f4c36fe98d44c851e4))
* **internal:** improve layout of generated MCP server files ([849f6ae](https://github.com/adetuyiTolu/prembly-typescript/commit/849f6ae04a7feafa9a7d186fc801f8379f25459f))
* **internal:** improve reliability of MCP servers when using local code mode execution ([e628590](https://github.com/adetuyiTolu/prembly-typescript/commit/e628590d8ed892199fa11b8710f2ad42c356441f))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([e5bf223](https://github.com/adetuyiTolu/prembly-typescript/commit/e5bf223451c715ceefef7ad822bd816a98bcc1ff))
* **internal:** remove mock server code ([082d78b](https://github.com/adetuyiTolu/prembly-typescript/commit/082d78bf404e39786063adf2d84b2691d6308139))
* **internal:** support oauth authorization code flow for MCP servers ([00fbea6](https://github.com/adetuyiTolu/prembly-typescript/commit/00fbea64e24439131eb3d816b456d67288109692))
* **internal:** update `actions/checkout` version ([c6df416](https://github.com/adetuyiTolu/prembly-typescript/commit/c6df4167c81833ffc48aa14f3b2ae41ce0abb665))
* **internal:** update lock file ([ac9e703](https://github.com/adetuyiTolu/prembly-typescript/commit/ac9e70314cef047ea230bf84a66c1bcbaebab779))
* **internal:** upgrade babel, qs, js-yaml ([740c025](https://github.com/adetuyiTolu/prembly-typescript/commit/740c02515ce161e09eb4100aa83443b57d5dd8b4))
* **internal:** upgrade brace-expansion and @babel/helpers ([ef975c8](https://github.com/adetuyiTolu/prembly-typescript/commit/ef975c84420809a58a3baae2821db111f95d72db))
* **internal:** upgrade pnpm ([6cc7aa6](https://github.com/adetuyiTolu/prembly-typescript/commit/6cc7aa672ff99188563dd26715191994189c5207))
* **mcp:** add intent param to execute tool ([9813a9b](https://github.com/adetuyiTolu/prembly-typescript/commit/9813a9be01e1c1e39d035e64d103b44fcd517d45))
* **mcp:** correctly update version in sync with sdk ([5c86818](https://github.com/adetuyiTolu/prembly-typescript/commit/5c868182a135e13b4e3fd0e71f4b4479637fd47d))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([90c1568](https://github.com/adetuyiTolu/prembly-typescript/commit/90c15687b4f77a20ecc6134c36aa1c07e7b84b6d))
* **mcp:** pass intent param to execute handler ([2bba604](https://github.com/adetuyiTolu/prembly-typescript/commit/2bba6048b3f677f4ad2aee8028de971ef6d1c50e))
* **mcp:** up tsconfig lib version to es2022 ([f6a97ca](https://github.com/adetuyiTolu/prembly-typescript/commit/f6a97ca7b47bf7218a6675ef6aece1081b741c99))
* **mcp:** upgrade dependencies ([8c54e28](https://github.com/adetuyiTolu/prembly-typescript/commit/8c54e2851ff277ea636304e3addae69d6b419070))
* update mock server docs ([305d525](https://github.com/adetuyiTolu/prembly-typescript/commit/305d5250dd836044d3d8744fe57dc0ad52f2b86a))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([b4bc79c](https://github.com/adetuyiTolu/prembly-typescript/commit/b4bc79c5a3048cf8aa56a764667fe76309a5f3c9))

## 0.0.2 (2025-12-27)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/adetuyiTolu/prembly-typescript/compare/v0.0.1...v0.0.2)

### Chores

* configure new SDK language ([9004219](https://github.com/adetuyiTolu/prembly-typescript/commit/9004219a07a7feadf25fbc3e86ef971877553246))
* **internal:** configure MCP Server hosting ([0f9fa89](https://github.com/adetuyiTolu/prembly-typescript/commit/0f9fa898aef248f268832b0bfc7225dcd43d40fe))
* update SDK settings ([4cb51ee](https://github.com/adetuyiTolu/prembly-typescript/commit/4cb51ee9c0d91adf01b8e9b6fe244e493bd37d6e))
* update SDK settings ([1b797b4](https://github.com/adetuyiTolu/prembly-typescript/commit/1b797b4b9ecc49bd8b5c5c7ba98a4f7c3a616a86))
