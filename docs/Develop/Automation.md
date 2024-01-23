## Mac Cron

### 打开 Cron 配置文件

```
crontab -e
```

### 生效 Cron 配置

```
sudo launchctl stop com.vix.cron
sudo launchctl start com.vix.cron
```

- mac 自动化任务没有权限的处理：https://apple.stackexchange.com/questions/378553/crontab-operation-not-permitted
