---
sidebar_position: 1
description: Light Limit Changer for MAの各機能の解説になります。アバターの明るさに関わるパラメーターや、色温度・彩度調節機能の有効化など詳細に設定が可能です。
---

# 概要

各解説のための概要ページです。

:::info
UIはLihgt Limit Changer for MA 1.10.2のものです
:::
:::note
*LLC4MA : Light Limit Changer for MA
:::
各種設定は、アバターの中に生成されたLight Limit Changerプレハブのインスペクターから設定を行います。

![dicsA](/img/docs/description/disc_llcui.png)

### 設定の注意点
LLC4MAでは、各機能にFloatパラメーターを多用しています。  
最大で **49bit** のアバターパラメーターを消費することにご留意ください。  
|必須|機能|型|Bit|
|:---:|:---:|---:|---:|
|○|有効・無効|bool|1|
|○|明るさの上限|float|8|
|○|明るさの下限|float|8|  
||色温度|float|8|
||彩度|float|8|
||モノクロ化|float|8|
||Unlit|float|8|

:::tip
[**一般設定の解説**](/docs/v1/description/disc_general)  
一般設定は、基本的なアバターの明るさの制御についての設定がまとまっています。  
:::
:::tip
[**追加設定の解説**](/docs/v1/description/disc_additional)  
追加設定は、アバターの色や、ライティングからの影響を制御する設定がまとまっています。
:::
:::tip
[**オプション設定の解説**](/docs/v1/description/disc_optional)  
オプション設定は、一部ケースで使用する可能性がある設定がまとまっています。
:::
----
