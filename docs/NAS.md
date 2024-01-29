# NAS

我当前使用的设备信息：
- 产品型号：DS224+
- DSM 版本：DSM 7.2.1-69057 Update 3
以下操作都基于以上内容。时间：`Sat Dec, 2023`

#### ssh 连接群晖
如果在同一个局域网下在命令行中输入以下命令
````${{root/username}}@${{nas 设备地址}}````
nas 设备地址在 控制面板 - 网络界面 - 局域网 DHCH 下的 ip 地址
参考：
- [如何通过 SSH 使用 root 权限登录 DSM/SRM？](https://kb.synology.cn/zh-cn/DSM/tutorial/How_to_login_to_DSM_with_root_permission_via_SSH_Telnet)

#### 群晖 Docker 停止容器
群晖的 Container Manager 中，会遇到无法停止容器的情况，使用以下方法解决
1. ssh 连接到群晖
2. 找到容器的 `./start-stop-status` 脚本，该脚本路径为：`/var/packages/ContainerManager/scripts`。注意在不同的系统版本下路径可能有所不同，我目前版本是 `DSM 7.2.1-69057 Update 3`。
3. 停止容器：`./start-stop-status stop`。如果非 root 用户登录使用 `sudo ./start-stop-status stop`，然后输入密码。
4. 重新开启容器：`./start-stop-status start`
参考：[解决群晖Docker无法停止容器的问题](https://www.huluohu.com/posts/135/)

#### 下载 iCloud 上的照片
docker 镜像：https://github.com/boredazfcuk/docker-icloudpd
无法使用。Error 日志：
```
ERROR No route to icloud.com found. Please check your container's network settings - exiting
ERROR Error debug - traceroute: bad address 'icloud.com'
```
已经尝试过：
```
docker network create \
   --driver=bridge \
   --subnet=192.168.115.0/24 \
   --gateway=192.168.115.254 \
   --opt com.docker.network.bridge.name=icloudpd_br0 \
   icloudpd_bridge
 ```
与其他多种方法，均无法找到 icloud.com。

#### 在根目录下创建文件夹
使用 File Station 是无法在根文件夹下新建文件夹的，需要使用共享文件夹来创建。
控制面板 - 共享文件夹 - 新增

### 内网穿透
#### CloudFlare 实现内网穿透

## 文章教程

[Apple TV × NAS | 揽件日志](https://blog.imalan.cn/archives/apple-tv-and-synology-ds220plus/)

## 要用到的技术栈

内网穿透：[frp](https://github.com/fatedier/frp)
