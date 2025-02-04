---
sidebar_position: 4
description: Light Limit Changer for MAのオプション設定の解説です。
---

# オプション設定の解説
オプション設定は、一部ケースで使用する可能性がある設定がまとまっています。
<br></br>

:::info
UIはLihgt Limit Changer for MA 1.10.2のものです
:::
:::note
*LLC4MA : Light Limit Changer for MA
:::
![dicsA](/img/docs/description/disc_llcui.png)

## オプション設定の各解説
----

### 初期の上限と下限を上書きする
[明るさの下限][明るさの上限]のパラメータで各シェーダーの下限と上限の値を上書きします。  
各シェーダーで異なる上限値・下限値が設定されているときに起こる、メッシュの明るさのズレを無くす機能です。  
便利機能なので初期でONになっています。  
:::warning
例の画像では意図的に下限と上限値を変更しています。
:::
![dicsA](/img/docs/description/disc_override.webp)

### 対象シェーダー(lilToon・Poiyomi・Sunao)
LLC4MAの処理対象のシェーダーを選択することができます。  
特定のシェーダーのみ制御対象から外したい場合などに使用できます。

### Write Default(ON・OFF)
生成するアニメーターのWrite DefaultのON・OFFを設定することができます。  
MA Merge Animatorで指定するものと同等の機能です。
:::info
MMD対応化する際などにご活用ください
:::
### 除外設定
LLC4MAの処理対象のオブジェクトから除外する機能です。  
除外対象のSkinned Mesh Rendererオブジェクトを指定することで、個別に除外することが可能です。