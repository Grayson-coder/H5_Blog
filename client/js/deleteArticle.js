// 监听删除按钮的点击
$('.main-panel .content').on('click', '.remove', function () {
    // 展示删除模态框
    $('#deleteModal').modal()
    // 获取当前文章的id
    let id = $(this).parent().attr('data-id')
    // 将文章id存储到模态框中隐藏的文本框下
    $('#deleteModal .input').val(id)
})

// 监听删除模态框中的确认按钮的点击
$('#deleteModal .confirm').on('click', async function () {
    let id = $('#deleteModal .input').val()
    // console.log(id);
    let { meta } = await request({
        url: `/article/${id}`,
        type: 'delete'
    })
    // 关闭模态框
    $('#deleteModal').modal('hide')
    // 吐司弹窗
    if (meta.status !== 200) return toast('删除文章失败')
    toast(meta.msg)
    // 重新更新数据
    initHome()
})