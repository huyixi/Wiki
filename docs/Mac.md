# Mac

## 装机指南

- [sxyazi: 我的 macOS 配置](https://sxyz.blog/macos-setup/)

### 开发环境配置

#### Rust
`brew install rustup-init`
`sudo rustup-init`

## Software

### Software Download

- [XMac.APP](https://xmac.app)
- [appstorrent](https://appstorrent.ru)
- [Yuanyin Mac Software Site](https://maczz.net)
- [Xclient](https://xclient.info)
- [Mac 毒](https://www.macdo.cn)

### Clean

- [OmniDiskSweeper](https://www.omnigroup.com/more)：查看文件占据空间
- [mcleanup](https://github.com/mac-cleanup/mac-cleanup-sh)：命令行清理工具

### 截图
Shottr

## Environment
Mac 开发环境配置
### 修改 Mac 上所有代码文件的默认打开方式为 VS Code

Mac 上很多代码文件的打开方式是 XCode。Xcode 很重很不方便，修改为常用的代码编辑器 VS Code 能更为合适。当然你也可以修改的下面的代码将它改为你想要打开文件的应用程序。

[batch-modify.sh](https://gist.github.com/rxliuli/00fd29e1c01b9a11c841dead5c3b2e98)

```bash
# https://github.com/moretension/duti
brew install duti
# from https://github.com/vscode-icons/vscode-icons/blob/74220b6f8389ad5c5d9f68b2029d91460de2b374/src/iconsManifest/languages.ts#L319
filetypes=(.as .ada .prw .affect .al .ansible .g4 .any .htaccess .cls .apib .apl .applescript .adoc .asp .asm .ats .ahk .au3 .avcs .azcli .azure-pipelines.yml .bal .bat .bats .bzl .bf .bicep .bib .biml .blade.php .blitzbasic .bolt .bsq .buf.yaml .c .cal .cabal .Caddyfile .casc .cddl .ceylon .cfc .cfm .clojure .clojurescript .yml .cmake .CMakeCache.txt .cbl .ql .coffee .cfml .confluence .ckbk .cpp .h .cr .cs .css .feature .cu .pyx .dal .dart .dhall .html .diff .d .dockerfile .dtx .env .dot .dox .drl .dust .dylan .earthfile .edge .eex .es .ex .elm .erb .erl .yaml .falcon .fql .f .ftl .fs .fthtml .gspec .gml .gcode .gen .git .glsl .glyphs .gp .go .api .gd .gr .gql .gv .groovy .haml .hbs .prg .hs .haxe .hcl .helm.tpl .hjson .hlsl .hosts .http .aff .hy .hypr .icl .imba .4gl .ini .ink .iss .io .janet .java .js .jsx .jekyll .jenkins .jinja .json .jsonc .jsonnet .json5 .jl .id .k .kv .ks .kt ..kusto .tex .lat .less .flex .ly .lisp .lhs .log .lol .lsl .lua .mk .marko .mat .ms .mdx .mediawiki .mel .mmd .meson.build .mjml .pq .ep .mongo .mson .ne .nim .nimble .nix .nsi .nunjucks .m .mm .ml .o3 .w .things .pas .pddl .plan .happenings .pl .pl6 .pgsql .php .pine .requirements.txt .txt .dbgasm .ddl .polymer .pony .pcss .ps1 .prisma .pde .pro .rules .properties .proto .pug .pp .purs .arr .py .pyowo .qvs .qml .qs .r .rkt .cshtml .raml .re .red .res .rst .rex .tag .rmd .robot .rb .rs .san .sas .sbt .scad .scala .sce .scss .sdl .shader .sh .slang .ice .slim .ss .sn .eskip .tpl .snort .sol .rq .sqf .sql .nut .stan .bazel .do .stencil .html.stencil .st.css .styled .styl .svelte .swagger .swift .swig .link .sv .tt .teal .tt3 .tera .tf .sty .textile .JSON-tmLanguage .YAML-tmLanguage .Tiltfile .toit .toml .ttcn3 .tuc .twig .ts .tsx .typoscript .u .vb .wsf .vm .v .vhdl .vim .volt .vue .wai .wasm .wy .wgsl .wt .wl .wurst .wxml .xmake.lua .xml .xquery .xsl .bison .yang .zig)

for filetype in "${filetypes[@]}"
do
   duti -s com.microsoft.VS Code $filetype all
   if [ $? -ne 0 ]; then
      echo "Failed to set default program for $filetype"
   fi
done
```

上述代码删除了 .md 的打开方式

如果遇到

```bash
failed to set com.microsoft.VS Code as handler for public.html (error -54)
Failed to set default program for .html
```

可以手动更改 .html 文件的打开方式。具体为：

1. 右键 .html 文件
2. 点击 get info
3. Open with 修改为 VS Code
4. Change All

相关文档说明：

- [Launch Service API failure with specific UTI](https://developer.apple.com/forums/thread/50029)

- <https://stackoverflow.com/questions/26241689/lssetdefaultrolehandlerforcontenttype-in-yosemite>

## 禁用 macOS 的 Gatekeeper 安全功能

有时候下载软件会遇到 "app" can't be opened because Apple cannot check it for malicious software." 导致无法安装

可以通过禁用 Gatekeeper 来安装

```bash
sudo spctl --master-disable
```

```bash
# 重新打开 Gatekeeper
sudo spctl --master-enable
```

## Mac 安装非 App Store 上下载的应用程序提示`"XXX" is damaged and can't be opened. You should move it to the Trash`

命令行输入

```bash
sudo xattr -r -d com.apple.quarantine /YOUR_PATH/XXX.app
```

一般路径是：

```bash
sudo xattr -r -d com.apple.quarantine /Applications/XXX.app
```

## 设置默认 App

### 获取 App Bundle ID

```bash
lsappinfo list | rg --multiline '("[^"]*?") ASN:.*\n.*bundleID=("[^"]*?")' --replace '$1 $2' --only-matching
```

### 文件类型

Mac 中的所有文件类型
[Uniform Type Identifiers](https://escapetech.eu/manuals/qdrop/uti.html#abstract)

### 脚本批量设置

```bash
#!/bin/bash

# 检查 duti 是否安装
if ! command -v duti &> /dev/null; then
    echo "duti 未安装。请先安装 duti。"
    exit 1
fi

# 设置图片文件的默认应用为 qView
duti -s com.interversehq.qView jpg all
duti -s com.interversehq.qView jpeg all
duti -s com.interversehq.qView png all
duti -s com.interversehq.qView gif all
duti -s com.interversehq.qView tiff all
duti -s com.interversehq.qView bmp all
duti -s com.interversehq.qView heic all

# 设置视频文件的默认应用为 IINA
duti -s com.colliderli.iina mov all
duti -s com.colliderli.iina mp4 all
duti -s com.colliderli.iina avi all
duti -s com.colliderli.iina mkv all
duti -s com.colliderli.iina m4v all

# 文本类型使用 Visual Studio Code
duti -s com.microsoft.VSCode txt all
duti -s com.microsoft.VSCode xml all
duti -s com.microsoft.VSCode opml all
duti -s com.microsoft.VSCode js all
duti -s com.microsoft.VSCode json all
duti -s com.microsoft.VSCode css all
duti -s com.microsoft.VSCode md all

# PDF 文件使用 Safari
duti -s com.apple.Safari pdf all

echo "默认应用程序设置已完成。"
```

## Reference

