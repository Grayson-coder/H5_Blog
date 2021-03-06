// 初始化页面数据
initHome()

async function initHome() {
    let { data } = await request({ url: "/home", })
    $('.main-panel .content .article').remove()
    let article = ''
    data.forEach(item => {
        // 格式化时间戳
        let time = timeFommater(item.create_time)
        article += `
        <div class="article">
            <div class="article-title">${item.title}</div>
            <div class="article-content">${item.content}</div>
            <div class="article-create_time">发布时间：${time}</div>
            <div class="operation" data-id=${item.id}>
                <a href="javascript:void(0)" class="remove">删除</a>
                <a href="javascript:void(0)" class="edit">编辑</a>
            </div>
        </div>
        `
    })
    $('.main-panel .content').append(article);
}



// 监听新增/编辑模态框中的确认按钮点击
$('#addModal .confirm').on('click', function () {
    // 判断当前是否为新增操作
    let operation = $(this).html()
    if (operation === '新增') {
        addArticle()
    } else {
        editArticle()
    }
})

// 监听退出按钮的点击
$('.exit').click(function () {
    toast('退出成功，即将返回到登录页面')
    setTimeout(() => {
        window.location = '../views/login.html'
    }, 1500);
})


