---
sidebar_position: 1
description: Light Limit Changer for MA v2の各機能の解説になります。アバターの明るさに関わるパラメーターや、色温度・彩度調節機能の有効化など詳細に設定が可能です。
---

# 明るさ・色などが変わらない

特定の服や、特定の箇所のみ色が変わらない場合のチェック項目です。  
以下の項目を参考にしても直らない場合には、[もち屋の実家サポートDiscordサーバー](https://discord.com/invite/aR383QA3nf)の利用をご検討ください

----

### 対応シェーダーではない？

Light Limit Changer v2の対応シェーダーは、lilToon、Poiyomi、UnlitWFシェーダーのみです。  

Questアバターなどをご利用の場合には、MtoonやUTSなどの非対応シェーダーが使用されている場合がございます。
これらシェーダーは明るさの下限や上限を制御する機能そのものがないため、lilToonなどへの変換をご検討ください。

### 制御対象の服などと同一階層に同じ名前のオブジェクトがある

極稀なケースではありますが、同じ名前のオブジェクトが同じ階層に複数ある場合には正常に動作いたしません。

これはUnityの仕様で、アニメーションを動作させるためにオブジェクトの名前を元にしたパス指定を行っているためです。  
同じ同階層に同名のオブジェクトがあると片方にパスが通らず、アニメーションが動作しないことが原因です。  
**名称の被りがないよう、名前の変更をお願いいたします。**  

![objectName](/img/docs/v2/discription/faq/v2-faq-objectname.png)

### メインカラー2ndにテクスチャがある (lilToonの場合)

メインカラー2nd や、メインカラー3rdには明るさなどを変更する機能がないため、そのままでは動作いたしません。

動作するためには、メインカラー2nd/3rdの項目最下にある焼き込みという機能を使うことで、テクスチャを一枚にまとめることができます。  
この機能を使い、メインカラー2nd/3rdをひとつにまとめることで動作するようになります。
![objectName](/img/docs/v2/discription/faq/v2-faq-color2nd.png)

### lilToonMultiシェーダーが使用されている？ (lilToonの場合)

![lilToonMulti](/img/docs/v2/discription/faq/v2-faq-shaderlilmulti.png)  
シェーダー種別がlilToonMultiの場合、lilToonの仕様上明るさを始めとする、逆光ライトなどの機能も正常に動作しません。 
お手数ですが、lilToonOutlineなどへ変更をお願いします。


