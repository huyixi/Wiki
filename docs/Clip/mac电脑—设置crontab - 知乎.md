---
created: 2023-12-27T16:31:57 (UTC +08:00)
tags: []
source: https://zhuanlan.zhihu.com/p/564215492
author: 
---

# mac电脑—设置crontab - 知乎

> ## Excerpt
> 设置一个定时任务，任务如下，该任务在linux服务器上是可以执行的。 */1 * * * * python3 /Users/test.py 但是这个任务在mac上是不能执行的。 需要按照一下步骤执行，肯定能搞定，如果还搞不定，私信我。 1、确保c…

---
设置一个定时任务，任务如下，该任务在linux服务器上是可以执行的。

\*/1 \* \* \* \* python3 /Users/test.py

但是这个任务在mac上是不能执行的。

需要按照一下步骤执行，肯定能搞定，如果还搞不定，私信我。

1、确保crontab在mac上是运行的

```text
# 定时任务统统由 launchctl 来管理的，看看 cron 任务有没有在里面 sudo launchctl list | grep cron # 有记录。查看一下启动项的配置 locate com.vix.cron # 创建一个database sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist # 查看 /etc/crontab 是否存在 ls -alF /etc/crontab # 创建该文件(如果不存在) sudo touch /etc/crontab
```

2、验证crontab是否可以执行

crontab -e：编写定时任务脚本

```text
验证 crontab 是否可真正执行 # 每分钟输出当前时间到time.txt上. */1 * * * * /bin/date >> /User/time.txt
```

如果文件有内容，说明能执行。跳转到第4步。

如果文件没有内容，说明crontab不能执行，问题点出在了mac的系统上，看第3步。

3、mac开启crontab的权限

切记，需要勾选。

```text
系统是 OSX 10.15 Catalina 以上的 对 cron 的权限进行了限制 需要在 系统偏好设置 里将 cron 添加 完全磁盘访问权限 重点在这里：：： 系统偏好设置 -> 安全性与隐私 -> 选择 隐私 -> 左侧菜单找到完全磁盘访问权限 cron 程序所在目录: 终端输入 whereis cron 打印：/usr/sbin/cron 再输入 open /usr/sbin 在打开的文件夹内找到 cron 把这个文件直接拖动到 系统偏好设置 右侧应用列表框内。勾选上。 可以参考这个动图：https://www.d3tt.com/view/109
```

4、使用绝对路径

使用python脚本，可能任务还是不执行，主要的原因是：crontab中找不到python的路径。

这个时候需要使用python的绝对路径以及脚本的绝对路径。

```text
如何找python的绝对路径。 which python3
```
