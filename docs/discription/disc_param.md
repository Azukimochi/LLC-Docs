---
sidebar_position: 1
description: Light Limit Changerの各機能の解説になります。アバターの明るさに関わるパラメーターや、色温度・彩度調節機能の有効化など詳細に設定が可能です。
---

# 設定項目の解説

各機能の解説になります

:::note
*LLC : Light Limit Changer
:::
----
## アバターの明るさに関わるパラメーター

:::info

メイン機能である明るさの変更のパラメーターです  
明るさの下限については服によって0または0.05が設定されているケースが有るため、環境に合わせて調節してください

:::

![dicsA](/img/docs/discription/disc_paramA.png)
#### 初期状態で適用する

- 初期状態でLLCを使用するか選ぶことができます。
#### パラメータを保持する

- ワールド移動・アバターを変更してもLLCの操作状態を保持することができます。
#### 初期の上限と下限を上書きする

- Liltoonシェーダーにおいて各マテリアルごとに明るさの下限/上限が異なる場合におこるアバターの明るさの違いをなくすための機能です。
- これはLLCを有効にしていない状態で働く機能です。
- 便利機能のためデフォルトで有効になっています。
#### 明るさの上限

- LLCで制御する明るさの上限値です。下限値より大きい値にしてください。
- 設定値域[0-10]
#### 明るさの下限

- LLCで制御する明るさの下限値です。上限値より小さい値にしてください。
- 設定値域[0-10]
#### 明るさの初期値

- 明るさの値の初期値になります。ラジュアルメニューの初期位置でもあります。
- 設定値域[0-1]

----
## 色温度・彩度調節などのオプション

:::info

色温度・彩度などの拡張機能を追加します  

:::
:::caution

色合いに不具合が起こる可能性があるため、有効にする際には注意してください

:::
![dicsB](/img/docs/discription/disc_paramB.png)
#### 色温度調節を有効にする

- シェーダーのカラー設定をアニメーションで変更することで、温かみから冷たさを感じる色への色温度表現を提供します。

#### 彩度調節を有効にする

- シェーダーの彩度の設定をアニメーションで変更することで、鮮やかさの表現を提供します。

#### Unlit調節を有効にする

- シェーダーのUnlit（Unlighting）設定をアニメーションで変更することで、ワールドライティングの影響を受けるかどうかの表現を提供します。
#### リセットボタンを追加する

- 各設定を初期値に戻すボタンを追加するオプションです。

----
## オプションの設定項目
![dicsC](/img/docs/discription/disc_paramC.png)

:::info

動作に変更を加える機能になります  
LLCで制御したくないオブジェクト・マテリアルを除外設定で制御できます

:::
#### 対象シェーダー
制御対象のシェーダーをLiltoon / Poiyomi / Sunao シェーダーから選択可能です

#### 明るさの上限と下限を別々に設定する

明るさの上限と下限を別アニメーションに分離することで、柔軟な明るさへの対応が可能になります

#### 追加コントロールをグループ化する

![menu](/img/docs/discription/menu.png)  

色温度・彩度・Unlitの制御メニューを階層化します


#### 除外設定
アニメーションの対象から除外する対象オブジェクト・マテリアルを設定できます
