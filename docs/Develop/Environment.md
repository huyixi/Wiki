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
