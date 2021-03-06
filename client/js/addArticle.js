// 监听新增文章按钮的点击
$('.add-article button').on('click', function () {
    // 展示模态框
    $('#addModal').modal()
    $('#addModal .modal-title').html('新增文章')
    $('#addModal .confirm').html('新增')
})


// 新增文章的业务逻辑
async function addArticle() {
    let title = $('#addModal .modal-body .title').val().trim()
    let content = $('#addModal .modal-body .content').val().trim()
    if (!title || !content) return toast('请输入合法的标题和内容！')
    let { meta, data } = await request({
        type: 'post',
        url: '/article',
        data: {
            title,
            content
        }
    })
    // console.log(meta, data);
    // 吐司弹窗
    if (meta.status !== 200) return toast('新增文章失败')
    toast(meta.msg)
    // 数据更新
    initHome()
    // 关闭模态框
    $('#addModal').modal('hide')
    // 清空文本框中的值
    $('#addModal .modal-body .title').val('')
    $('#addModal .modal-body .content').val('')
}