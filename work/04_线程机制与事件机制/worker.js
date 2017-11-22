/* TODO 分线程 代码 */

// 定义计算函数 fibonacci
function fibonacci(number) {
    return number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2)
}

var onmessage = function (event) {
    // 分线程接收主线程发送的消息（数据）
    var number = event.data
    console.log("分线程接收主线程发送的消息",number);

    // 计算函数
    var result = fibonacci(number)

    // 分线程向主线程返回消息（结果数据）
    postMessage(result)
    console.log("分线程向主线程返回消息",result)

}