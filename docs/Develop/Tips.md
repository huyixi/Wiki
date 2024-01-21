# 计算机技巧

## 如何批量取消 B 站关注和 YouTube 关注

原文链接：[如何批量取消你的 B 站关注和 YouTube 关注](https://www.ixiqin.com/2024/01/04/how-to-cancel-your-bilibili-and-youtube-followers-in-bulk/)

```javascript
$(".be-dropdown-item:contains('取消关注')").each(function(index, element) {
// 设置延时，比如每个元素延时1000毫秒 * 它们的索引（即第一个无延迟，第二个延迟1000毫秒，依此类推）
setTimeout(function() {
$(element).click(); // 执行点击操作
}, 200 * index);
});
```

## Chrome 截图小技巧

Chrome Dev Tool 里面选中要截图的节点，鼠标右键点击 Capture node screenshot 可以对该节点进行精准截图。
