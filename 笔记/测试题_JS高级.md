## 1. git的3个分区及对应的命令
	工作区: git init
	暂存区: git add *
	版本区: git commit -m "xxx"

## 2. git版本控制相关的6个整体操作(不用写命令)
	创建本地仓库
	创建远程仓库
	将本地仓库推送到远程仓库
	本地有更新, 推送到远程仓库
	远程有更新, 拉取到本地
	克隆远程仓库到本地

## 3. 函数有哪几种角色?
	一般函数
	构造函数
	方法
	对象

## 4. 原型链结构图
	function Foo () {}
	var f1 = new Foo()
	var f2 = new Foo()
	var o1 = new Object()
	var o2 = {}
![](https://i.imgur.com/i1iTz9x.png)

## 5. 作用域与作用域链的理解
	作用域:
		一段代码所在的区域, 分为全局作用域和函数作用域
		隔离变量
	作用链
		由内向外的多个作用域形成的链
		查找变量

## 6. 变量提升与函数提升的理解
	变量提升: 在变量的定义语句之前就可以访问到变量, 且值为undefined
	函数提升: 在函数定义语句之前就可以调用函数
	原因:  JS引擎在执行全局代码前和调用函数执行函数体之前会做预处理/解析

## 7. 闭包的理解
	如何产生闭包? 函数嵌套, 内部函数引用外部函数的局部变量, 一旦执行外部函数就产生闭包
	闭包是什么? 被内部函数引用的包含被引用变量的包裹
	闭包的作用? 延长局部变量的生命周期 / 让函数外部能间接操作函数内部的私有数据
	闭包的应用? 循环遍历加监听 / 自定义js模块 / jQuery里包含一个大大的闭包

## 8. JS创建对象的几种模式
	Object构造函数模式
	对象直接量
	工厂函数
	构造函数
	构造函数+原型

## 9. 编码演示JS继承
	function Person (name, age) {}
	Person.setName = function (name) {}
	function Worker (name, age, price) {Person.call(this, name, age)}
	Worker.prototype = new Person()
	Worker.prototype.constructor = Worker
	Worker.prototype.setPrice = function(price){}
	
	var worker = new Worker('Jack', 22, 12000)
	worker.setName('Bob')
	console.log(worker.name, worker.age, worker.price)
	

## 10. JS事件循环机制图
![](https://i.imgur.com/Z0COsg4.png)
