## exclude include

```typescript
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [   //不包含的目录
    "node_modules"
  ],
    "include": ["./src/js/*"]   //包含的目录
}

"./src/js/**/*"  2个*号表示所有目录，1g
```

## compilerOptions

```typescript
"compilerOptions": {
    "module": "es2015",//启用什么样的模式
    "target": "es2015",//编译成的es版本
    "outDir": "",//编译的js文件自动储存的目录
    "outFile": "",//编译的js，里面的全局作用域会合并到一个文件中
    "allowJs": false,//是否对JS文件也编译
    "checkJs": false,//是否检查js文件的语法
    "removeComments": false,//是否移除注释
    "noEmit": false,//是否生成编译后的文件
    "noEmitOnError": false,//在有错误的时候是否编译
    "alwaysStrict": false,//是否在编译后的js中使用严格模式
    "noImplicitAny": false,//是否允许隐式的any类型
    "noImplicitThis": false,//是否允许不明确类型的this
    "strictNullChecks": false,//是否严格执行空值检查
    "strict": true,//所有严格检查的总开关,建议打开

    "sourceMap": true
```

