---
sidebar_position: 2
description: Light Limit Changer for MAの一般設定の解説です。
---
# 一般設定の解説
一般設定は、基本的なアバターの明るさの制御についての設定がまとまっています。  
このページでは、その基本項目について解説しています。
<br></br>

:::info
UIはLihgt Limit Changer for MA 1.10.2のものです
:::
:::note
*LLC4MA : Light Limit Changer for MA
:::
![dicsA](/img/docs/description/disc_llcui.png)

## 一般設定の各解説
----
### 初期状態で適用する(ON・OFF)
アバターを新規アップロード・切り替えした際に、最初からLLCが実行されている状態にします。

### パラメータを保持する(ON・OFF)
アバターを変更・ワールド移動をした際に、直前のLLCの設定値を保持したままにします。


### 明るさの上限と下限を別々に設定する(ON・OFF)
明るさの上限と下限を別々に制御するための設定です。  
オンにすると【個別の初期値設定】が有効になり、明るさの制御メニューが[Max Light][Min Light]に細分化されます。
![dicsA](/img/docs/description/disc_light.webp)

### 明るさの上限(0-10)
**[Light]** または **[Max Light][Min Light]** の100%位置での明るさです。   
初期値1以上も設定できますが、光量がすごいことになります。

### 明るさの下限(0-10)
**[Light]** または **[Max Light][Min Light]** の0%位置での明るさです。  
初期値の0以下にはできませんが、0以上にすることで0%位置でも真っ黒にならなくなります。  

<br></br>
:::note
【明るさの上限と下限を別々に設定する】を有効している場合は、個別の初期値設定を使用します。
:::

### 明るさの初期値(0-10)
【明るさの上限と下限を別々に設定する】を有効にしていない場合の設定です。  
初期値かつリセット機能を使用したときに設定される値です。

### 個別の初期値設定(0-10)
【明るさの上限と下限を別々に設定する】を有効にしている場合の設定です。  
**[明るさの上限の初期値][明るさの下限の初期値]** に分けられ、初期値かつリセット機能を使用したときに設定される個別の設定値です。
