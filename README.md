# npm-module-calculate-demo

用TypeScript写一个npm模块

### 项目目录

```
├── .editorconfig // 编辑器配置文件
├── .eslintignore // eslint需要忽略的文件
├── .eslintrc.js  // eslint配置文件
├── .gitignore    // git不追踪的文件
├── .npmignore    // npm publish时不提交的文件
├── .prettierrc.json // prettier配置文件
├── index.d.ts	  // 项目主入口类型定义文件
├── index.js	  // 项目主入口js文件，暴露dist目录，不需要改动
├── index.ts	  // 项目主入口ts文件，同上
├── lib			  // 项目源码
│   ├── calculate.ts
│   └── index.ts  // lib目录入口文件
├── package.json  
├── test           // 单元测试文件
│   └── calculate.spec.ts
├── tsconfig.json  // tsc配置文件
└── tslint.json	   // tslint配置文件
```

### npm script

+ `npm run clean` 清空当前`dist`目录
+ `npm run build` 打包项目，用于发布
+ `npm run format` 格式化项目代码
+ `npm run test` 执行测试脚本
+ `npm publish` 发布到npm上，会触发`prepublishOnly `命令

### How

1. 在`lib`目录下coding
2. 把需要`export`出来的通过`lib/index.ts`导出
3. 在`test`目录写测试函数
4. 测试通过后修改版本号后使用`npm publish`发布即可