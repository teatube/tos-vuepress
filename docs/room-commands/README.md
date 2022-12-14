# 房间指令合集

### `/help` 或 `/h` 或 `/?`

查看指令一览 

## 通用指令

### `/setting` 或 `/s` 

查看房间设置

### `/ai [1-36]`

玩家ai等级设定

### `/chat_rec [on/off] `

用户全局接受房间聊天开关

### `/reset_stats [密码] `

重置玩家数据（不会影响茶服查）

### `/password_change [旧密码] [新密码] `

修改登录密码，小转无法查到通过此方法更改的密码

### `/score [reset] `

重置自己当前房间胜场 

### `/list`

 查看玩家编号（0-5）及列表

## 单挑房

### `/spec` 或 `/sp` 或 /`ob` 

单挑房：移动到观战区

### `/play` 或 `/pl` 或 `/join` 

单挑房：移动到游戏区

## 房主/创房者限定

### `/hurryup [自然数/on/off] `

hurryup开关，写自然数时0为关闭，大于0时为秒数

### `/rated [on/off] `

单挑房：段位分数变动开关

### `/garbage [参数]` 或 `/g [参数]` 

**垃圾行种类设置**

```
/g toj 默认
/g huopin 火拼交错垃圾行
/g wide [x] 指定宽度
/g air 空气垃圾行
/g one 固定位置一长洞
/g zigzag [x] Z拐弯型（x宽）
/g long [x]
/g tspin 可T-spin型垃圾行
/g tetro
/g messy [x]
/g 1234
/g 4321
```

### `/start`

 开始游戏（观战房主也可以）

单挑房内，默认创房者仍然保持房主，此时房主可以执行本命令开始双方对局

### `/bot [on/off]`

 ai玩家开关。**单挑房也可以**。

### `/score [first|place|ko|reset|resetall] `

胜场计分设置：第一 / 排名 / ko数 / 重置自己分数 / 全房重置

- 开启段位分、并使用first（默认）的情况下，胜场计分会随glicko局数变化，reset无效

### `/kick [0-5]/(name)/(teaId)]`

将用户移出房间（不能移出自己/创建者）

## 创房者限定

### `/host`

创房者限定，获取房主

### `/hardhost [on/off]`或 `/h [on/off]`

强心房主开关。关闭时则恢复房主的**【第一流动制】**

单挑房内，默认创房者仍然保持房主，此时房主可以执行本命令恢复第一流动。

### `/switchhost [[0-5]/(name)/(teaId)]` 或 `/sh [[0-5]/(name)/(teaId)]` 

更换房主。可以切开关

### `/chat [on/off] `

创房者限定，房间内聊天开关，默认开启
