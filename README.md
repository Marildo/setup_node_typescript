# Setup para app node e typescript

### Start projeto

```sh
$ npm init
$ npm install typescript -g
$ npm install express @types/express
$ tsc --init
$ tsc
```

---

### Compilando com ts-node

```sh
$ npm install ts-node-dev --save-dev
$ npm install tsconfig-paths --save-dev
```

> Configurar tsconfig.json [outdir, rootdir, typeRoots, baseUrl, paths, include]

---

### Build com babel

```sh
$ npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
```

> criar babel.config.js

---

### Testes com Jest

```sh
$ npm install jest @types/jest  ts-jest --save-dev
$ npx jest --init
```

> Configurar jest.config.js [preset, moduleNameMapper]

---

### Eslint

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

> Configurar eslinttrc.json ../vsconde/setting.json

**Referencia: https://www.youtube.com/watch?v=rCeGfFk-uCk**
