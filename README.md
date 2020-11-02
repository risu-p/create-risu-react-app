[TOC]

# create-codoon-react-app

描述：生成react仓库模版（PC、移动端均可使用）

头像：口袋妖怪-弱丁鱼🐟，20级后拥有【鱼群】特性，战斗时如果弱丁鱼血量大于25%，则触发【鱼群】，6种属性巨幅增长



## 功能介绍

创建react模版仓库，通过配置postcss可适应各种屏幕（如移动端配置为750px，PC端配置为1920px）



## 使用指南

``` powershell
- yarn global add create-codoon-react-app
- create-codoon-react-app
# 根据提示输入仓库名 xxx 即可创建仓库

- cd xxx
- yarn
- yarn start
# 即可允许创建好的仓库，locahost:8012/
```



### React App

目前提供了 ts、less、react-router 支持

使用postcss将px单位转换为vw，来适应各种尺寸的屏幕

详细说明见：http://git.in.codoon.com/fxd-lib/create-codoon-react-app/blob/master/reactAppTemplate/README.md

