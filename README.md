# ts-node
- TypeScriptでNode.js, Expressを始めるための雛形.
- CircleCIを使ったElastic Beanstalkへのデプロイ付き.
- `circleci`と`.elasticbeanstalk`のファイルは修正する必要有り.

# Usage
## nodemon
```bash
git clone git@github.com:solareenlo/ts-node.git
cd ts-node
docker-compose up -d --build
```
で, nodemonが走って, `localhost:3002/api/v1`にアクセスする.

## lint
```bash
git clone git@github.com:solareenlo/ts-node.git
cd ts-node
npm i
npm run lint
```

## build
```bash
git clone git@github.com:solareenlo/ts-node.git
cd ts-node
npm i
npm run build && start
```
