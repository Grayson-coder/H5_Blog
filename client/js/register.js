
// 监听立即注册的按钮点击
$('.login100-form-btn.register').on('click', async function (e) {
    // 阻止表单默认跳转
    e.preventDefault();
    let userName = $('.user-name').val()
    let password = $('.password').val()
    if (!userName || !password) return toast('请输入合法的用户名和密码!', 'danger')
    let { data, meta } = await request({
        type: 'post',
        url: '/register',
        data: {
            userName,
            password
        }
    })
    // console.log(meta, data);
    if (meta.status !== 200) return toast(meta.errMsg)
    toast('用户注册成功, 即将跳转到登录页面')

    // 返回到登录页面
    setTimeout(() => {
        window.location = '../views/login.html'
    }, 1500);
})