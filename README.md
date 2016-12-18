## 技术点

- webpack
- babel
- es6/7
- eslint 语法检测
- npm scripts
- react 组件化 基础类库
- mocha
- karma

## webpack + babel

```
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

配置webpack.config.js文件


## 启动本地服务

```
npm install --save-dev webpack-dev-server
```

package.json文件`scripts`中加入:
```
"server": "webpack-dev-server --progress"
```

webpack.config.js文件config对象中加入:
```
devServer: {
    contentBase: 'dist',
    inline: true,
    port: 8080,
    stats: {
        colors: true
    }
}
```

## 使用react

下载babel-preset-react包解析jsx语法
```
npm install --save-dev babel-preset-react
```

在.babelrc文件presets中加入"react"
```
{
    "presets": ["es2015", "react"]
}
```

## 搭建测试环境
- karma 测试运行器
- mocha test framework

```
 ./node_modules/.bin/karma init
```

## eslint
```
./node_modules/.bin/eslint --init
```
