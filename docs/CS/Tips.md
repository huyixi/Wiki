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

### npm run dev 并使用 Chrome 打开，并在打开前关闭该 port

```
/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome http://localhost:4321
```

示例：

```
astro dev & lsof -ti :4321 | xargs kill -9 & /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome http://localhost:4321
```

### iTerm 的快捷键

ctrl + a/e 快速切换到当前正在输入的文本的头部／尾部
ctrl + u 清空当前输入
cmd + T 打开一个新的 iterm2 Tab
cmd + 方向键 左右切换 Tab
cmd + D 分屏
cmd + K 清屏
cmd + N 打开一个新的 iterm2 窗口

## 参考链接

- [fe-dev-playbook](http://fe.surge.sh)：zhangyuang （阿里前端）的打造舒适高效的前端开发环境。其中有一些调试相关信息。
- [我的 macOS 配置 - 三咲雅](https://sxyz.blog/macos-setup/)
- [强迫症的 Mac 设置指南](https://github.com/macdao/ocds-guide-to-setting-up-mac)
