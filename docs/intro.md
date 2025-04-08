---
sidebar_position: 1
description: Light Limit Changer For MA は、Modular Avatarを前提としてアバターにライティングの調節アニメーションを追加する非破壊ツールです。

---

# Light Limit Changer

Light Limit Changer For MA は、Modular Avatarを前提としてアバターに非破壊でライティングの調節アニメーションを追加するツールです。

v2.0.0からは有償化し、多機能化しました。  
v1.x.xは引き続き無償で提供を継続いたしますが、サポートは限定的なものとなりますのでご了承ください。

### サポート用Discord

不明点やバグ・動作報告などがあれば
[もち屋の実家サポートDiscordサーバー](https://discord.com/invite/aR383QA3nf)へお問い合わせをお願いします。

----
## Light Limit Changer v1とv2の比較

#### ライティング機能
|機能|v1.x.x 無料版|v2.x.x 有償版|
|:---|:---:|:---:|  
|対応シェーダー|lilToon・Poiyomi・**Sunao**|lilToon・Poiyomi・**UnlitWF**|
|最大消費パラメーター数|49|16 *|
|明るさの上限・下限|◯|◯|
|モノクロ化|◯|◯|
|Unlit|◯|◯|
|エミッション機能|◯|◯|
|光源の向き||◯|
|色相||◯|
|彩度|◯|◯|
|明度||◯|
|ガンマ||◯|
|色温度|◯|◯|
|逆光ライト||◯|
|影環境強度(lilToon)||◯|
|頂点ライト強度(lilToon)||◯|
|距離フェード(lilToon)||◯|
|明るさの上限のAddPass分離(Poiyomi)||◯|
|ライトのモノクロ化のAddPass分離(Poiyomi)||◯|
|PP Animation(Poiyomi)||◯|

*パラメーター圧縮機能を使った場合  
:::info
[シェーダー機能の解説はこちら](/docs/v2/description/disc_feature)
:::
#### オプション機能
|機能|v1.x.x 無料版|v2.x.x 有償版|
|:---|:---:|:---:|  
|処理除外機能|◯|◯|
|パラメーター圧縮機能||◯|
|消費VRAM低減機能||◯|
|プリセット機能|◯|◯|
|動的プリセット機能||◯|
|Anchor Override/Bounds統一機能||◯|

----
## Modular Avatar & NDMF 前提 対応環境

:::caution
**LLC v2.0.0以降はUnity 2022.3.6f1以降にのみ対応しています。**
:::

### LLC v2.2.0～

|条件|前提|最低対応バージョン|
|:---:|:---|:---:|  
|必須|Modular Avatar|1.12.0|  
|必須|Non-Destructive Modular Framework(NDMF)|1.7.0|  
|任意|lilToon|1.3.7|
|任意|Poiyomi Tool Shader|8.1|
|任意|UnlitWF|2.0.0|


:::tip
**LLC 1.8.0 以降 Unity 2022.3.6f1対応**  
引き続き、Unity2019でもお使いいただけます。
:::
<br/>

### LLC 1.8.0～

|条件|前提|最低対応バージョン|
|:---:|:---|:---:|  
|必須|Modular Avatar|1.8.0以降|  
|必須|Non-Destructive Modular Framework(NDMF)|1.0.1|  
|任意|lilToon|1.3.7|
|任意|Poiyomi Tool Shader|8.1|
|任意|Sunao Shader|1.6.2|

## v2.0.0 以降の使い方

:::info
[解説はこちら](/docs/v2/tutorial/howtouse-basic)
:::


## v1.x.x の使い方

:::info
[解説はこちら](/docs/v1/tutorial/howtouse-basic)
:::

## 更新履歴
:::info
[更新履歴はこちら](/docs/changelog)
:::