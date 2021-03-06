// 封装一个吐司弹窗方法
let timerID
function toast(text, type = "info") {
    clearTimeout(timerID)
    $(`.alert-${type}`).html(text).show('fast')
    timerID = setTimeout(() => {
        $(`.alert-${type}`).html('').hide('slow')
    }, 2000);
}


// 时间格式转换方法
function timeFommater(value) {
    var dateee = new Date(value).toJSON();
    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    return date;
}