# Rime

## 我的 rime 配置

**[rime-config](https://github.com/huyixi/rime-config)**

### Mac 删除系统自带输入法

配置第一项

通过系统的输入法设置面板删除输入法最终还会剩下一个 ABC 的英文输入法。因为我使用的是 Rime 输入法，系统配置了额外的一个输入法会导致切换不方便，所以需要删除该输入法。

1. 关闭 Mac 系统的 `SIP(System Integrity Protection)`

   关于 `SIP` [官方介绍链接](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection)

   1. 关机

   2. intel 芯片的 Mac 按住 `Command + R` 进入恢复模式

      Apple 芯片的 Mac 按住电源键 进入恢复模式

   3. 进入恢复模式后，打开顶部菜单栏  `实用工具`  菜单栏下的  `终端`

   4. 输入以下命令关闭 `SIP` 模式

      >```bash
      >csrutil disable
      >```

      执行后输出以下内容说明执行成功

      >```bash
      >Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect.
      >```

   5. 重启系统即可

2. 重启系统后，打开终端，输入以下命令，打开文件(需要使用 `XCode` 或者 `PlistEdit Pro` 打开)

   >```bash
   >sudo open ~/Library/Preferences/com.apple.HIToolbox.plist
   >```

   根据提示输入密码

   进入系统后会提示有风险之类的消息，先不管，直接关掉

3. 在该文件夹中，依次点开 `Root` - `AppleEnabledInputSources` ，会看到一列 `item` ，找到其中 `KeyboardLayout Name` 为 `ABC` 的那一列，将整列 `item` 删掉，然后 `command + S` 保存。

4. 接着重启电脑，打开输入法设置，就可以看到 `ABC输入法` 被删掉了

5. 重新打开系统的 `SIP`

   重新进入恢复模式，打开终端

   >csrutil enable

6. 重新进入系统，此时的风险提示就消失了

##### 使用小鹤双拼

官方配置库：<https://github.com/rime/rime-double-pinyin。其中收录了自然码双拼、智能ABC双拼、小鹤双拼、MSPY双拼、拼音加加双拼。>
小鹤双拼配置：将官方配置库中的 double_pinyin_flypy.schema.yaml 下载到用户文件夹。设置好后，右键点击任务栏小狼毫图标，选「输入法设定」，只勾选一个「小鹤双拼」。默认方案为繁体，可使用按键F5(部分版本是F4)，将配置默认为简体。

[雾淞拼音](https://dvel.me/posts/rime-ice/#%e5%9f%ba%e6%9c%ac%e5%a5%97%e8%b7%af)

### 常用设置

#### 同步用户资料

[官方指南](https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99)

#### 删除自造词

先把選字光標（用上、下鍵）移到要刪除的用戶詞組上，再按下 Shift+Delete 或 Control+Delete（蘋果鍵盤用 Shift+Fn+Delete）。

#### 修改皮肤

打开或新建 squirrel.custom.yaml（鼠须管）或 weasel.custom.yaml（小狼毫）

style/color_scheme: 你想使用的皮肤名

我喜欢的皮肤：<https://github.com/NavisLab/rime-pifu>

粘贴进去即可

#### 修改候选字为横排显示

squirrel.custom.yaml（鼠须管）或 weasel.custom.yaml（小狼毫）

```
patch：
  style/horizontal： true
```

#### 修改默认输入状态

输入方案文件 `*.schema.yaml`  `switches` `reset`

最好重建一个输入方案 `*.custom.yaml`, 然后以打补丁的方式修改.

#### 右 Shift 上屏

`default.custom.yaml` 文件

```yaml
ascii_composer:
  switch_key:
    Shift_R: commit_code
```

### 用户设定文件夹下的文件内容
文件名文件内容rime.lua快捷输入当前时间punctuation.yaml定义输入符号luna_pinyin.extended.dict.yaml明月拼音扩充词库
custom_phrase.txt 用户自行设置快捷输入 default.yaml 保存系统的默认设置，如果需要修改设置可以新建一个 default.custom.yaml 修改系统的默认配置 default.custom.yaml 用户设置的保存系统配置的文件
系统默认拼音
名称方案名-schema_id描述luna_pinyinluna_pinyin_simp朙月拼音·語句流luna_pinyin_fluency朙月拼音·臺灣正體luna_pinyin_tw自然碼雙拼double_pinyinbopomofobopomofo_tw仓孑cangjie5五笔stroke地球拼音terra_pinyin大写数字numbers12345 -> 一二三四五

### 更改某个应用程序的默认输入方案
1. 查找该应用的 Bundle Identifier 访达->找到应用程序->右键->显示包内容->使用内容编辑器打开->打开info.plist文档->搜索CFBundleIdentifier->该字符串下方的字符串即为该应用程序的 Bundle Identifier
2. 打开 squirrel.custom.yaml 修改 `patch: app_options/com.alfredapp.Alfred: ascii_mode: true` # 打开英文输入

### 资源

[仿 Mac 皮肤](https://github.com/NavisLab/rime-pifu)

#### 教程

- [Rime 输入法安装和使用指北](https://blog.mikelyou.com/2020/07/31/rime-input/#:~:text=2.1%20%E5%80%99%E9%80%89%E8%AF%8D%E6%95%B0%E9%87%8F,%E6%95%B0%E5%AD%971~9%E5%92%8C0%E3%80%82)
