## 模板语法

### 插值语法

```vue
<p>{{msg}}</p>
```

### 指令语法

```vue
<a v-bind:href="dizhi">wangzhi</a>
```

其实就是标签里的属性，然后前面加v-bind就可以绑定动态值。

简写就是:属性值，，如:class

### 空值语法

字符串或者数字会有空值的时候，

data里表示可以这样

```vue
a:'',
num:Nan,
```

当旋绕到模板的时候字符串显示的是没有，而数字显示的是NaN这非常不美观，因此vue提供了值为空的显示方式

```vue
<p>我今年{{nianling||'--'}}岁</p>//这表示在空值的情况下显示--
```



##  双向数据绑定

```vue
<input type="text" v-model="num">
```

 num同时绑定输入框和num值，

v-model,只能用在表单

## 事件修饰符

### prevent

阻止当前默认事件，

```vue
<a href="xxx" @click.prevent="run"></a> //这里就是阻止了链接事件，而执行click的事件
```

### stop

阻止事件冒泡

### once

执行一次

### capture

适用事件的捕获模式

### self

只有event.target是当前操作的元素才触发事件

### passive

事件的默认行为立即执行，无需等待事件回调执行完毕

## 键盘事件

## 计算属性

所谓计算属性，就是拿data里的数据啦计算形成一个新的属性，就叫计算

```vue
<template>
{{fullname}}
<br>
<input type="text" v-model="msg">
<button @click="run">noam</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      fn:'Luke',
      ln:'Xiao',
      msg:''
    }
  },
  methods:{
    run(){
      this.fullname=this.msg
    }
  },
  computed:{
    fullname:{
      //当有人读取fullname时，get就会被调用，且返回值就作为fullnamd的值
      //1.计算属性被调用一次就会缓存，再次调用不会计算，直接用缓存
      //2.当然依赖数据更改，会再次计算
      get(){
        return `${this.fn}-${this.ln}`

      },
      //当fullname被修改时被调用，按照方法，data数据也会变换
      
      set(value){
        const arr=value.split('-')
        this.fn=arr[0]
        this.ln=arr[1]
      }
    }     

    
  },
  
  
})
</script>

<style scoped>

</style>

```

### 简写方式

```js
fullname(){
	 return `${this.fn}-${this.ln}`  //在没有set的时候可以这么写
}
```

## 监视属性watch

```vue
<template>
<p>今天天气{{info}}</p>
<button @click="qiehuan">切换天气</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      fn:'Luke',
      ln:'Xiao',
      msg:true
    }
  },
  methods:{
   qiehuan(){
     this.msg=!this.msg//用button点击事件来改变msg的boolen,从而改变info
   }
  },
  computed:{
    info(){
      return this.msg ? '炎热':'凉快'//用计算属性加三元来监视info的值
    }
    

    
  },
  watch:{
    msg:{//此处监视msg的变化，msg改变调用一次handler
      immediate:true,//默认是false不调用，true时初始化的时候调用一次handler
      handler(newValue,oldValue){//两个参数分别是新值和旧值


      }

    }
  }
  
})
</script>

<style scoped>

</style>

```

watch监视，对于data属性和计算属性都可以监视

### 深度监视

当属性有多级的时候

如：

```js
num:{
a:1,
b:1
}
```

上面的那种监视就不好用了，必须要开启deep

```js
num:{
deep:true,
handler(){

}
}
```

### watch简写方法

满足条件：

1.同时不具有immediate和deep属性的时候就可以简写

```
info(newValue,o){

}
```

## v-model技巧

### v-model.number

```vue
年龄<input type="number" v-model.number="nianling"> //type和。number一起使用效果最佳
  <p>我今年{{nianling}}岁</p>
```

### v-model.lazy

```vue
 <textarea v-model.lazy="neirong"></textarea>
```

因为v-model是时时更新数据同步的，但是我们有时候可能要输入很多的文字，时时更新效果不好，加上.lazy后，你**切出输入框**之后才保存数据

### v-model.trim

```vue
<input type="text" v-model.trim="lijie">
```

很简单就是去掉输入的前后空格，不加的话，同样会收集前后空格

## 过滤器

就是渲染的时候显示我们想要显示的效果格式，叫过滤

基本语法

```vue
 <p>{{Date.now() | timeF}}</p>
```

就是|后面加个过滤器名称，过滤器自己在下面编辑

编辑如下

***暂时调试出问题了，回头看下怎么回事***

## 内置指令（其它）

### v-text

很简单就是文本的意思

```vue
<p v-text="msg"></p>
```

### v-cloak

1.本质是一个特殊属性，Vue实例创建完毕并接管容器，会删掉v-cloak属性

2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题

```vue
<style>
[v-clock]:{
display:none;
}
</style>
<template>
<p v-clock>{{name}}</p>
</template>
```

### v-once

很简单就是只执行初次动态渲染,以后数据改变不会影响它

```vue
<p v-once>{{name}}</p>
```

### v-pre

就是取消vue的解析功能

一般用在没有语法的标签里，vue直接跳过

```vue
<p v-pre>sdadwd</p>
```

## 自定义指令

```vue
<template>
 <p>{{msg}}</p>
 <p v-big="msg"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      msg:'我是小雨嘻嘻'


    }
  },
  directives:{  //这里是自己编辑的指令
    big(a,b){   //两个参数，第一个是元素，第二个是关于N的一些东西，value就是msg的值
      console.log(a,b)
      a.innerHTML=`<h1>${b.value}--那又怎么样呢</h1>`//下面我们可以自己操作dom来编写
      //在msg变的时候，会自动调用big指令

    }
  },



})
</script>

<style scoped>

</style>

```

## 生命周期

## props

```vue
<template>
<div>
  <p v-for="i in people" :key="i.index">
    {{i.name}}--{{i.age}}--{{i.sex}}
  </p>
  <p>{{msg}}</p>
  <p>{{num}}</p>
  <button @click="add">+</button>
</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "One",
  props:{
    people:{
      type:Object,
    },
    msg:{
      type:String,//设定类型
      required:true,//true表示必须传递的参数,不传组件能渲染，但是控制台会有警告

    },
    demmo1:{
      type:Number,
      default:99//default就是默认值，和required不要一起用
    }
  },
  methods:{
    add(){
      this.num++
    }
  },
  data() {
    return {
      num:this.demmo1,
    }
  }
})
</script>

<style scoped>

</style>
```

props在传值的过程：

1.先确定好要传的值写在props里

2.如果你的props要运算，那么在data里声明变量=this.props里的值，然后渲染时用data,但是组件传值还是传props的值就行

3.要注意的是，计算props里的值的时候，千万不要再模板写运算，不然报错如：

```vue
<p @click="this.num++">{{num}}</p>   
```

这是不可以的，要自己在下面写方法，来绑定方法

4.部分关键字不能作为props属性，如key、ref

## mixin混合

### 局部混合

首先自己写一个js文件gg.ts

```typescript
export const demo1={
    methods:{
        run(){
            console.log('我是mixin-demo1')
        }
    }

}
```

然后在组件中引入

```vue
<template>
<div>
  <!--  这里直接使用run-->
  <button @click="run">mixin演示</button>
</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import {demo1}  from '../gg.ts'

export default defineComponent({
  name: "One",
 
  data() {
    return {
     
    }
  },
  mixins:[demo1],  //配置要混合的内容，里面其实有一个run方法，我们在模板中可以直接使用了
})
</script>

<style scoped>

</style>



```

### 全局混合

不建议使用，一旦使用会影响所有组件

推荐在插件中使用

## 插件

暂时用不起来，再研究

## 组件自定义事件

## 全局总线

