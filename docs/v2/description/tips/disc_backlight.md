---
sidebar_position: 3
description: Light Limit Changer for MA v2の各機能の解説になります。アバターの明るさに関わるパラメーターや、色温度・彩度調節機能の有効化など詳細に設定が可能です。
---

# 逆光ライトの使い方と設定

こちらでは、逆光ライトの使い方を説明しています。

### 顔や口の中に逆光が落ちないようにするひと手間

逆光ライトを使用したとき、鼻先が光ってしまったり、口の中に逆光ライトが落ちたりしてしまうことがあります。  
これは、逆光ライトのマスクを使用することで、逆光が発生してほしくない部分を指定することで回避することができます。

もし、この逆光ライトのマスク画像を作るのが面倒な場合は、すでに輪郭線に割り当てられているマスク画像を流用することで簡易的にこれを防ぐことができます。
この方法については下の画像を御覧ください。

### Maskの有無の比較  

左：Maskなし　右：Maskあり

![objectName](/img/docs/v2/description/tips/v2-tips-backlight-compare.png)  

Avatar:マヌカ by STUDIO JINGO  

----

### lilToonの場合
![objectName](/img/docs/v2/description/tips/v2-tips-backlightmask.png)

----

### Poiyomiの場合
![backLightMaskPoiyomi](/img/docs/v2/description/tips/v2-tips-backlightmask_poiyomi.png)

### 逆光ライトの簡単な使い方

最低限逆光をうまく付ける方法のフロー

<details>
    <summary> Step 1. **光源の向き**で影の方向を決める </summary>

    ライティング設定にある「光源の向き」機能を使います。  
    これを使うことで、任意の方向から逆光をつけることができます。  
</details>

<details>
    <summary> Step 2. **影の範囲**で影のつき方を決める </summary>
    
    **影の範囲**機能は最初戸惑ってしまうかもしれませんが、0%が最大で、100%に近づくにつれ逆光の範囲が狭くなります。  
    これを調節し、逆光のつき方を満足のゆく形に調節します。
</details>

<details>
    <summary> Step 3. **影のぼかし**で逆光をなじませる </summary>

    **影のぼかし**は、逆光と影の部分の境界をぼかす機能です。  
    これで、ワールドの雰囲気に合うように境界をなじませます。  

    Bloomがかかっているワールドでは、ぼかしを強めにかけるといい感じかもしれません。  

</details>

<details>
    <summary> Step 4. **逆光の色**で逆光の強さ・色を変える </summary>

    **逆光の色**では、色合いだけではなく逆光の光る強さも変えることができます。  
    暗めのワールドでは薄く、明るいワールドでは強く光らせることができます。

    赤い光源をバックにしたときには、逆光の色も赤くしてあげると雰囲気が出るかもしれません。


</details>