---
sidebar_position: 4
sidebar_label: 更新履歴
description: Light Limit Changerの更新履歴の一覧です。Github releasesでも公開しています
---

# 更新履歴

:::info
更新履歴は[Github](https://github.com/Azukimochi/LightLimitChangerForMA/releases)及び、[X](https://twitter.com/search?q=from%3Aazukimochi25%20%23LightLimitChanger&src=typed_query&f=live)でも公開しています。
:::
### 1.7.0
- アバターへの生成方法をコンテキストメニューに変更
- Non-Destructive Modular Framework(NDMF)へ対応
- マテリアルの複製機能を追加し、テクスチャの焼き込みなどが不要に


### 1.7.0-alpha.1
- アバターへの生成方法をコンテキストメニューに変更
- Non-Destructive Modular Framework(NDMF)へ対応

### 1.6.4
- アバターに含まれるアニメーションパスにMissingが含まれる場合にエラーが発生するバグの修正

### 1.6.3
- Anatawa12's AvaterOptimizer (AAO) 1.3.0以降との併用時にModular Avater の[インストールするメニューがありません。]エラーが表示される問題の修正
- GUIにGithubリンクのかわりに公式サイトへのリンクを掲載

### 1.6.2
- 実行時にPoiyomiシェーダーのAnimatedフラグを書き込む機能を追加
- Siromori Eye Pointerとの併用時に出るエラーの解消
- 色温度と彩度調節機能の使用時に警告ウインドウを追加
- UIの微調整


### 1.6.1
- **色温度調節**がLiltoonのメインカラー2nd / 3rdに対応
- アニメーションが線形になっていなかった不具合の修正

### 1.6.0
- 色温度調節機能の追加(Liltoon/Sunao/Poiyomi)

既知の不具合
- 色温度設定を複数マテリアルスロットがあり、最下スロットのメインカラーを変更している場合に使用するとすべてのスロットのマテリアルカラーが最下スロットの設定に依存してしまう

### 1.5.0
- Unlit調整機能の追加(Liltoon / Sunao シェーダーのみ)
- **Editor Onlyを除外する**・**初期の上限と下限を上書きする**の初期値をTrueに変更
- UIの見直し

### 1.4.0
- **初期の下限と上限を設定する**の追加、下限/上限設定でデフォルト状態の明るさ設定を上書きします
- **EditorOnlyを除外する**の追加、EditorOnlyタグが設定されたオブジェクトのアニメーションを生成しません
- **ビルド・実行時に生成する**の追加、ビルド・実行時にアニメーションを再生成します
- Tooltipの追加、各ラベルに簡易的な説明文を追加しました

### 1.3.0
- リセットボタンの追加
- シェーダー選択機能の追加

### 1.2.1
- 間違ったVPM継承定義を修正

### 1.2.0
- Sunaoシェーダーへ対応
- Poiyomiシェーダーへ対応
- 彩度調節機能の追加（オプション）
- パラメーター設定の保存機能の追加

### 1.1.1
- Package.jsonのVPM継承を定義

### 1.1.0
- VPM版初回リリース