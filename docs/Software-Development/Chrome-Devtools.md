# Chrome Devtools

## Docs

- [Office Docs](https://developer.chrome.com/docs/devtools/)

## Tips

### Toggle Dark Mode

---
开启:

document. designMode = "on"

关闭:

document. designMode = "off"
---

### Debug Mode

---
debugger 模式

该操作应用于，无法使用 DevTools 自带的DOM 定位功能的时候。比如即时设计里的toast 通知，这类DOM 不是常显状态，几秒后会主动消失，故无法通过定位功能捕捉。

先在「控制台」Enter 运行 setTimeout（（）=>｛debugger｝，3000），3秒内触发toast，然后用定位工具选取该 DOM进行样式编辑。
---

### 穿透模式

使用DOM定位功能时，若无法选中理想元素（可能存在多级嵌套），可以按住 shfit 进入穿透模式。该模式和即过设计中按住 command 进行图层穿透类似。

![img](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/UtvGbu.png)

## References

- [Chrome 开发者工具 for Designer（外部分享版）](https://fyze31atzb.feishu.cn/docx/Lfjwdp3JEoZm0dxK5hqcfR4lnOe): 介绍了一些简单的帮助设计师调试网页的简单功能。
