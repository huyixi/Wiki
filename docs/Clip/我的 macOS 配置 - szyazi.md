---
created: 2023-12-28T10:35:16 (UTC +08:00)
tags: []
source: https://sxyz.blog/macos-setup/
author: 
---

# 我的 macOS 配置

> ## Excerpt
> 这篇文章记录下，一个新的 macOS 需要做的配置，和安装的软件。 键盘布局 使用 Colemak 键盘布局，它比传统 QWERTY 更高效、合理。 在 System Settings - Keyboard - Input Sources - Edit… 中添加 Colemak 以替换 ABC，重新登入系统布局生效。 系统设置 # Auto hide the menubar defaults write -g _HIHideMenuBar

---
这篇文章记录下，一个新的 macOS 需要做的配置，和安装的软件。

## 键盘布局

使用 [Colemak](https://en.wikipedia.org/wiki/Colemak) 键盘布局，它比传统 QWERTY 更高效、合理。

在 System Settings - Keyboard - Input Sources - Edit… 中添加 Colemak 以替换 ABC，重新登入系统布局生效。

## 系统设置

```bash
# Auto hide the menubar defaults write -g _HIHideMenuBar -bool true # Enable full keyboard access for all controls defaults write -g AppleKeyboardUIMode -int 3 # Enable press-and-hold repeating defaults write -g ApplePressAndHoldEnabled -bool false defaults write -g InitialKeyRepeat -int 10 defaults write -g KeyRepeat -int 1 # Disable "Natural" scrolling defaults write -g com.apple.swipescrolldirection -bool false # Disable smart dash/period/quote substitutions defaults write -g NSAutomaticDashSubstitutionEnabled -bool false defaults write -g NSAutomaticPeriodSubstitutionEnabled -bool false defaults write -g NSAutomaticQuoteSubstitutionEnabled -bool false # Disable automatic capitalization defaults write -g NSAutomaticCapitalizationEnabled -bool false # Using expanded "save panel" by default defaults write -g NSNavPanelExpandedStateForSaveMode -bool true defaults write -g NSNavPanelExpandedStateForSaveMode2 -bool true # Increase window resize speed for Cocoa applications defaults write -g NSWindowResizeTime -float 0.001 # Save to disk (not to iCloud) by default defaults write -g NSDocumentSaveNewDocumentsToCloud -bool true # --- Set the system accent color defaults write -g AppleAccentColor -int 6 # Jump to the spot that's clicked on the scroll bar defaults write -g AppleScrollerPagingBehavior -bool true # Prefer tabs when opening documents defaults write -g AppleWindowTabbingMode -string always
```

Dock：

```bash
# Set icon size and dock orientation defaults write com.apple.dock tilesize -int 48 defaults write com.apple.dock orientation -string left # Set dock to auto-hide, and transparentize icons of hidden apps (⌘H) defaults write com.apple.dock autohide -bool true defaults write com.apple.dock showhidden -bool true # Disable to show recents, and light-dot of running apps defaults write com.apple.dock show-recents -bool false defaults write com.apple.dock show-process-indicators -bool false # --- Unpin all apps defaults write com.apple.dock persistent-apps -array ""
```

Finder：

```bash
# Allow quitting via ⌘Q defaults write com.apple.finder QuitMenuItem -bool true # Disable warning when changing a file extension defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false # Show all files and their extensions defaults write com.apple.finder AppleShowAllExtensions -bool true defaults write com.apple.finder AppleShowAllFiles -bool true # Show path bar, and layout as multi-column defaults write com.apple.finder ShowPathbar -bool true defaults write com.apple.finder FXPreferredViewStyle -string clmv # Search in current folder by default defaults write com.apple.finder FXDefaultSearchScope -string SCcf # --- Keep the desktop clean defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false defaults write com.apple.finder ShowMountedServersOnDesktop -bool false # Show directories first defaults write com.apple.finder _FXSortFoldersFirst -bool true # New window use the $HOME path defaults write com.apple.finder NewWindowTarget -string PfHm defaults write com.apple.finder NewWindowTargetPath -string "file://$HOME/" # Allow text selection in Quick Look defaults write com.apple.finder QLEnableTextSelection -bool true # Show metadata info, but not preview in info panel defaults write com.apple.finder FXInfoPanesExpanded -dict MetaData -bool true Preview -bool false
```

Trackpad：

```bash
# Enable trackpad tap to click defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true # Enable 3-finger drag defaults write com.apple.AppleMultitouchTrackpad TrackpadThreeFingerDrag -bool true defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadThreeFingerDrag -bool true
```

Activity Monitor：

```bash
# Sort by CPU usage defaults write com.apple.ActivityMonitor SortColumn -string CPUUsage defaults write com.apple.ActivityMonitor SortDirection -int 0
```

Launch Services：

```bash
# Disable quarantine for downloaded apps defaults write com.apple.LaunchServices LSQuarantine -bool false
```

Safari：

```bash
# For better privacy defaults write com.apple.Safari UniversalSearchEnabled -bool false defaults write com.apple.Safari SuppressSearchSuggestions -bool true defaults write com.apple.Safari SendDoNotTrackHTTPHeader -bool true # Disable auto open downloads defaults write com.apple.Safari AutoOpenSafeDownloads -bool false # Enable Develop Menu, Web Inspector defaults write com.apple.Safari IncludeDevelopMenu -bool true defaults write com.apple.Safari IncludeInternalDebugMenu -bool true defaults write com.apple.Safari WebKitDeveloperExtras -bool true defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true defaults write com.apple.Safari "com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled" -bool true
```

Universal Access：

```bash
# Set the cursor size defaults write com.apple.universalaccess mouseDriverCursorSize -float 1.5
```

Screen Capture：

```bash
# --- Set the filename which screencaptures should be written defaults write com.apple.screencapture name -string screenshot defaults write com.apple.screencapture include-date -bool false
```

Desktop Services：

```bash
# Avoid creating .DS_Store files on USB or network volumes defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```

Disk Images：

```bash
# Disable disk image verification defaults write com.apple.frameworks.diskimages skip-verify -bool true defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true
```

Crash Reporter：

```bash
# Disable crash reporter defaults write com.apple.CrashReporter DialogType -string none
```

AdLib：

```bash
# Disable personalized advertising defaults com.apple.AdLib forceLimitAdTracking -bool true defaults com.apple.AdLib allowApplePersonalizedAdvertising -bool false defaults com.apple.AdLib allowIdentifierForAdvertising -bool false
```

允许打开任何来源的应用：

```bash
sudo spctl --master-disable
```

上面执行完，注销重新登入即可生效。

## 电源管理

```bash
sudo pmset -a displaysleep 15 sudo pmset -a sleep 20 sudo pmset -a disksleep 30 # Disable wake by network sudo pmset -a womp 0 # Disable wake when power source (AC/battery) change sudo pmset -a acwake 0 # Disable wake by other devices using the same iCloud id sudo pmset -a proximitywake 0 # Disable TCP keepalive on sleeping, this will cause "Find My Mac" to be unavailable sudo pmset -a tcpkeepalive 0 # Disable auto update, auto backup when sleeping sudo pmset -a powernap 0 # Enable "full light - half light - off" screen transition, when going to sleep sudo pmset -a halfdim 1 # Auto switch GPU for apps on battery, use separate GPU on charger sudo pmset -b gpuswitch 2 sudo pmset -c gpuswitch 1 # Auto hibernate after a period of time of sleeping sudo pmset -a standby 1 # High power (> `highstandbythreshold`), 2 hours hibernate sudo pmset -a standbydelayhigh 7200 # Low power (< `highstandbythreshold`), 1 hour hibernate sudo pmset -a standbydelaylow 3600 # Sync memory data to disk, and stop powering the memory when hibernating sudo pmset -a hibernatemode 3 # `highstandbythreshold` defaults to 50%
```

设置完后，第一件事是安装 Xcode Command Line Tools：

```bash
xcode-select --install
```

安装后，git、clang 啥的就能用了。以防万一，再记一个 reinstall 方法：

```bash
sudo rm -rf /Library/Developer/CommandLineTools xcode-select --install
```

## 安装 Homebrew

系统所有 App 都使用 Homebrew 管理，安装它：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

对于上架 Mac App Store 的 App，通过 [mas](https://github.com/mas-cli/mas) 优先从 Store 下载。用 brew 安装它：

```bash
brew install mas
```

这样所有 App 的自动检查更新都可以关掉，然后将下面 script 加到 crontab 里即可实现定时自动更新：

```bash
brew update brew upgrade --greedy-auto-updates brew cleanup --prune=all mas upgrade
```

## 安装常用软件

Base

```bash
brew install cmake less gnu-sed wget
```

CLI

```bash
brew install exa bat zoxide fd fzf ripgrep dust tldr tig btop tree tmux starship hyperfine brew install neovim # Network brew install nali aria2 dog httpie nmap telnet # Archive brew install unar sevenzip brotli upx rar # Graphic brew install ffmpeg graphviz exiftool ffmpegthumbnailer # JSON brew install jless jq jc # Writing brew install hugo # macOS brew install duti
```

Utility

```bash
brew install --cask adguard brew install --cask alfred brew install --cask 1password brew install --cask bettermouse brew install --cask maczip brew install --cask downie brew install --cask aerial # Terminal brew install --cask kitty # Browser brew tap homebrew/cask-versions brew install --cask google-chrome # brew install --cask google-chrome-canary brew install --cask firefox brew install --cask microsoft-edge # Filesync mas install 823766827 # OneDrive brew install --cask transmit
```

GUI：

```bash
# Development brew install --cask visual-studio-code brew install --cask fork brew install --cask postman brew install --cask coderunner brew install --cask dash brew install --cask orbstack brew install --cask imhex brew install --cask wireshark brew install --cask proxyman brew install --cask another-redis-desktop-manager mas install 1295203466 # Microsoft Remote Desktop mas install 1296084683 # Cleaner for Xcode ## brew install --cask altair-graphql-client ## brew install --cask charles ## brew install --cask paw # Database brew install --cask datagrip brew install --cask sequel-ace ## mas install 1594061654 # Navicat Premium 16 # Social brew install --cask telegram brew install --cask discord brew install --cask element mas install 836500024 # WeChat ## brew install --cask lark ## mas install 451108668 # QQ ## mas install 1435447041 # DingTalk # Movie brew install --cask mpv brew install --cask iina brew install --cask spotify # Screen recording brew install --cask shottr brew install --cask kap brew install --cask screenflow brew install --cask obs # Writing brew install --cask notion brew install --cask obsidian brew install --cask raindropio mas install 1529448980 # Reeder 5 ## brew install --cask calibre # Disign brew install --cask sip brew install --cask omnigraffle ## mas install 824183456 # Affinity Photo # Others mas install 966085870 # TickTick mas install 1452523807 # Text Scanner ## brew install --cask parallels ## mas install 1453504509 # Dynamic Wallpaper Engine
```

PL

```bash
# Golang brew install go # Node.js brew tap oven-sh/bun brew install node pnpm bun # Rust curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh # Python brew install python # Lua brew install lua luarocks # PHP brew install php composer composer g require psy/psysh
```

Fonts

```bash
brew tap homebrew/cask-fonts # You only need to do this once! brew install --cask font-sf-mono brew install --cask font-fira-code brew install --cask font-roboto-mono brew install --cask font-dejavu-sans-mono brew install --cask font-symbols-only-nerd-font brew install --cask sf-symbols
```

## 配置 SSH

SSH Key 全部由 1Password 管理。修改 `~/.ssh/config` 文件：

```bash
Host * IdentityAgent "~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock" Host github.com Hostname ssh.github.com Port 443 User git
```

然后配置 Git 鉴权、签名，修改 `~/.gitconfig` 文件：

```ini
[core] editor = nvim [user] name = 33 email = 33@gmail.com signingkey = ssh-ed25519 AAAAC3N... [gpg] format = ssh [gpg "ssh"] program = /Applications/1Password.app/Contents/MacOS/op-ssh-sign [commit] gpgsign = true [push] default = current autoSetupRemote = true
```

## 设置默认应用

```bash
duti -s com.microsoft.VSCode .txt all duti -s com.microsoft.VSCode .ass all duti -s io.mpv .mkv all duti -s com.colliderli.iina .mp4 all
```

## Kitty

多年使用 iTerm2，短暂斡旋 Alacritty 后，亦然转向了 Kitty – 它同时具备 Alacritty 的性能、iTerm2 的功能，希望这是我的最后一款终端模拟器。安装它：

将 [配置文件](https://github.com/sxyazi/dotfiles/tree/main/kitty) 克隆到 `~/.config/kitty` 即可完成配置，其中包含：

-   使用 Catppuccin（😸 猫布奇） 配色
    
-   使用 `SF Mono, Regular, 16pt` 字体，`Symbols Nerd Font` 符号字体
    
-   使用 Colemak 的 `ueni` 四组按键作为上下左右：
    
    -   `Alt-u`、`Alt-e` 快速上下滚动
    -   `Cmd-{ueni}` 窗口间跳转，`Cmd-Ctrl-{ueni}` 上下左右分屏
    -   `Cmd-Alt-{ueni}` 调换单个窗口位置，`Cmd-Shift-{ueni}` 调整单个窗口大小
-   `Cmd-/`、`Cmd-Shift-/` 快速滚动到上、下一条命令的位置，`Cmd-Alt-/` 只显示最后一条命令输出
    
-   `Cmd-Enter` 创建新 Tab，`Cmd-[`、`Cmd-]` 前后切换 Tab，`Cmd-Alt-[`、`Cmd-Alt-]` 前后移动 Tab
    
-   `Cmd-w` 关闭单个窗口，`Cmd-Shift-w` 关闭所有窗口（单个 Tab）
    
-   `Cmd-r` 清屏，`Cmd-f` 搜索，`Cmd-Shift-f` 最大化终端（非全屏）
    
-   `Cmd-o` 打开链接、`Cmd-q`、`Cmd-l`、`Cmd-p` 快速选择单字、行、路径
    
-   Neovim 集成：上面窗口管理相关操作同样适用 Neovim，无缝衔接
    
-   ……
    

## Z shell

多年使用 Fish shell 后，换到了 Zsh _without_ Oh My Zsh。Fish 的开箱即用是卖点；可定制性差、Bash incompatible 是槽点。

使用以下命令安装，并设置为默认 Shell：

```bash
brew install zsh echo /opt/homebrew/bin/zsh | sudo tee -a /etc/shells chsh -s /opt/homebrew/bin/zsh # For Intel # echo /usr/local/bin/zsh | sudo tee -a /etc/shells # chsh -s /usr/local/bin/zsh
```

之后将 [配置文件](https://github.com/sxyazi/dotfiles/tree/main/zsh) 克隆到 `~/.config/zsh` 即可配置完成。其中包含：

-   [24 条常用 alias](https://github.com/sxyazi/dotfiles/blob/main/zsh/.zshrc#L4)
-   Fish-like 语法高亮、自动提示、自动补全、子命令匹配，与 Fish 体验别无二致
-   统一 `ueni` 为各模式上下左右相关导航键，如候选菜单导航，Vi mode 光标移动，`Ctrl-{ni}` 行首、尾移动
-   Esc 进入 Vi mode
-   ……

## Squirrel

输入法使用开源的 Squirrel，安装它：

```bash
brew install --cask squirrel
```

安装后在 System Settings 删除所有 Input Sources，只保留 Colemak 与 Squirrel 两个。然后克隆 [rime-config](https://github.com/sxyazi/rime-config)：

```bash
rm -rf ~/Library/Rime git clone git@github.com:sxyazi/rime-config.git ~/Library/Rime
```

切换到 Squirrel，按 Ctrl-Option-\` 重新部署。最后下载 [sxyazi/a11y](https://github.com/sxyazi/a11y/releases) 按键辅助工具，该工具包含以下功能：

-   自动切输入法：切换 App 时，自动将输入法切到 Squirrel。也就是对所有 App 都使用 Squirrel，至于不同 App 的默认中/英模式，在 Squirrel 配置中指定
-   充分利用 R-Command：将其映射为 F19，目前将 Alfred 的呼出 hotkey 设置为 F19，Alfred Universal Actions 设置为 F19-L
-   特定于应用的快捷键：如在 Finder 中按下 Option-T、Option-C，分别对应在当前目录打开 Kitty、VSCode

## Alfred

[Universal Actions](https://www.alfredapp.com/universal-actions/) 是 Alfred 最强大的功能，也是主要卖点。将 [sxyazi/alfred-workflows](https://github.com/sxyazi/alfred-workflows) 导入，其中包括：

-   常用汇率转换（Google Finance 实时数据）
-   UUID 生成
-   时间日期转换
-   常见编解码
-   MD5、SHA1、SHA256 计算
-   图片压缩（TODO）

## ranger

ranger 最后一个版本 v1.9.3 还在 2019 年，已经相当旧了。许多 bug 只在 master 被修复，因此需要从 Git 安装它。

由于 ranger 是个 Python 项目，这里使用 `pipx` 安装并管理它。先安装 `pipx`：

```bash
brew install pipx
```

然后安装 ranger：

```bash
pipx install git+https://github.com/ranger/ranger.git pipx inject ranger-fm Pillow
```

以后可以运行 `upgrade`、`upgrade-all` 更新单个或多个应用：

```bash
pipx upgrade-all
```

## Logitech Unifying

鼠标 Bluetooth 会受 2.4Ghz Wi-Fi 影响，使用 Logitech 的 Unifying Receiver 会好很多。

它的配对软件没有 Homebrew formula，最后更新还在 2018，手动下载安装它：[https://support.logi.com/hc/en-us/articles/360025297913](https://support.logi.com/hc/en-us/articles/360025297913)

## BetterMouse

用腻了 Magic Mouse，但又想要流畅的鼠标体验，使用 BetterMouse。安装后调整以下参数：

-   Scroll tab
    -   Duration: 10
    -   Brake point: 3
    -   Speed: 5
    -   Acceleration: 8
    -   Hori speed: 10
-   Cursor tab
    -   DPI: 1200

## 其它

其它 mpv ranger yabai 等配置后面整理到 [https://github.com/sxyazi/dotfiles](https://github.com/sxyazi/dotfiles)
