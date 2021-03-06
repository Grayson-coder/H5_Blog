// 监听搜索按钮的点击
$('.material-icons').on('click', async function (e) {
    // 阻止表单默认提交
    e.preventDefault()
    let key = $('.search').val()
    let { data, meta } = await request({
        type: 'post',
        url: '/article/key',
        data: {
            key
        }
    })
    $('.main-panel .content .article').remove()
    let article = ''
    data.forEach(item => {
        let time = item.create_time.substr(0, 10) + ' ' + item.create_time.substr(12, 7)
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
})