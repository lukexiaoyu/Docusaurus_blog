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

