# Kindle

## 电子书资源
- [Library Genesis](https://libgen.is)
## 制作电子书

### 使用 mdBook 制作电子书

适用于有 markdown 源文件来生成电子书

### 工具栈

- [mdbook](https://github.com/rust-lang/mdBook)
- [mdbook-epub](https://github.com/Michael-F-Bryan/mdbook-epub)

### 步骤

1. 安装 mdbook 和 mdbook-epub。官方文档中都有详细步骤，因此不再赘述。

2. 初始化 `mdbook init [book-name]`

3. 生成目录文件 SUMMARY.md

   1. 命令行输入 `tree` 获取各个 md 源文件所在位置
      
   1. 利用 ChatGPT 生成 SUMMARY.md 文件
      prompt:
      
       ```markdown
       任务：生成一个 mdbook 可用的 SUMMARY.md 文件，并以 markdown 的格式给我。
       -----
       文件格式示例：
       # Summary
      
       [Introduction](README.md)
      
       - [My First Chapter](my-first-chapter.md)
       - [Nested example](nested/README.md)
       - [Sub-chapter](nested/sub-chapter.md)
       -----
       我的文件目录树：
       ```

   3. 替换原 SUMMARY.md 中的内容

4. 生成 epub 文件

   1. 在 book.toml 中添加 `[output.epub]`
   2. 执行
      ```mdbook-epub -s true ./```
      这将在 ./book/ 目录中生成 epub 格式的电子书

### 可能用到的操作

- 预览电子书 ```mdbook serve --open```
- 替换 `![]()`
生成电子书的过程中会经常遇到 `![]()` 导致无法生成。可以使用 VSCode 的替换命令，使用正则表达式替换所有该内容。
搜索：```!\[\]\(([^)]+)\)```
替换成：```<!-- ![]() -->```

## 工具

- [Qireader](https://www.qireader.com):RSS to Kindle
- [Newsletter to Kindle](https://app.newslettertokindle.com/profile)
- [o’rly 封面在线生成](https://orly.nanmu.me/)

## 参考

- [把博客变成一本可离线下载的电子书](https://www.owenyoung.com/blog/blog-to-book)
