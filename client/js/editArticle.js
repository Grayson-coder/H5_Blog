// 监听编辑按钮的点击
$('.main-panel .content').on('click', '.edit', async function () {
    // 修改模态框中对应的信息
    $('#addModal .modal-title').html('编辑文章')
    $('#addModal .confirm').html('修改')
    let id = $(this).parent().attr('data-id')
    // 根据要编辑的文章id，发送网络请求，获取编辑的文章数据
    let { data } = await request({
        url: `/article/${id}`,
    })
    let { title, content } = data[0]
    // 初始化编辑的模态框数据
    $('#addModal .modal-body .title').val(title)
    $('#addModal .modal-body .content').val(content)
    $('#addModal .hidden').val(id)
    // 展示模态框
    $('#addModal').modal()
})



// 编辑文章的业务逻辑
async function editArticle() {
    let title = $('#addModal .modal-body .title').val().trim()
    let content = $('#addModal .modal-body .content').val().trim()
    if (!title || !content) return toast('请输入合法的标题和内容！')
    let id = $('#addModal .hidden').val()
    let { data, meta } = await request({
        type: 'put',
        url: `/article/${id}`,
        data: {
            title,
            content
        }
    })
    if (meta.status !== 200) return toast('编辑文章失败')
    toast('编辑文章成功')
    // console.log(data);
    // 关闭模态框
    $('#addModal').modal('hide')
    // 清空文本框中的值
    $('#addModal .modal-body .title').val('')
    $('#addModal .modal-body .content').val('')
    $('#addModal .hidden').val('')
    initHome()
}