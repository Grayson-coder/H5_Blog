const baseURL = "http://127.0.0.1:5050/blog";

// 基于JQ库的网络请求二次封装
function request(options) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: options.type || "get",
            url: baseURL + options.url,
            data: options.data || {},
            success: (res) => resolve(res),
        });
    });
}
