// 监听登录按钮的点击
$(".login100-form-btn").click(async function (e) {
    e.preventDefault();
    // 获取用户名和密码
    let userName = $(".user-name").val().trim();
    let password = $(".password").val().trim();
    if (!userName || !password) return toast("用户名和密码不能为空", "danger");

    let { data, meta } = await request({
        type: "post",
        url: "/login",
        data: { userName, password },
    });
    if (meta.status !== 200) return toast(meta.errMsg, 'danger')
    toast('登录成功', 'info')
    // 跳转到页面
    setTimeout(() => {
        window.location = '../views/home.html'
    }, 1500);
});
