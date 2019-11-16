# vui-toolkit
## 概要
https://developers.google.com/assistant/actions/reference/ssml#tts_simulator

Actions on GoogleでAssistantアプリ開発する際、話す速度やボリューム等の音声調整を行うためにスピークタグを記述する必要がある。しかし、毎回タグを書くのは非効率なため簡単に音声調整が可能なライブラリー的な物を作成した。まだ未対応の部分があるのでこれからアップデートして行きます。

You need to write down speech tags for controlling speed, volume and such parameters to adjust voice of Google Assistant apps. This code provides an easier way to implement such functionality without having to write < tags >. More updates are needed for perfect control over voice adjustment. This repository is currently under enhancement.

## 注意点
SimpleResponseの形のオブジェクトを生成することが可能だが、SpeechTextとDisplayTextが同じ文字列を参照しているため、絵文字などを文字列に含めると絵文字の読み上げが発生する。

This generates an object of SimpleResponse, but assistant reads out emoji in Unicode characters. This is because text input is shared between speechDisplay and displayText. 

## 使用言語
typescript

## 実行関数
```
const speechkit = new SpeechKit()
speechkit.sayAs('アイウエオ', sayas.expletive);
speechkit.prosody({
    [prosody.pitch]: -20,
    [prosody.rate]: 110
}, 'うううう。声が枯れてしまったようだ...');
speechkit.emphasis('high', 'ヤッホ！');
speechkit.sayAs('こんな感じで読み上げることができます。', sayas.cardinal)
const simpleresponse = speechkit.createSimpleResponse();
console.dir(simpleresponse);

```

## 実行結果
SimpleResponseの形で取得することが可能
```
{ 
    speechText: '<speak><say-as interpret-as="expletive">アイウエオ</say-as><prosody pitch="-20st" rate="110%">うううう。声が枯れてしまったようだ...</prosody><emphasis level="high">ヤッホ！</emphasis><say-as interpret-as="cardinal">こんな感じで読み上げることができます。</say-as></speak>',
    displayText: 'アイウエオ うううう。声が枯れてしまったようだ... こんな感じで読み上げることができます。 ' 
}
  ```