---
sidebar_position: 4
description: Light Limit Changer for MA v2の各機能の解説になります。アバターの明るさに関わるパラメーターや、色温度・彩度調節機能の有効化など詳細に設定が可能です。
---

# 設定のコピーと共有

各設定値は、インスペクターの各項目右上の「︙」メニューからコピー＆ペーストが可能です。  

### コピー方法
「設定をコピー」は、その項目の設定値をコピーします。  
「設定をコピー(グループ全体)」は、その配下にある項目群すべてをコピーします。

例えば、lilToonメニューで「設定をコピー」をした場合には「影環境強度」「頂点ライト強度」のみがコピーされますが、「設定をコピー(グループ全体)」をした場合には、配下の距離フェードと逆光ライトの設定値もコピーすることができます。  

### 貼り付け方法 
貼り付け時には、クリップボードに保持されている内容と整合性が取れた場合にのみ貼り付け可能になります。  
距離フェードの値を逆光ライトに貼り付けようとした場合には押せない状態になります。

![settingscopy](/img/docs/v2/description/tips/v2-tips-copysettings.png)

### 主な使い道
この機能は、フレンド同士で設定値を共有したい場合などにご利用いただけます。  

例に、作者がいつも使っている距離フェードの設定値です。  
```json
{
  "Type": "LilDistanceFadeSettings",
  "FadeColor": {
    "Value": {
      "r": 0.03921569,
      "g": 0.01568628,
      "b": 0.007843138,
      "a": 1
    },
    "Enable": true,
    "Animation": true,
    "Saved": true,
    "Synced": true
  },
  "Start": {
    "Value": 0.1,
    "Enable": true,
    "Animation": true,
    "Saved": true,
    "Synced": true
  },
  "End": {
    "Value": 0.05,
    "Enable": true,
    "Animation": true,
    "Saved": true,
    "Synced": true
  },
  "Strength": {
    "Value": 0.8,
    "Enable": true,
    "Animation": true,
    "Saved": true,
    "Synced": true,
    "MinMaxRange": {
      "x": 0,
      "y": 1
    }
  },
  "BackfaceForceShadow": {
    "Value": false,
    "Enable": true,
    "Animation": true,
    "Saved": true,
    "Synced": true
  },
  "Enable": true
}
```