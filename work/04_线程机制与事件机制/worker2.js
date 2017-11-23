/* 分线程上的计算 */
// fibonacci 函数的运算
function fibonacci(number) {
    return number <= 2 ? 1 : fibonacci(number-1)+fibonacci(number-2)
}

var onmessage = function (event) {
    // 获取收到的数据
    var number = event.data
    // 处理数据
    var result = fibonacci(number)
    // 发回数据
    postMessage(result)
}