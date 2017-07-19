#  供应商管理系统

To install:

```bash
$ yarn
```

To develop:

```bash
$ yarn start
```

To build for develop:

```bash
$ yarn run deploy
```

To build for production:

```bash
$ yarn run deploy:prod
```

# 目录结构

```
|- config
|- public
|- src
|  |- components
|     |- Aside 
      |- Button
      |- Input
      |- Step
      |- header
      |- Card
|  |- assets 资源列表
|  |- routes
|     |- Home 首页
      |- QuotesStage 报价阶段
      |- CompletedOrder 已完成订单
      |- HistoryProject 历史项目
      |- WinProject 中标项目
      |- TradingOrder 交易中订单
      |- BidStage 竞价阶段
      |- Login 登录页
      |- ResetPassword 密码重置
|  |- layouts
|     |- LoginLayout
      |- MainLayout 
|
|- .editorconfig
|- .eslintigonre
|- .eslintrc
|- .gitignore
|- README.md
|- package.json
|- yarn.lock
```