# Setup para app node e typescript

### Start projeto

```sh
$ npm init
$ npm install typescript @types/typescript @types/node -D
$ npx tsc --init

$ npm install express cors
$ npm install @types/express  @types/cors -D
$ npx tsc
```

---

### Compilando com ts-node

```sh
$ npm install ts-node-dev -D
$ npm install tsconfig-paths -D
```

> Configurar tsconfig.json [outdir, rootdir, typeRoots, baseUrl, paths, include]

---

### Build com babel

```sh
$ npm install  @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript
@babel/plugin-proposal-decorators babel-plugin-module-resolver  -D
```

> criar babel.config.js

---

### Testes com Jest

```sh
$ npm install jest ts-jest supertest @types/jest @types/supertest -D
$ npx jest --init
```

> Configurar jest.config.js [preset, moduleNameMapper]

---

### Eslint

```sh
$ npm install eslint -D
$ npx eslint --init
```

> Configurar eslinttrc.json ../vsconde/setting.json

### Variaveis de ambiente com dotenv

```sh
$ npm install dotenv
```

> Criar arquivo .env e carregar na inicializacao

**Referencia: https://www.youtube.com/watch?v=rCeGfFk-uCk**
