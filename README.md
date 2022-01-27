[TOC]

# create-risu-react-app

描述：生成 react 仓库模版（PC、移动端均可使用）

头像：口袋妖怪-弱丁鱼 🐟，20 级后拥有【鱼群】特性，战斗时如果弱丁鱼血量大于 25%，则触发【鱼群】，6 种属性巨幅增长

## 功能介绍

创建 react 模版仓库，通过配置 postcss 可适应各种屏幕（如移动端配置为 750px，PC 端配置为 1920px）

## 使用指南

```powershell
- yarn global add create-risu-react-app
- create-risu-react-app
# 根据提示输入仓库名 xxx 即可创建仓库

- cd xxx
- yarn
- yarn start
# 即可允许创建好的仓库，locahost:8012/
```

### React App

目前提供了 ts、less、react-router 支持

使用 postcss 将 px 单位转换为 vw，来适应各种尺寸的屏幕
