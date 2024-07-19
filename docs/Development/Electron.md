## 如何查看一个 Electron 应用的源码

查看应用包内容：

• 右键点击应用图标，选择“显示包内容”。

• 浏览包内容中的文件和目录。可以查看 Contents 目录下的各种文件，如 Info.plist、Frameworks、Resources 等，了解使用的框架和资源。

2. 使用命令行工具：

• otool：可以查看二进制文件的动态库依赖。

otool -L /path/to/application.app/Contents/MacOS/application

2. • 这将列出应用程序所依赖的动态库。

• strings：可以查看二进制文件中的字符串信息，可能包含一些技术栈相关的信息。

strings /path/to/application.app/Contents/MacOS/application

如果应用使用 Electron 并使用 asar 打包。

创建一个 app 文件夹存储

sudo mkdir app

解析到 app 文件夹

sudo asar extract /Applications/flomo.app/Contents/Resources/app.asar app
