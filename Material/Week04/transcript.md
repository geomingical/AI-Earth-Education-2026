# Week 4｜Prompt Engineering：完整帶時間辨識稿

影片：[交代工作，然後學會驗收。｜AI × Earth Week 4](https://www.youtube.com/watch?v=NsszuRc5JC8)

本機影音：01:03:45。PDF：slides.pdf，39 頁。整理日期：2026-10-05。

## 閱讀限制與來源方法

來源是 Jui-ming Chang 的〈AI × Earth Education｜Prompt Engineering〉，影片 ID 為 NsszuRc5JC8；課堂 PDF 為同資料夾的 slides.pdf，共 39 頁。本頁的 PDF 頁碼以目前檔案的實際頁序為準，不以影片中 PowerPoint 左側縮圖編號推算。

本次下載的音訊與影像長度為 01:03:45，正文從 11:29 附近的正課開場，讀到最後的操作說明與道別。製作時 YouTube 播放器顯示 01:03:55，下載器起初曾回報 01:03:38；再次下載仍取得 01:03:45。來源檔沒有涵蓋播放器多出的最後約 10 秒，不宣稱那一段已完成語音校對。已交叉比對原片與本機影像在 11:40、58:20 的畫面，時間沒有套用其他週次的偏移。

使用 video_script 的 faster-whisper medium，以中文、15 分鐘分段和 30 秒重疊辨識。完整保留 1,204 個原始片段；其中 1,185 個正課片段分配到本頁 27 章。00:00–11:29 附近的候場與音樂不放進正文，19 個相關辨識片段仍保留在完整稿與時間 JSON，沒有從來源刪除。

來源展開區是經繁體字形轉換的辨識結果，不是人工校正逐字稿。約 14:30、29:02、43:29、57:59 的分段交界可能重複或時間回跳；43 分鐘附近的英文短片在下一段被誤辨成中文，例如把花生醬寫成「蕃茄油」。原稿保留這些錯誤，正文則依影片、可用的英文辨識和投影片整理，不把錯字當成課程事實。

已逐一檢視繁體轉換差異，保留原文的「權限」，拒絕把「發明了」改成「發明瞭」等不合語境的變更。正文中 Prompt、CO-STAR、Harness、砂岩／頁岩等明確術語以投影片或上下文釐清；新聞裡的公司、模型版本與部分人名若無法可靠辨識，明列待核，不猜出完整名稱。

正文是整理者歸納；另有標成「投影片補充」的框架欄位、摘要驗收範例與交接清單。第 28 頁的錯誤摘要是教學示意，第 36 頁的雨量流程是假設案例，均不是實測成果。課堂新聞、模型評價、產品訂閱與工具費用，只記錄講者當時的說法或經驗，未另做即時查核。

時間來自本機辨識的原片座標，是章節回看線索，不宣稱逐秒人工同步。候場音樂、影片播放與停頓可能沒有可靠文字。自動英文字幕下載不完整，取得的開頭內容也與中文課程不符，因此未當作正文來源。每章時間、PDF 頁序、S 編號的完整對照，放在下載的帶時間辨識稿中。

## 來源單元 → HTML 章節 → PDF 頁

| 單元／HTML 入口 | 原片時間 | PDF 實際頁序 | 來源片段 |
| --- | --- | --- | --- |
| 候場與音樂（完整稿保留，不放進教學正文） | 00:00:00–00:11:29 | — | S0001–S0019，共 19 段 |
| [01 提示詞要解決的，究竟是哪一件事？](index.html#brief-and-check) | 00:11:29–00:12:51 | 1、2 | S0020–S0047，共 28 段 |
| [02 介面越來越主動，需求就可以不說清楚嗎？](index.html#news-and-interfaces) | 00:12:51–00:17:41 | 3 | S0048–S0161，共 114 段 |
| [03 「幫我整理一下」到底漏掉了什麼？](index.html#not-a-spell) | 00:17:41–00:20:03 | 4、5、6 | S0162–S0220，共 59 段 |
| [04 哪些資訊，值得在一開始就告訴 AI？](index.html#four-pieces) | 00:20:03–00:22:15 | 7 | S0221–S0279，共 59 段 |
| [05 文章導讀要怎麼說，才不必讓 AI 自己猜？](index.html#article-brief) | 00:22:15–00:23:08 | 8 | S0280–S0303，共 24 段 |
| [06 框架是在幫你想清楚，還是要求你背六個字？](index.html#co-star) | 00:23:08–00:25:45 | 9、10 | S0304–S0373，共 70 段 |
| [07 什麼時候需要寫細，什麼時候可以簡單說？](index.html#right-amount) | 00:25:45–00:28:01 | 11、12 | S0374–S0430，共 57 段 |
| [08 最後要給人看，還是讓下一個程式接著用？](index.html#delivery-format) | 00:28:01–00:28:46 | 13 | S0431–S0449，共 19 段 |
| [09 不知道怎麼寫提示詞，可以先讓 AI 訪問你嗎？](index.html#voice-clarification) | 00:28:46–00:32:51 | 14 | S0450–S0550，共 101 段 |
| [10 叫它扮演專家，就等於交代清楚工作了嗎？](index.html#role-and-rules) | 00:32:51–00:34:26 | 15 | S0551–S0582，共 32 段 |
| [11 格式很漂亮，為什麼內容還可能是錯的？](index.html#prompt-not-proof) | 00:34:26–00:35:28 | 16 | S0583–S0603，共 21 段 |
| [12 除了 CO-STAR，還需要記住多少框架？](index.html#frameworks-as-checklists) | 00:35:28–00:37:14 | 17、18、19 | S0604–S0640，共 37 段 |
| [13 畫面沒違反指令，為什麼還不是你想要的？](index.html#video-one-two) | 00:37:14–00:38:50 | 20、21、22 | S0641–S0667，共 27 段 |
| [14 只說「驚悚」，AI 可能只改了哪一部分？](index.html#video-three-four) | 00:38:50–00:40:07 | 23、24 | S0668–S0687，共 20 段 |
| [15 圖做得很漂亮，為什麼還得打開分析過程？](index.html#iteration-and-evidence) | 00:40:07–00:42:07 | 25、26 | S0688–S0740，共 53 段 |
| [16 「做一片果醬吐司」為什麼還需要拆步驟？](index.html#toast-procedure) | 00:42:07–00:44:58 | 27 | S0741–S0821，共 81 段 |
| [17 為什麼只是改一句話，場景卻一路跑掉了？](index.html#coffee-video) | 00:44:58–00:47:00 | 無對應靜態頁；以影片為準 | S0822–S0880，共 59 段 |
| [18 一直在同一串對話修改，舊答案會不會干擾新任務？](index.html#context-drift) | 00:47:00–00:48:05 | 28 | S0881–S0913，共 33 段 |
| [19 你說的「做好了」，能不能讓別人檢查？](index.html#define-good) | 00:48:05–00:49:10 | 29、30 | S0914–S0947，共 34 段 |
| [20 AI 做不好，問題一定是模型不夠強嗎？](index.html#model-and-harness) | 00:49:10–00:50:35 | 31、32、33 | S0948–S0986，共 39 段 |
| [21 提示詞裡的每一條規則，真的都有幫助嗎？](index.html#compare-rules) | 00:50:35–00:51:09 | 34 | S0987–S0999，共 13 段 |
| [22 真正要配好的，除了提示詞還有哪些東西？](index.html#system-layers) | 00:51:09–00:53:30 | 35 | S1000–S1049，共 50 段 |
| [23 一份雨量資料，為什麼不能只丟一句「幫我分析」？](index.html#rainfall-workflow) | 00:53:30–00:56:26 | 36 | S1050–S1120，共 71 段 |
| [24 多叫幾個 AI 幫忙，就一定比較好嗎？](index.html#handoff) | 00:56:26–00:57:11 | 37 | S1121–S1136，共 16 段 |
| [25 看到一個「神級提示詞」，應該怎麼學？](index.html#observe-reflect) | 00:57:11–00:57:40 | 38 | S1137–S1147，共 11 段 |
| [26 AI 聽完整堂課之後，會問什麼問題？](index.html#live-ai-questions) | 00:57:40–01:00:48 | 38、39（僅為背景；工具示範以影片為準） | S1148–S1184，共 37 段 |
| [27 討論和實作，為什麼常常值得分成兩段？](index.html#discuss-then-execute) | 01:00:48–01:03:45 | 39 | S1185–S1204，共 20 段 |

S 編號固定對應原始時間 JSON 的 1-based 片段順序。原始輸出在 30 秒重疊區可能出現時間回跳或同句兩種辨識；本稿不自動刪重，也不把重疊重排成假裝連續的逐字字幕。片段依起始時間分配章節，少數句尾可能略越過章節界線。

## 已檢視的繁體字形差異

OpenCC s2tw 後逐項比較；拒絕 S0113「發明了→發明瞭」與 S0562 對不確定岩石名的字形改動。保留原辨識措辭；正文才另做術語釐清。英文拼字序列未改變。

- S0525：了解 → 瞭解
- S0978：所以它就會有上下文的污染 → 所以它就會有上下文的汙染
- S1101：有可能就因為上下文污染的關係 → 有可能就因為上下文汙染的關係
- S1170：我覺得整體很清楚,只是在上下文污染和何時要切換新對話那一段,我還想再確認一下。 → 我覺得整體很清楚,只是在上下文汙染和何時要切換新對話那一段,我還想再確認一下。
- S1173：就是起碼有一個旁觀的AI可以跟你對話來問問題,因為台灣的學生很多呢,就是不太容易去問問題。 → 就是起碼有一個旁觀的AI可以跟你對話來問問題,因為臺灣的學生很多呢,就是不太容易去問問題。
- S1181：大概花可能十幾塊台幣而已吧,或不到10塊,可能不到10塊。 → 大概花可能十幾塊臺幣而已吧,或不到10塊,可能不到10塊。
- S1188：對,因為一旦你沒有想清楚的時候呢,你run給prime,或你就直接叫AI進來工作,進來執行的時候呢,非常容易有上下門污染的問題。 → 對,因為一旦你沒有想清楚的時候呢,你run給prime,或你就直接叫AI進來工作,進來執行的時候呢,非常容易有上下門汙染的問題。
- S1202：它會污染到你最後真正想要執行的那個指令。 → 它會汙染到你最後真正想要執行的那個指令。

## 候場與音樂｜未放進教學正文

包含可能失真的歌詞辨識與跨越長時間音樂的片段；不能當作逐秒校正過的歌詞。

### S0001 · [00:02:16–00:02:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=136s)

Stay close in the earth

### S0002 · [00:02:23–00:02:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=143s)

You'll understand in you

### S0003 · [00:02:25–00:02:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=145s)

The graphs begin their silent line

### S0004 · [00:02:58–00:03:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=178s)

The margins holding edge without a break

### S0005 · [00:03:04–00:03:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=184s)

Each letter rests on every stable stride

### S0006 · [00:03:08–00:03:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=188s)

We turn the heavy flow to clean

### S0007 · [00:03:11–00:03:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=191s)

The chapters keeping all the chaos safe

### S0008 · [00:03:17–00:03:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=197s)

A steady map to guide the read

### S0009 · [00:03:22–00:03:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=202s)

With logic in the way the words are laid

### S0010 · [00:03:27–00:03:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=207s)

A table perfectly aligned

### S0011 · [00:03:29–00:03:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=209s)

To ease the sinking in the mind

### S0012 · [00:03:31–00:03:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=211s)

The cup standing in a row

### S0013 · [00:03:34–00:03:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=214s)

Where all the scattered pieces go

### S0014 · [00:03:37–00:03:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=217s)

From the scattered and the blind

### S0015 · [00:03:39–00:03:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=219s)

The knowledge is at last defined

### S0016 · [00:03:42–00:03:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=222s)

And the trace

### S0017 · [00:03:52–00:03:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=232s)

A simple monument of great

### S0018 · [00:03:54–00:04:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=234s)

The one they own

### S0019 · [00:04:44–00:11:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=284s)

Intelligence and where is

## 01｜提示詞要解決的，究竟是哪一件事？

HTML：[回到本章](index.html#brief-and-check)。原片範圍：00:11:29–00:12:51。

### S0020 · [00:11:29–00:11:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=689s)

我們今天主要是要來說明

### S0021 · [00:11:32–00:11:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=692s)

就是Prompt Engineering的部分

### S0022 · [00:11:34–00:11:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=694s)

就是我們前面已經有說過

### S0023 · [00:11:37–00:11:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=697s)

就是我們怎麼樣用模型來做思考

### S0024 · [00:11:41–00:11:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=701s)

那Prompt這個東西

### S0025 · [00:11:43–00:11:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=703s)

其實就是下一個指令

### S0026 · [00:11:45–00:11:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=705s)

它其實就是一個提示詞

### S0027 · [00:11:48–00:11:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=708s)

就是我們怎麼樣藉由提示詞

### S0028 · [00:11:50–00:11:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=710s)

來去引導AI

### S0029 · [00:11:52–00:11:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=712s)

來去進行它所要做的工作

### S0030 · [00:11:57–00:11:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=717s)

以及符合我們的需求

### S0031 · [00:11:59–00:12:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=719s)

所以今天主要會有三個部分

### S0032 · [00:12:02–00:12:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=722s)

第一個就是如何用Prompt

### S0033 · [00:12:06–00:12:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=726s)

把這個工作交代清楚

### S0034 · [00:12:08–00:12:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=728s)

第二個好的Prompt

### S0035 · [00:12:10–00:12:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=730s)

是需要做不斷的疊帶修改

### S0036 · [00:12:13–00:12:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=733s)

第三個就是Prompt其實只是其中一層

### S0037 · [00:12:17–00:12:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=737s)

就是整個AI要來工作

### S0038 · [00:12:19–00:12:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=739s)

其實取決於說整個的模型

### S0039 · [00:12:21–00:12:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=741s)

以及圍繞在模型周圍的這些Honest

### S0040 · [00:12:26–00:12:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=746s)

那問題不一定在於模型本身

### S0041 · [00:12:29–00:12:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=749s)

我今天要來測試一個

### S0042 · [00:12:31–00:12:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=751s)

我最近做的一個東西

### S0043 · [00:12:35–00:12:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=755s)

我先測試看看

### S0044 · [00:12:40–00:12:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=760s)

好

### S0045 · [00:12:44–00:12:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=764s)

應該已經

### S0046 · [00:12:47–00:12:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=767s)

在進行了

### S0047 · [00:12:49–00:12:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=769s)

所以今天

## 02｜介面越來越主動，需求就可以不說清楚嗎？

HTML：[回到本章](index.html#news-and-interfaces)。原片範圍：00:12:51–00:17:41。

### S0048 · [00:12:51–00:12:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=771s)

這禮拜的AI的News主要有三個

### S0049 · [00:12:54–00:12:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=774s)

就是第一個Calcode他們有新的一個

### S0050 · [00:12:57–00:12:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=777s)

叫MODs的一個功能

### S0051 · [00:12:59–00:13:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=779s)

它是可以客製化整個界面和流程

### S0052 · [00:13:02–00:13:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=782s)

就是它跟Honest又不太一樣

### S0053 · [00:13:05–00:13:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=785s)

這個後面如果談到

### S0054 · [00:13:07–00:13:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=787s)

Calcode的時候

### S0055 · [00:13:08–00:13:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=788s)

或許有機會再來說明

### S0056 · [00:13:11–00:13:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=791s)

第二個則是上禮拜OpenAI

### S0057 · [00:13:14–00:13:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=794s)

他們有一個Dev Day的一個活動

### S0058 · [00:13:17–00:13:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=797s)

所以它更新了非常多

### S0059 · [00:13:19–00:13:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=799s)

就是關於模型上的東西

### S0060 · [00:13:22–00:13:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=802s)

有一個新的AI助理

### S0061 · [00:13:25–00:13:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=805s)

叫做OpenAI的Dots

### S0062 · [00:13:27–00:13:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=807s)

Dots只有在3000塊和6000塊的訂閱

### S0063 · [00:13:30–00:13:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=810s)

現在才有

### S0064 · [00:13:32–00:13:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=812s)

所以如果你用Codex的話

### S0065 · [00:13:34–00:13:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=814s)

你就可以看到整個Dots

### S0066 · [00:13:37–00:13:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=817s)

這個就是我的Dots

### S0067 · [00:13:39–00:13:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=819s)

詩恩的助理

### S0068 · [00:13:40–00:13:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=820s)

他叫Annie

### S0069 · [00:13:42–00:13:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=822s)

你可以打電話給他

### S0070 · [00:13:44–00:13:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=824s)

他不能打電話給你

### S0071 · [00:13:46–00:13:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=826s)

這是現在目前的一個限制

### S0072 · [00:13:49–00:13:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=829s)

再來則是有一個新聞

### S0073 · [00:13:52–00:13:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=832s)

Compassi

### S0074 · [00:13:53–00:13:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=833s)

它有幾個觀點

### S0075 · [00:13:55–00:13:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=835s)

跟我們今天要說的

### S0076 · [00:13:57–00:14:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=837s)

是相關的

### S0077 · [00:14:00–00:14:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=840s)

大概是在這邊

### S0078 · [00:14:03–00:14:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=843s)

這邊Compassi是一個AI界

### S0079 · [00:14:06–00:14:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=846s)

非常有名的一個人

### S0080 · [00:14:08–00:14:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=848s)

它主要在說明說

### S0081 · [00:14:10–00:14:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=850s)

AI的提示詞

### S0082 · [00:14:11–00:14:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=851s)

我們是需要怎麼樣去做撰寫

### S0083 · [00:14:15–00:14:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=855s)

它這邊提出一個叫ASD的規則

### S0084 · [00:14:19–00:14:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=859s)

這個規則是for航空界使用的

### S0085 · [00:14:23–00:14:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=863s)

整個overall的準則大概就是說

### S0086 · [00:14:26–00:14:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=866s)

其實你的文字要盡量簡潔

### S0087 · [00:14:29–00:14:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=869s)

然後能夠清楚的敘述你的需求

### S0088 · [00:14:34–00:14:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=874s)

第二個則是

### S0089 · [00:14:35–00:14:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=875s)

關於整個流程與圖解的關係

### S0090 · [00:14:39–00:14:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=879s)

如果你今天要解釋一個Code

### S0091 · [00:14:41–00:14:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=881s)

或解釋一份文件的話

### S0092 · [00:14:43–00:14:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=883s)

你就會需要讓AI

### S0093 · [00:14:45–00:14:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=885s)

幫你產生一個流程圖

### S0094 · [00:14:47–00:14:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=887s)

讓你盡快可以去理解

### S0095 · [00:14:50–00:14:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=890s)

就是可能這篇文章或這個Code

### S0096 · [00:14:53–00:14:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=893s)

或你想要的功能的脈絡是如何

### S0097 · [00:14:58–00:15:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=898s)

第三則是

### S0098 · [00:14:30–00:14:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=870s)

要清楚的敘述你的需求

### S0099 · [00:14:34–00:14:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=874s)

第二個則是關於整個流程與圖解的關係

### S0100 · [00:14:44–00:14:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=884s)

你就會需要讓AI幫你產生一個流程圖

### S0101 · [00:14:59–00:15:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=899s)

第三則是課堂上的一個筆記

### S0102 · [00:15:02–00:15:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=902s)

也就是用HTML下去做的

### S0103 · [00:15:05–00:15:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=905s)

就是整個東西它可以有一個比較視覺化的呈現

### S0104 · [00:15:09–00:15:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=909s)

所以它其實可以讓使用者去勾選說

### S0105 · [00:15:12–00:15:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=912s)

我想要哪一個

### S0106 · [00:15:14–00:15:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=914s)

再返回給使用者本身再給AI

### S0107 · [00:15:18–00:15:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=918s)

最後一個則是可以參考

### S0108 · [00:15:22–00:15:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=922s)

就是這個是一個YouTube的頻道

### S0109 · [00:15:26–00:15:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=926s)

那它可以去講解一個比較複雜的概念

### S0110 · [00:15:30–00:15:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=930s)

那DOT這個東西

### S0111 · [00:15:34–00:15:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=934s)

這是今天的一則新聞

### S0112 · [00:15:36–00:15:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=936s)

就有一個AI的助理的公司叫Instinct

### S0113 · [00:15:40–00:15:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=940s)

他們發明了一個

### S0114 · [00:15:43–00:15:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=943s)

就是他們做了一個產品

### S0115 · [00:15:45–00:15:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=945s)

其實就代表說

### S0116 · [00:15:46–00:15:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=946s)

它讓AI建築在你原本的APP裡面

### S0117 · [00:15:51–00:15:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=951s)

可能你是用WhatsApp

### S0118 · [00:15:52–00:15:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=952s)

那AI就會用WhatsApp跟你去溝通

### S0119 · [00:15:56–00:15:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=956s)

你可以打電話給它

### S0120 · [00:15:57–00:15:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=957s)

它也可以打電話給你

### S0121 · [00:15:59–00:16:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=959s)

所以如果你今天給這個

### S0122 · [00:16:02–00:16:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=962s)

Instinct的model

### S0123 · [00:16:04–00:16:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=964s)

適當的權限的話

### S0124 · [00:16:05–00:16:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=965s)

如果它可以去讀你的email

### S0125 · [00:16:07–00:16:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=967s)

如果它可以去讀你的Google的calendar

### S0126 · [00:16:10–00:16:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=970s)

它其實隨時隨地都可以去幫你注意說

### S0127 · [00:16:14–00:16:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=974s)

現在有沒有比較重要的mail

### S0128 · [00:16:17–00:16:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=977s)

或現在有沒有比較重要的事

### S0129 · [00:16:20–00:16:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=980s)

是需要你去處理的

### S0130 · [00:16:22–00:16:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=982s)

所以這其實呼應到

### S0131 · [00:16:24–00:16:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=984s)

就是Week 1

### S0132 · [00:16:25–00:16:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=985s)

Google的stage 1到stage 3的步驟

### S0133 · [00:16:29–00:16:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=989s)

那這個已經是屬於stage

### S0134 · [00:16:32–00:16:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=992s)

接近stage 3的步驟

### S0135 · [00:16:34–00:16:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=994s)

就是只有在使用者

### S0136 · [00:16:36–00:16:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=996s)

有需求的時候

### S0137 · [00:16:38–00:16:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=998s)

你的AI才會來打擾你

### S0138 · [00:16:40–00:16:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1000s)

所以這邊就是Instinct的產品

### S0139 · [00:16:43–00:16:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1003s)

聽說就是

### S0140 · [00:16:45–00:16:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1005s)

它

### S0141 · [00:16:46–00:16:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1006s)

只要有急事

### S0142 · [00:16:47–00:16:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1007s)

它真的會call你

### S0143 · [00:16:48–00:16:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1008s)

假設它發現你email有一個deadline

### S0144 · [00:16:51–00:16:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1011s)

表示是晚上7點

### S0145 · [00:16:53–00:16:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1013s)

那6點50分它還沒有看到

### S0146 · [00:16:56–00:16:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1016s)

你這個mail被回覆掉的時候

### S0147 · [00:16:58–00:17:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1018s)

它可能就會打電話跟你說

### S0148 · [00:17:00–00:17:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1020s)

你這個mail好像還沒有處理

### S0149 · [00:17:02–00:17:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1022s)

那這個是一個就是

### S0150 · [00:17:04–00:17:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1024s)

最近很風行的一間公司

### S0151 · [00:17:11–00:17:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1031s)

所以這大概是這禮拜

### S0152 · [00:17:13–00:17:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1033s)

三個比較大的一個進展

### S0153 · [00:17:16–00:17:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1036s)

那其中有一個

### S0154 · [00:17:18–00:17:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1038s)

OpenAI他們的那個

### S0155 · [00:17:20–00:17:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1040s)

Soul模型就是上禮拜我們說到

### S0156 · [00:17:23–00:17:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1043s)

就是它發布了Soul 6.0

### S0157 · [00:17:25–00:17:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1045s)

但到了這個禮拜的時候

### S0158 · [00:17:27–00:17:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1047s)

OpenAI他們發布的模型

### S0159 · [00:17:29–00:17:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1049s)

已經到了Soul的6.1

### S0160 · [00:17:32–00:17:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1052s)

所以其實幾乎一個禮拜

### S0161 · [00:17:34–00:17:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1054s)

它疊帶了一個小的一個版本

## 03｜「幫我整理一下」到底漏掉了什麼？

HTML：[回到本章](index.html#not-a-spell)。原片範圍：00:17:41–00:20:03。

### S0162 · [00:17:41–00:17:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1061s)

第一個步驟

### S0163 · [00:17:42–00:17:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1062s)

就是怎麼樣用自然語言來把

### S0164 · [00:17:45–00:17:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1065s)

工作交代清楚

### S0165 · [00:17:47–00:17:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1067s)

因為我們當使用了一個

### S0166 · [00:17:50–00:17:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1070s)

新的AI模型的時候

### S0167 · [00:17:52–00:17:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1072s)

其實

### S0168 · [00:17:53–00:17:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1073s)

你就可以把它想像成

### S0169 · [00:17:54–00:17:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1074s)

它是一個非常聰明的人

### S0170 · [00:17:56–00:18:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1076s)

但它不具備任何的背景知識

### S0171 · [00:18:00–00:18:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1080s)

所謂的背景知識

### S0172 · [00:18:01–00:18:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1081s)

就是它不知道你的需求

### S0173 · [00:18:04–00:18:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1084s)

它不知道你到底想要什麼

### S0174 · [00:18:06–00:18:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1086s)

所以我們下指令的時候

### S0175 · [00:18:08–00:18:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1088s)

其實最大的功能

### S0176 · [00:18:10–00:18:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1090s)

就是去引導AI朝向你指令的方向

### S0177 · [00:18:14–00:18:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1094s)

去做前進

### S0178 · [00:18:17–00:18:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1097s)

這三個都不是太好的一個prompt

### S0179 · [00:18:21–00:18:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1101s)

就是第一個

### S0180 · [00:18:22–00:18:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1102s)

假設你的prompt是要幫我整理

### S0181 · [00:18:25–00:18:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1105s)

這一篇文章

### S0182 · [00:18:26–00:18:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1106s)

但是這個文章是要整理成摘要

### S0183 · [00:18:29–00:18:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1109s)

還是它需要分類

### S0184 · [00:18:31–00:18:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1111s)

還是要改寫

### S0185 · [00:18:32–00:18:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1112s)

還是做表格

### S0186 · [00:18:34–00:18:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1114s)

那如果你的prompt下

### S0187 · [00:18:36–00:18:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1116s)

幫我把這篇文章改寫一下

### S0188 · [00:18:39–00:18:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1119s)

那這個改寫是改寫給誰

### S0189 · [00:18:42–00:18:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1122s)

那或者幫我把這篇文章

### S0190 · [00:18:45–00:18:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1125s)

做成一個簡報大綱

### S0191 · [00:18:47–00:18:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1127s)

但這個

### S0192 · [00:18:48–00:18:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1128s)

簡報的核心要點是什麼

### S0193 · [00:18:51–00:18:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1131s)

所以AI不會因為我們今天

### S0194 · [00:18:54–00:18:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1134s)

覺得我們已經想得非常清楚了

### S0195 · [00:18:57–00:18:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1137s)

那它就可以直接通你的腦袋

### S0196 · [00:18:59–00:19:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1139s)

把你腦袋所想的東西

### S0197 · [00:19:01–00:19:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1141s)

化成很實際的一個產品

### S0198 · [00:19:05–00:19:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1145s)

例如說一個簡報大綱

### S0199 · [00:19:07–00:19:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1147s)

讓你可以去做後續的簡報

### S0200 · [00:19:10–00:19:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1150s)

所以我們就需要用文字的力量

### S0201 · [00:19:13–00:19:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1153s)

來把很多的東西給引導出來

### S0202 · [00:19:17–00:19:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1157s)

過去的prompt

### S0203 · [00:19:18–00:19:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1158s)

有一些很神秘的地方就是

### S0204 · [00:19:20–00:19:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1160s)

可能你是一個世界頂尖專家

### S0205 · [00:19:23–00:19:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1163s)

那請深呼吸啊

### S0206 · [00:19:24–00:19:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1164s)

一步步思考啊

### S0207 · [00:19:26–00:19:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1166s)

或者如果我答得好

### S0208 · [00:19:27–00:19:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1167s)

我會給你小費啊

### S0209 · [00:19:28–00:19:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1168s)

這些都是在過去比較

### S0210 · [00:19:32–00:19:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1172s)

在AI沒有那麼聰明的時候

### S0211 · [00:19:34–00:19:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1174s)

很常用的prompt

### S0212 · [00:19:36–00:19:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1176s)

對這些我之前全部都用過

### S0213 · [00:19:38–00:19:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1178s)

但依現在的模型的聰明程度

### S0214 · [00:19:41–00:19:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1181s)

其實都不需要使用這些prompt

### S0215 · [00:19:45–00:19:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1185s)

現在的prompt

### S0216 · [00:19:46–00:19:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1186s)

其實就是把你知道的背景和任務

### S0217 · [00:19:50–00:19:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1190s)

那以及AI需要具體要做的東西是什麼呢

### S0218 · [00:19:54–00:19:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1194s)

可以說得非常清楚

### S0219 · [00:19:56–00:19:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1196s)

其實AI就可以有辦法

### S0220 · [00:19:58–00:20:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1198s)

很好的去達成你的目標

## 04｜哪些資訊，值得在一開始就告訴 AI？

HTML：[回到本章](index.html#four-pieces)。原片範圍：00:20:03–00:22:15。

### S0221 · [00:20:03–00:20:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1203s)

所以這四類只是一個非常

### S0222 · [00:20:05–00:20:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1205s)

簡單的一個

### S0223 · [00:20:07–00:20:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1207s)

一個過程

### S0224 · [00:20:08–00:20:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1208s)

你有可能需要考慮到

### S0225 · [00:20:10–00:20:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1210s)

一個情境

### S0226 · [00:20:11–00:20:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1211s)

那可能是任務限制以及交付

### S0227 · [00:20:15–00:20:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1215s)

如果用我們之前說過的

### S0228 · [00:20:18–00:20:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1218s)

把Yahoo的新聞改寫成報導者的風格的話

### S0229 · [00:20:22–00:20:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1222s)

那這個可能就是一個情境

### S0230 · [00:20:24–00:20:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1224s)

就是我需要的是

### S0231 · [00:20:26–00:20:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1226s)

把Yahoo的文字風格

### S0232 · [00:20:28–00:20:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1228s)

改成是報導者的風格

### S0233 · [00:20:31–00:20:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1231s)

所以這個情境跟任務呢

### S0234 · [00:20:32–00:20:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1232s)

幾乎是綁在一起的

### S0235 · [00:20:34–00:20:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1234s)

限制呢

### S0236 · [00:20:35–00:20:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1235s)

可能是如果我們要test的是

### S0237 · [00:20:38–00:20:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1238s)

zero shot learning

### S0238 · [00:20:40–00:20:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1240s)

那限制就是代表說

### S0239 · [00:20:41–00:20:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1241s)

這個AI可能

### S0240 · [00:20:43–00:20:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1243s)

它不能有網路查詢的功能

### S0241 · [00:20:47–00:20:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1247s)

交付呢

### S0242 · [00:20:47–00:20:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1247s)

就是可能你會牽扯到交付的格式

### S0243 · [00:20:51–00:20:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1251s)

那以及交付的文本

### S0244 · [00:20:53–00:20:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1253s)

所以Prompt的價值呢

### S0245 · [00:20:55–00:20:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1255s)

不是你今天下一個Prompt模型

### S0246 · [00:20:57–00:20:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1257s)

就會突然變得很聰明

### S0247 · [00:20:59–00:21:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1259s)

而是你要慢慢的用文字去

### S0248 · [00:21:02–00:21:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1262s)

收斂它發揮的空間

### S0249 · [00:21:04–00:21:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1264s)

一旦你沒有給這個Prompt

### S0250 · [00:21:06–00:21:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1266s)

你給一個非常隨便的Prompt

### S0251 · [00:21:08–00:21:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1268s)

就是代表你告訴AI說

### S0252 · [00:21:10–00:21:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1270s)

你可以完全的去自由發揮

### S0253 · [00:21:13–00:21:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1273s)

但是這個自由發揮出來的成果

### S0254 · [00:21:16–00:21:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1276s)

是不是你要的

### S0255 · [00:21:17–00:21:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1277s)

或是不是符合你的需求

### S0256 · [00:21:19–00:21:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1279s)

那這個就真的完全是看

### S0257 · [00:21:21–00:21:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1281s)

看每一個人

### S0258 · [00:21:23–00:21:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1283s)

那也看每一個人的背景

### S0259 · [00:21:26–00:21:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1286s)

如果你今天要建一個網站

### S0260 · [00:21:27–00:21:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1287s)

有可能AI的美感比你好

### S0261 · [00:21:30–00:21:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1290s)

太多太多

### S0262 · [00:21:32–00:21:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1292s)

所以你原則上你不需要給他任何的

### S0263 · [00:21:35–00:21:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1295s)

可能色彩啊或

### S0264 · [00:21:37–00:21:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1297s)

可能文字的搭配啊

### S0265 · [00:21:38–00:21:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1298s)

方框的搭配啊

### S0266 · [00:21:39–00:21:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1299s)

你完全不需要給這一些

### S0267 · [00:21:41–00:21:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1301s)

那AI可以幫你做的

### S0268 · [00:21:43–00:21:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1303s)

已經是超越你美感的程度

### S0269 · [00:21:46–00:21:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1306s)

那或許在這個狀態之下呢

### S0270 · [00:21:49–00:21:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1309s)

嗯

### S0271 · [00:21:50–00:21:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1310s)

就不太需要用一個非常好的一個Prompt

### S0272 · [00:21:53–00:21:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1313s)

來去限制他的發揮

### S0273 · [00:21:55–00:21:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1315s)

但如果你本來就是一個

### S0274 · [00:21:57–00:22:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1317s)

可能網頁的設計一個美學的一個大師

### S0275 · [00:22:00–00:22:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1320s)

那你會覺得AI做出來的東西

### S0276 · [00:22:02–00:22:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1322s)

可能都是垃圾

### S0277 · [00:22:03–00:22:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1323s)

這個時候你就需要用Prompt

### S0278 · [00:22:05–00:22:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1325s)

好好的去細緻的去規劃

### S0279 · [00:22:08–00:22:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1328s)

AI要如何去執行這個任務

## 05｜文章導讀要怎麼說，才不必讓 AI 自己猜？

HTML：[回到本章](index.html#article-brief)。原片範圍：00:22:15–00:23:08。

### S0280 · [00:22:15–00:22:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1335s)

所以在Prompt這個地方呢

### S0281 · [00:22:18–00:22:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1338s)

就是

### S0282 · [00:22:20–00:22:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1340s)

如果你今天原本的文本是幫我

### S0283 · [00:22:22–00:22:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1342s)

整理這篇文章

### S0284 · [00:22:24–00:22:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1344s)

所以AI會自己猜

### S0285 · [00:22:26–00:22:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1346s)

那可能他會猜說讀者大概會

### S0286 · [00:22:29–00:22:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1349s)

懂多少會自己去加

### S0287 · [00:22:31–00:22:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1351s)

但是如果你用右邊的方式的話

### S0288 · [00:22:34–00:22:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1354s)

可能你的背景只是哦我只是要導讀這篇文章

### S0289 · [00:22:38–00:22:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1358s)

那

### S0290 · [00:22:39–00:22:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1359s)

讀者呢就是

### S0291 · [00:22:40–00:22:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1360s)

你自己本身可能用過GPD或第一次學Prompt

### S0292 · [00:22:44–00:22:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1364s)

任務的話呢可能針對

### S0293 · [00:22:46–00:22:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1366s)

整理主旨啊

### S0294 · [00:22:48–00:22:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1368s)

作者的例子啊

### S0295 · [00:22:49–00:22:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1369s)

那你可以附上一些限制以及輸出的一些

### S0296 · [00:22:53–00:22:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1373s)

格式

### S0297 · [00:22:54–00:22:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1374s)

但第一次使用的人呢

### S0298 · [00:22:55–00:22:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1375s)

通常不太會有這麼

### S0299 · [00:22:58–00:23:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1378s)

據悉迷離的幾個

### S0300 · [00:23:00–00:23:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1380s)

步驟

### S0301 · [00:23:02–00:23:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1382s)

所以這個地方呢後面會談到說

### S0302 · [00:23:04–00:23:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1384s)

其實可以請AI來去做

### S0303 · [00:23:06–00:23:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1386s)

協助

## 06｜框架是在幫你想清楚，還是要求你背六個字？

HTML：[回到本章](index.html#co-star)。原片範圍：00:23:08–00:25:45。

### S0304 · [00:23:08–00:23:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1388s)

Costar呢則是

### S0305 · [00:23:10–00:23:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1390s)

在2023年11月的時候呢

### S0306 · [00:23:12–00:23:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1392s)

在新加坡有舉辦過一場

### S0307 · [00:23:15–00:23:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1395s)

提示詞工程的一個比賽

### S0308 · [00:23:17–00:23:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1397s)

他的比賽呢就專門是

### S0309 · [00:23:19–00:23:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1399s)

在寫提示詞看誰的提示詞比較好

### S0310 · [00:23:22–00:23:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1402s)

能夠比較正確的引導出

### S0311 · [00:23:25–00:23:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1405s)

AI整個

### S0312 · [00:23:27–00:23:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1407s)

就是怎麼樣去完成這個任務

### S0313 · [00:23:29–00:23:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1409s)

所以他主要分成幾個第一個呢就是

### S0314 · [00:23:32–00:23:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1412s)

context

### S0315 · [00:23:33–00:23:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1413s)

那再是objective

### S0316 · [00:23:35–00:23:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1415s)

再style

### S0317 · [00:23:36–00:23:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1416s)

tone

### S0318 · [00:23:36–00:23:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1416s)

audient跟

### S0319 · [00:23:38–00:23:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1418s)

response

### S0320 · [00:23:41–00:23:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1421s)

所以原本如果是把這篇文章

### S0321 · [00:23:44–00:23:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1424s)

改的好懂一點

### S0322 · [00:23:46–00:23:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1426s)

用

### S0323 · [00:23:47–00:23:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1427s)

Costar的結構下去寫呢

### S0324 · [00:23:49–00:23:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1429s)

你的prompt可能就要說

### S0325 · [00:23:52–00:23:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1432s)

我需要用哪一篇文章來準備

### S0326 · [00:23:55–00:23:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1435s)

線上AI入門的導讀

### S0327 · [00:23:58–00:23:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1438s)

那目的可能是什麼

### S0328 · [00:23:59–00:24:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1439s)

目的是要解釋為何要迭代

### S0329 · [00:24:02–00:24:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1442s)

以及如何觀察

### S0330 · [00:24:03–00:24:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1443s)

還有修正落差

### S0331 · [00:24:05–00:24:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1445s)

那你的風格呢可能需要先說主旨

### S0332 · [00:24:09–00:24:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1449s)

那你的語調呢可能是要親切

### S0333 · [00:24:12–00:24:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1452s)

那你的

### S0334 · [00:24:13–00:24:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1453s)

audience呢可能是第一次學prompt的大學生

### S0335 · [00:24:16–00:24:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1456s)

所以這些其實都是給AI的

### S0336 · [00:24:19–00:24:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1459s)

一個

### S0337 · [00:24:20–00:24:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1460s)

比較具體的目標

### S0338 · [00:24:22–00:24:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1462s)

讓他朝這個目標呢

### S0339 · [00:24:24–00:24:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1464s)

去邁進

### S0340 · [00:24:25–00:24:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1465s)

但如果你

### S0341 · [00:24:26–00:24:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1466s)

拿掉其中一個呢有沒有關係其實這個

### S0342 · [00:24:29–00:24:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1469s)

就真的是完全

### S0343 · [00:24:30–00:24:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1470s)

看個人

### S0344 · [00:24:31–00:24:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1471s)

就是我是以前呢有滿長一段時間會用core

### S0345 · [00:24:36–00:24:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1476s)

Costar的這個結構來去做轉寫

### S0346 · [00:24:39–00:24:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1479s)

但後來呢其實你只要把

### S0347 · [00:24:41–00:24:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1481s)

目標很清楚的去書寫完畢

### S0348 · [00:24:44–00:24:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1484s)

其實就夠了

### S0349 · [00:24:45–00:24:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1485s)

但這個其實這兩個過程其實需要練習的

### S0350 · [00:24:48–00:24:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1488s)

一開始你沒有辦法寫到像Costar

### S0351 · [00:24:52–00:24:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1492s)

的這個結構

### S0352 · [00:24:53–00:24:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1493s)

但你可以用你最原始的想法

### S0353 · [00:24:56–00:24:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1496s)

先書寫下來之後

### S0354 · [00:24:59–00:25:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1499s)

那把那個idea再給AI告訴他說

### S0355 · [00:25:02–00:25:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1502s)

我如果用Costar的結構下去寫的話

### S0356 · [00:25:05–00:25:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1505s)

我整個的文字會變得如何

### S0357 · [00:25:07–00:25:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1507s)

所以你就可以把

### S0358 · [00:25:09–00:25:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1509s)

AI的建議跟你原本的想法

### S0359 · [00:25:12–00:25:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1512s)

給連接起來

### S0360 · [00:25:14–00:25:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1514s)

那你run了比較多次之後

### S0361 · [00:25:16–00:25:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1516s)

其實這兩個東西你自然而然就會知道說

### S0362 · [00:25:19–00:25:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1519s)

Pump這個東西每一次

### S0363 · [00:25:21–00:25:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1521s)

你需要怎麼樣去下

### S0364 · [00:25:23–00:25:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1523s)

那你再也不需要遵守

### S0365 · [00:25:25–00:25:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1525s)

右邊這種很

### S0366 · [00:25:26–00:25:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1526s)

自製化的結構

### S0367 · [00:25:28–00:25:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1528s)

所以跟AI說話其實是需要

### S0368 · [00:25:31–00:25:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1531s)

做

### S0369 · [00:25:32–00:25:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1532s)

慢慢的練習

### S0370 · [00:25:33–00:25:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1533s)

就一開始你一定

### S0371 · [00:25:35–00:25:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1535s)

沒有辦法說的很好

### S0372 · [00:25:36–00:25:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1536s)

所以你要一次一次有點像是不斷的

### S0373 · [00:25:39–00:25:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1539s)

迭代去做改進去做優化

## 07｜什麼時候需要寫細，什麼時候可以簡單說？

HTML：[回到本章](index.html#right-amount)。原片範圍：00:25:45–00:28:01。

### S0374 · [00:25:45–00:25:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1545s)

同一篇文章可能有三種不同的問法

### S0375 · [00:25:48–00:25:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1548s)

甚至可能有N種不同的問法

### S0376 · [00:25:50–00:25:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1550s)

最通靈的就是整理這邊文章

### S0377 · [00:25:53–00:25:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1553s)

那你如果加上你其實只需要一個重點

### S0378 · [00:25:57–00:25:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1557s)

你並不需要

### S0379 · [00:25:59–00:25:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1559s)

其他

### S0380 · [00:26:00–00:26:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1560s)

就是不是那麼重要的context的話

### S0381 · [00:26:02–00:26:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1562s)

那你就可以請AI整理成

### S0382 · [00:26:05–00:26:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1565s)

五個摘要

### S0383 · [00:26:06–00:26:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1566s)

那可能每點只有一句

### S0384 · [00:26:08–00:26:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1568s)

那可能就是30個point

### S0385 · [00:26:10–00:26:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1570s)

那這個也是有些

### S0386 · [00:26:12–00:26:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1572s)

學術文章的highlight

### S0387 · [00:26:14–00:26:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1574s)

可能就是用這種方式就是可能

### S0388 · [00:26:16–00:26:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1576s)

他會說我只需要這邊文章的精華

### S0389 · [00:26:19–00:26:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1579s)

那可能就會放highlight

### S0390 · [00:26:21–00:26:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1581s)

那你有可能會加上一些受眾啊

### S0391 · [00:26:24–00:26:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1584s)

給大學生或是給

### S0392 · [00:26:27–00:26:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1587s)

就是一般的社會人士

### S0393 · [00:26:29–00:26:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1589s)

所以

### S0394 · [00:26:31–00:26:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1591s)

這個完全是取決說你現在進行的

### S0395 · [00:26:33–00:26:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1593s)

這個工作

### S0396 · [00:26:35–00:26:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1595s)

主要是為了誰

### S0397 · [00:26:36–00:26:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1596s)

去做執行

### S0398 · [00:26:38–00:26:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1598s)

那你會針對audience不同audience

### S0399 · [00:26:41–00:26:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1601s)

下去做

### S0400 · [00:26:42–00:26:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1602s)

設計

### S0401 · [00:26:47–00:26:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1607s)

但這件事呢不是非常的

### S0402 · [00:26:51–00:26:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1611s)

必備

### S0403 · [00:26:52–00:26:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1612s)

因為有時候這就跟開我們開reasoning model

### S0404 · [00:26:55–00:26:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1615s)

一樣

### S0405 · [00:26:55–00:26:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1615s)

你把reasoning model level開到非常高的時候呢

### S0406 · [00:26:59–00:26:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1619s)

就是

### S0407 · [00:27:00–00:27:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1620s)

這個模型會

### S0408 · [00:27:01–00:27:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1621s)

有點over thinking

### S0409 · [00:27:03–00:27:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1623s)

所以在prompter寫的過程當中呢

### S0410 · [00:27:06–00:27:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1626s)

你不需要有時候不需要寫得非常非常的

### S0411 · [00:27:08–00:27:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1628s)

細或非常非常的複雜

### S0412 · [00:27:11–00:27:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1631s)

這個取決你的任務

### S0413 · [00:27:13–00:27:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1633s)

如果你的任務非常的麻煩

### S0414 · [00:27:15–00:27:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1635s)

就是他可能牽涉到好幾個步驟或好幾個流程

### S0415 · [00:27:20–00:27:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1640s)

那在最初始的prompter的時候

### S0416 · [00:27:22–00:27:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1642s)

你可能就需要寫得相對的好一點

### S0417 · [00:27:25–00:27:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1645s)

如果你的任務呢是

### S0418 · [00:27:28–00:27:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1648s)

就是非常的簡單

### S0419 · [00:27:29–00:27:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1649s)

而且他做壞了也

### S0420 · [00:27:31–00:27:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1651s)

不會怎樣的話

### S0421 · [00:27:33–00:27:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1653s)

或者你只需要去

### S0422 · [00:27:35–00:27:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1655s)

有點像藉由ai去做brainstorming

### S0423 · [00:27:38–00:27:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1658s)

那你可以用非常簡單的

### S0424 · [00:27:40–00:27:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1660s)

prompter來去交代任務和輸出

### S0425 · [00:27:44–00:27:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1664s)

就不需要有非常複雜

### S0426 · [00:27:46–00:27:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1666s)

的東西

### S0427 · [00:27:47–00:27:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1667s)

但如果你今天是

### S0428 · [00:27:49–00:27:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1669s)

有特別的受眾或是特別複雜的話

### S0429 · [00:27:53–00:27:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1673s)

你可以加接在其他的結構上

### S0430 · [00:27:56–00:27:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1676s)

下去使用

## 08｜最後要給人看，還是讓下一個程式接著用？

HTML：[回到本章](index.html#delivery-format)。原片範圍：00:28:01–00:28:46。

### S0431 · [00:28:01–00:28:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1681s)

所以這又回過頭來說

### S0432 · [00:28:03–00:28:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1683s)

就是在做prompter的時候呢

### S0433 · [00:28:05–00:28:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1685s)

就會設定說你這個東西交付的

### S0434 · [00:28:08–00:28:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1688s)

格式最後的格式

### S0435 · [00:28:10–00:28:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1690s)

那這個就會回到上禮拜說的

### S0436 · [00:28:13–00:28:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1693s)

就不同的格式呢是給不同的

### S0437 · [00:28:16–00:28:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1696s)

最後的

### S0438 · [00:28:18–00:28:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1698s)

給這個使用者

### S0439 · [00:28:19–00:28:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1699s)

如果是jesson的話就代表說

### S0440 · [00:28:21–00:28:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1701s)

中間這個東西是給

### S0441 · [00:28:23–00:28:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1703s)

給ai去接著下一步

### S0442 · [00:28:25–00:28:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1705s)

如果是html可能是給最後審核的人

### S0443 · [00:28:29–00:28:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1709s)

所以這個通常也會寫在那個

### S0444 · [00:28:32–00:28:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1712s)

prompter裡面

### S0445 · [00:28:33–00:28:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1713s)

就是你最後想要

### S0446 · [00:28:35–00:28:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1715s)

的是一個md檔

### S0447 · [00:28:37–00:28:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1717s)

或是你最後是要一個html檔

### S0448 · [00:28:39–00:28:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1719s)

那這個呢都需要寫在prompter裡面

### S0449 · [00:28:41–00:28:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1721s)

沒有寫就是讓ai去自由發揮

## 09｜不知道怎麼寫提示詞，可以先讓 AI 訪問你嗎？

HTML：[回到本章](index.html#voice-clarification)。原片範圍：00:28:46–00:32:51。

### S0450 · [00:28:46–00:28:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1726s)

如果真的不知道怎麼寫的話呢

### S0451 · [00:28:48–00:28:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1728s)

其實你可以把

### S0452 · [00:28:50–00:28:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1730s)

問題丟給ai

### S0453 · [00:28:52–00:28:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1732s)

舉一個最簡單的

### S0454 · [00:28:54–00:28:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1734s)

例子好了

### S0455 · [00:28:56–00:28:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1736s)

這個呢完全是跟就是

### S0456 · [00:28:59–00:29:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1739s)

第九

### S0457 · [00:29:01–00:29:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1741s)

第九其實就是prompter engineering的

### S0458 · [00:29:04–00:29:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1744s)

這一篇

### S0459 · [00:29:05–00:29:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1745s)

文章所以你可以把

### S0460 · [00:29:07–00:29:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1747s)

這樣做就是把

### S0461 · [00:29:09–00:29:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1749s)

你的簡單的需求

### S0462 · [00:29:11–00:29:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1751s)

你可以跟ai說你不知道這個東西

### S0463 · [00:29:14–00:29:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1754s)

在做什麼

### S0464 · [00:29:15–00:29:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1755s)

所以他的文字其實很簡單

### S0465 · [00:29:19–00:29:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1759s)

就是你想要完成下面的工作

### S0466 · [00:29:21–00:29:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1761s)

但你不知道如何清楚的去寫一個prompter

### S0467 · [00:29:25–00:29:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1765s)

所以

### S0468 · [00:29:26–00:29:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1766s)

你請ai幫你去

### S0469 · [00:29:28–00:29:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1768s)

優化整個的思維

### S0470 · [00:29:02–00:29:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1742s)

就是Prompt Engineering的這一篇文章

### S0471 · [00:29:06–00:29:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1746s)

所以你可以把這樣做

### S0472 · [00:29:08–00:29:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1748s)

就是把你的簡單的需求

### S0473 · [00:29:11–00:29:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1751s)

你可以跟AI說你不知道這個東西在做什麼

### S0474 · [00:29:15–00:29:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1755s)

所以它的文字其實很簡單

### S0475 · [00:29:21–00:29:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1761s)

但你不知道如何清楚的去寫一個Prompt

### S0476 · [00:29:25–00:29:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1765s)

所以你請AI幫你去優化整個的思維

### S0477 · [00:29:34–00:29:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1774s)

我要把這個這樣給它

### S0478 · [00:29:39–00:29:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1779s)

所以我這邊要說看完

### S0479 · [00:29:55–00:29:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1795s)

所以當把這些東西給AI之後

### S0480 · [00:29:59–00:30:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1799s)

其實它就有整個東西的背景

### S0481 · [00:30:02–00:30:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1802s)

就是它有這篇文章的知識

### S0482 · [00:30:05–00:30:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1805s)

那它同時也知道說你的需求是什麼

### S0483 · [00:30:09–00:30:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1809s)

所以這時候你就可以打開語音的功能

### S0484 · [00:30:15–00:30:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1815s)

Hi GPT

### S0485 · [00:30:17–00:30:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1817s)

Hey

### S0486 · [00:30:19–00:30:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1819s)

What's up

### S0487 · [00:30:21–00:30:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1821s)

你有看到剛才我貼給你的文章和需求嗎

### S0488 · [00:30:25–00:30:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1825s)

有 我看到了

### S0489 · [00:30:27–00:30:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1827s)

就是你要把Day 09那篇文章

### S0490 · [00:30:31–00:30:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1831s)

整理成給初學者聽的十分鐘導讀大綱

### S0491 · [00:30:36–00:30:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1836s)

對不對

### S0492 · [00:30:37–00:30:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1837s)

在我寫之前

### S0493 · [00:30:39–00:30:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1839s)

對對對

### S0494 · [00:30:40–00:30:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1840s)

所以你需要協助我去做一個initial的Prompt

### S0495 · [00:30:45–00:30:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1845s)

明白

### S0496 · [00:30:46–00:30:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1846s)

OK

### S0497 · [00:30:47–00:30:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1847s)

好

### S0498 · [00:30:47–00:30:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1847s)

那我先問你五個關鍵問題

### S0499 · [00:30:50–00:30:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1850s)

一

### S0500 · [00:30:52–00:30:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1852s)

聽眾是完全不懂AI還是懂一點點

### S0501 · [00:30:57–00:30:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1857s)

可能懂一點點

### S0502 · [00:31:00–00:31:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1860s)

OK

### S0503 · [00:31:01–00:31:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1861s)

好

### S0504 · [00:31:01–00:31:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1861s)

二

### S0505 · [00:31:02–00:31:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1862s)

語氣要輕鬆一點還是偏正式一點

### S0506 · [00:31:06–00:31:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1866s)

輕鬆一點可能偏幽默類的語氣

### S0507 · [00:31:10–00:31:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1870s)

好明白

### S0508 · [00:31:12–00:31:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1872s)

第三個

### S0509 · [00:31:13–00:31:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1873s)

這十分鐘你希望是要逐字講稿

### S0510 · [00:31:16–00:31:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1876s)

還是條列式大綱就好

### S0511 · [00:31:19–00:31:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1879s)

逐字講稿

### S0512 · [00:31:21–00:31:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1881s)

OK

### S0513 · [00:31:22–00:31:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1882s)

第四

### S0514 · [00:31:23–00:31:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1883s)

能

### S0515 · [00:31:24–00:31:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1884s)

能不能加入一些生活類比

### S0516 · [00:31:27–00:31:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1887s)

好可以可以可以好

### S0517 · [00:31:29–00:31:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1889s)

趕快說第五

### S0518 · [00:31:30–00:31:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1890s)

OK

### S0519 · [00:31:31–00:31:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1891s)

好

### S0520 · [00:31:32–00:31:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1892s)

第五

### S0521 · [00:31:32–00:31:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1892s)

需要在結尾

### S0522 · [00:31:35–00:31:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1895s)

給聽眾一些行動

### S0523 · [00:31:37–00:31:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1897s)

好好沒問題

### S0524 · [00:31:39–00:31:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1899s)

趕快就好

### S0525 · [00:31:40–00:31:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1900s)

瞭解

### S0526 · [00:31:42–00:31:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1902s)

好

### S0527 · [00:31:43–00:31:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1903s)

那

### S0528 · [00:31:45–00:31:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1905s)

我就在這邊給你一個CO STAR的框架

### S0529 · [00:31:49–00:31:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1909s)

然後是根據你剛剛的答案

### S0530 · [00:31:57–00:31:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1917s)

對所以

### S0531 · [00:31:58–00:32:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1918s)

原則上你可以用剛才的方式

### S0532 · [00:32:00–00:32:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1920s)

你甚至可以不需要打字

### S0533 · [00:32:02–00:32:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1922s)

你其實就是把很模糊的需求

### S0534 · [00:32:05–00:32:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1925s)

直接丟給AI

### S0535 · [00:32:07–00:32:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1927s)

那開語音模式

### S0536 · [00:32:09–00:32:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1929s)

直接跟他討論

### S0537 · [00:32:10–00:32:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1930s)

如果你甚至你不知道你要的是什麼的話

### S0538 · [00:32:13–00:32:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1933s)

你也可以直接說

### S0539 · [00:32:15–00:32:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1935s)

我不知道

### S0540 · [00:32:17–00:32:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1937s)

或者你把你面臨到了情境呢

### S0541 · [00:32:21–00:32:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1941s)

用很直觀的語言直接告訴他

### S0542 · [00:32:24–00:32:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1944s)

然後你可以告訴他你現在的困境是什麼

### S0543 · [00:32:26–00:32:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1946s)

所以你沒有辦法做出選擇

### S0544 · [00:32:29–00:32:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1949s)

所以他會逐步的去幫你釐清說

### S0545 · [00:32:33–00:32:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1953s)

你現在真正可能需要的東西是什麼

### S0546 · [00:32:37–00:32:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1957s)

所以一旦這個這個很出色的

### S0547 · [00:32:40–00:32:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1960s)

Pump釐清清楚之後呢

### S0548 · [00:32:41–00:32:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1961s)

你可以再把這個Pump貼到其他的對話裡面

### S0549 · [00:32:45–00:32:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1965s)

那這樣的效果相對就是會比較好一點點

### S0550 · [00:32:51–00:32:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1971s)

接下來呢則是

## 10｜叫它扮演專家，就等於交代清楚工作了嗎？

HTML：[回到本章](index.html#role-and-rules)。原片範圍：00:32:51–00:34:26。

### S0551 · [00:32:53–00:32:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1973s)

之前有人說如果你增加一個

### S0552 · [00:32:57–00:32:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1977s)

給AI增加一個角色在Pump裡面

### S0553 · [00:33:00–00:33:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1980s)

會不會得到一個比較好的結果

### S0554 · [00:33:03–00:33:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1983s)

這個看個人

### S0555 · [00:33:05–00:33:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1985s)

我自己的經驗是我覺得還好

### S0556 · [00:33:08–00:33:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1988s)

依現在的模型來說

### S0557 · [00:33:09–00:33:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1989s)

因為現在模型都是足夠聰明

### S0558 · [00:33:12–00:33:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1992s)

如果你給他加一個專業知識的角色的話

### S0559 · [00:33:16–00:33:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=1996s)

他會用一個比較精準的專有名詞來去回復你

### S0560 · [00:33:21–00:33:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2001s)

例如你可能給他一個地質學家的角色

### S0561 · [00:33:25–00:33:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2005s)

他就可能會很精準的回答你說

### S0562 · [00:33:27–00:33:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2007s)

沙岩夜岩的這些岩石

### S0563 · [00:33:30–00:33:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2010s)

那如果你是給他一個

### S0564 · [00:33:32–00:33:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2012s)

偏非地質學家一個生活類的角色

### S0565 · [00:33:36–00:33:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2016s)

他可能就會告訴你說

### S0566 · [00:33:37–00:33:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2017s)

這個石頭摸起來會有一點粗粗的

### S0567 · [00:33:40–00:33:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2020s)

但這兩種其實都不太會影響最終的結果

### S0568 · [00:33:45–00:33:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2025s)

因為最終的結果還是取決於說

### S0569 · [00:33:49–00:33:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2029s)

你今天要做的東西是什麼

### S0570 · [00:33:51–00:33:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2031s)

如果你今天是要做一個資料的分析

### S0571 · [00:33:55–00:33:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2035s)

那你就要盡可能的去說明清楚說

### S0572 · [00:33:58–00:34:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2038s)

你這個資料的分析是要分析什麼樣的資料

### S0573 · [00:34:02–00:34:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2042s)

那要得到什麼樣的結果

### S0574 · [00:34:04–00:34:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2044s)

所以你可以再call另外一個AI

### S0575 · [00:34:07–00:34:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2047s)

來針對這個結果去做查核

### S0576 · [00:34:11–00:34:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2051s)

所以寫Pump呢

### S0577 · [00:34:12–00:34:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2052s)

其實你要把整個世界觀給寫出來

### S0578 · [00:34:16–00:34:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2056s)

誰要做什麼事誰不能做什麼事

### S0579 · [00:34:18–00:34:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2058s)

那誰要做什麼樣的工具

### S0580 · [00:34:20–00:34:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2060s)

誰要去做檢核

### S0581 · [00:34:22–00:34:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2062s)

所以這個其實是Pump最大的一個功能

### S0582 · [00:34:26–00:34:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2066s)

但是好的Pump呢不見得一定有

## 11｜格式很漂亮，為什麼內容還可能是錯的？

HTML：[回到本章](index.html#prompt-not-proof)。原片範圍：00:34:26–00:35:28。

### S0583 · [00:34:29–00:34:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2069s)

答案

### S0584 · [00:34:30–00:34:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2070s)

原因是因為他如果你開web search的話呢

### S0585 · [00:34:34–00:34:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2074s)

就是web search進來的資訊

### S0586 · [00:34:36–00:34:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2076s)

有可能不見得是正確的

### S0587 · [00:34:40–00:34:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2080s)

那第二個呢

### S0588 · [00:34:41–00:34:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2081s)

從低談課說了

### S0589 · [00:34:42–00:34:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2082s)

因為AI他是一個property的model

### S0590 · [00:34:45–00:34:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2085s)

所以他出來的

### S0591 · [00:34:47–00:34:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2087s)

每一個字其實都是有不同的機率存在的

### S0592 · [00:34:51–00:34:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2091s)

所以他有可能會出現幻覺

### S0593 · [00:34:54–00:34:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2094s)

所以這是我們一直強調的

### S0594 · [00:34:55–00:34:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2095s)

就是統計上產生看起來合理的東西

### S0595 · [00:34:58–00:35:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2098s)

但裡面的細節呢可能是錯的

### S0596 · [00:35:01–00:35:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2101s)

或是格式是正確但內容不正確

### S0597 · [00:35:04–00:35:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2104s)

這個非常非常常發生

### S0598 · [00:35:06–00:35:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2106s)

一旦你讓AI去看很大量的文字的時候

### S0599 · [00:35:11–00:35:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2111s)

後面最終的結果

### S0600 · [00:35:14–00:35:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2114s)

就有很大很高的機率會產生錯誤的

### S0601 · [00:35:19–00:35:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2119s)

這個不管你用多聰明的模型

### S0602 · [00:35:21–00:35:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2121s)

他都會有這種狀況發生

### S0603 · [00:35:28–00:35:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2128s)

所以在需求上呢

## 12｜除了 CO-STAR，還需要記住多少框架？

HTML：[回到本章](index.html#frameworks-as-checklists)。原片範圍：00:35:28–00:37:14。

### S0604 · [00:35:30–00:35:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2130s)

你可以逐步的去

### S0605 · [00:35:33–00:35:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2133s)

慢慢的去思考說

### S0606 · [00:35:35–00:35:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2135s)

不同的東西呢

### S0607 · [00:35:36–00:35:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2136s)

應該要怎麼樣下Pump去做執行

### S0608 · [00:35:40–00:35:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2140s)

所以Pump這個呢

### S0609 · [00:35:41–00:35:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2141s)

其實就是把你腦袋所想的

### S0610 · [00:35:44–00:35:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2144s)

然後給他非常清楚直白的寫出來就夠了

### S0611 · [00:35:50–00:35:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2150s)

對於複雜任務來說呢

### S0612 · [00:35:52–00:35:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2152s)

Pump不需要有很多有的沒有的罪質

### S0613 · [00:35:56–00:35:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2156s)

所以你在運用上呢

### S0614 · [00:35:58–00:36:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2158s)

你可以把它拆開來看

### S0615 · [00:36:00–00:36:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2160s)

如果你今天還沒有理清

### S0616 · [00:36:02–00:36:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2162s)

你自己要幹嘛的時候

### S0617 · [00:36:04–00:36:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2164s)

你可以開一個chat的function

### S0618 · [00:36:06–00:36:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2166s)

你跟自由跟AI不同的對話

### S0619 · [00:36:08–00:36:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2168s)

或你跟我剛開一樣開voice

### S0620 · [00:36:12–00:36:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2172s)

你可以很直觀的一直不斷的跟AI對話

### S0621 · [00:36:15–00:36:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2175s)

來去理清你究竟要幹嘛

### S0622 · [00:36:19–00:36:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2179s)

最後呢再讓AI協助你去產生一個Pump

### S0623 · [00:36:23–00:36:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2183s)

再把這個Pump貼到

### S0624 · [00:36:26–00:36:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2186s)

可能像Codec或Codeco當中去做執行

### S0625 · [00:36:30–00:36:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2190s)

除了CodeStar的框架以外呢

### S0626 · [00:36:32–00:36:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2192s)

還有其他有的沒有的框架蠻多的

### S0627 · [00:36:37–00:36:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2197s)

但這個框架就是隨個人看一看就好

### S0628 · [00:36:40–00:36:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2200s)

因為有人把它整理出來了

### S0629 · [00:36:43–00:36:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2203s)

但這種東西基本上都是

### S0630 · [00:36:45–00:36:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2205s)

有點像你其實就是把主要的核心架構

### S0631 · [00:36:49–00:36:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2209s)

給掌握清楚就好

### S0632 · [00:36:50–00:36:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2210s)

就我從來沒有記過這些東西

### S0633 · [00:36:52–00:36:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2212s)

因為這些東西太難記了

### S0634 · [00:36:54–00:36:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2214s)

那你也不需要把它印出來當成表格一樣去參考

### S0635 · [00:36:59–00:37:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2219s)

其實這個就是慢慢去做練習就好

### S0636 · [00:37:02–00:37:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2222s)

一開始你一定說不清楚

### S0637 · [00:37:05–00:37:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2225s)

那最後呢你藉由讓AI產生的Pump

### S0638 · [00:37:08–00:37:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2228s)

跟你的Pump下去做檢核

### S0639 · [00:37:11–00:37:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2231s)

互相比對久了你就會清楚

### S0640 · [00:37:14–00:37:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2234s)

第二個呢只是好的Pump其實是改出來的

## 13｜畫面沒違反指令，為什麼還不是你想要的？

HTML：[回到本章](index.html#video-one-two)。原片範圍：00:37:14–00:38:50。

### S0641 · [00:37:17–00:37:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2237s)

有時候呢第一個Pump不見得是很正確的

### S0642 · [00:37:22–00:37:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2242s)

就你可以在你腦袋裡想一個畫面

### S0643 · [00:37:25–00:37:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2245s)

我們切到第二個部分呢

### S0644 · [00:37:28–00:37:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2248s)

我們全部都用Video來去展現

### S0645 · [00:37:31–00:37:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2251s)

因為Video呢是最直觀的一個視覺

### S0646 · [00:37:36–00:37:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2256s)

所以如果你今天呢跟我一樣去

### S0647 · [00:37:38–00:37:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2258s)

針對右邊這個文字呢

### S0648 · [00:37:41–00:37:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2261s)

去想一個畫面的時候

### S0649 · [00:37:43–00:37:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2263s)

那你覺得AI會產生什麼樣的畫面

### S0650 · [00:37:55–00:37:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2275s)

就你有發現這個畫面非常的奇特

### S0651 · [00:37:58–00:38:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2278s)

但是它沒有任何的錯誤

### S0652 · [00:38:02–00:38:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2282s)

對吧

### S0653 · [00:38:03–00:38:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2283s)

就是你會發現說這個畫面完全是match到

### S0654 · [00:38:07–00:38:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2287s)

你這個場景的

### S0655 · [00:38:10–00:38:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2290s)

所以一定是什麼東西出了問題

### S0656 · [00:38:13–00:38:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2293s)

所以如果我們今天把它改成第一人生視角

### S0657 · [00:38:16–00:38:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2296s)

因為剛才的視角實在太怪了

### S0658 · [00:38:19–00:38:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2299s)

好我們再回來

### S0659 · [00:38:29–00:38:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2309s)

就是這個版本看起來好一點了

### S0660 · [00:38:32–00:38:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2312s)

但你有沒有發現說最後好像有點

### S0661 · [00:38:35–00:38:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2315s)

還是非常的奇怪

### S0662 · [00:38:36–00:38:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2316s)

就是你會預期說

### S0663 · [00:38:39–00:38:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2319s)

整個文字應該是要給你那種有點恐怖的感覺

### S0664 · [00:38:43–00:38:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2323s)

但你看後面好像變得有點搞笑

### S0665 · [00:38:46–00:38:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2326s)

好所以這時候我們就再回來

### S0666 · [00:38:49–00:38:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2329s)

來去修整

### S0667 · [00:38:50–00:38:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2330s)

我們就需要有一點驚悚的這種感覺

## 14｜只說「驚悚」，AI 可能只改了哪一部分？

HTML：[回到本章](index.html#video-three-four)。原片範圍：00:38:50–00:40:07。

### S0668 · [00:39:04–00:39:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2344s)

對但就是音樂聽起來非常的驚悚

### S0669 · [00:39:07–00:39:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2347s)

但整個畫面呢又是非常的違和

### S0670 · [00:39:10–00:39:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2350s)

就它這個怪物不是應該要做點什麼嗎

### S0671 · [00:39:14–00:39:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2354s)

就這個才是符合我們心中的期待

### S0672 · [00:39:17–00:39:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2357s)

對吧

### S0673 · [00:39:19–00:39:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2359s)

所以這時候你可以再回去修改你的Prompt

### S0674 · [00:39:32–00:39:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2372s)

有沒有所以你就會發現說

### S0675 · [00:39:34–00:39:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2374s)

這個版本好像

### S0676 · [00:39:36–00:39:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2376s)

比較對位了

### S0677 · [00:39:38–00:39:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2378s)

就它還會利用那個速度差有音樂

### S0678 · [00:39:41–00:39:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2381s)

然後也有奇特的這種畫面

### S0679 · [00:39:44–00:39:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2384s)

所以這個東西其實就是

### S0680 · [00:39:45–00:39:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2385s)

就是你要一直不斷的去

### S0681 · [00:39:47–00:39:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2387s)

疊帶你的Prompt

### S0682 · [00:39:48–00:39:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2388s)

第一個版本的Prompt不見得會修得非常的好

### S0683 · [00:39:52–00:39:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2392s)

所以你要去觀察說

### S0684 · [00:39:54–00:39:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2394s)

你現在缺少了什麼樣的元素

### S0685 · [00:39:58–00:39:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2398s)

那針對缺少元素呢

### S0686 · [00:39:59–00:40:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2399s)

再回去疊帶了去修改你的Prompt

### S0687 · [00:40:07–00:40:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2407s)

所以它其實同一個畫面呢

## 15｜圖做得很漂亮，為什麼還得打開分析過程？

HTML：[回到本章](index.html#iteration-and-evidence)。原片範圍：00:40:07–00:42:07。

### S0688 · [00:40:09–00:40:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2409s)

會有可能四個版本不同的Prompt

### S0689 · [00:40:12–00:40:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2412s)

所以剛

### S0690 · [00:40:13–00:40:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2413s)

各位都看到V1到V4的這種感覺

### S0691 · [00:40:18–00:40:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2418s)

當你描述的越清楚的時候

### S0692 · [00:40:21–00:40:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2421s)

其實AI才能夠越清楚的製造出

### S0693 · [00:40:24–00:40:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2424s)

符合你需求的文件或產品

### S0694 · [00:40:29–00:40:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2429s)

整個步驟呢會分六個

### S0695 · [00:40:32–00:40:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2432s)

你可能會有第一版的Prompt

### S0696 · [00:40:34–00:40:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2434s)

AI輸出之後呢

### S0697 · [00:40:35–00:40:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2435s)

你會觀察結果

### S0698 · [00:40:38–00:40:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2438s)

找出落差再回去修改

### S0699 · [00:40:40–00:40:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2440s)

這個講起來非常的簡單

### S0700 · [00:40:43–00:40:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2443s)

但這個實際做起來

### S0701 · [00:40:45–00:40:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2445s)

非常的難

### S0702 · [00:40:46–00:40:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2446s)

原因是因為

### S0703 · [00:40:47–00:40:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2447s)

如果你今天是做影像

### S0704 · [00:40:50–00:40:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2450s)

的話

### S0705 · [00:40:51–00:40:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2451s)

你可以很直觀的去察覺到

### S0706 · [00:40:55–00:40:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2455s)

就是這個落差到底在哪裡

### S0707 · [00:40:57–00:41:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2457s)

如果你今天產生的結果是文字的話

### S0708 · [00:41:01–00:41:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2461s)

這個非常難觀察

### S0709 · [00:41:03–00:41:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2463s)

一旦你沒有

### S0710 · [00:41:05–00:41:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2465s)

對文字有很高的敏感度的話

### S0711 · [00:41:07–00:41:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2467s)

你其實很難去找出落差

### S0712 · [00:41:10–00:41:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2470s)

那同樣的

### S0713 · [00:41:11–00:41:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2471s)

如果你今天拿AI是來做

### S0714 · [00:41:14–00:41:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2474s)

資料分析的話

### S0715 · [00:41:16–00:41:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2476s)

你很難去觀察到這個結果

### S0716 · [00:41:19–00:41:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2479s)

跟你預期的到底有沒有落差

### S0717 · [00:41:21–00:41:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2481s)

因為

### S0718 · [00:41:22–00:41:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2482s)

你要把整個AI運算的過程給打開

### S0719 · [00:41:26–00:41:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2486s)

它在

### S0720 · [00:41:27–00:41:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2487s)

從Prompt到結果中間呢

### S0721 · [00:41:29–00:41:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2489s)

它到底做了什麼樣的事

### S0722 · [00:41:31–00:41:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2491s)

它寫了多少的程式

### S0723 · [00:41:33–00:41:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2493s)

那這個程式呢是怎麼樣去讀檔案

### S0724 · [00:41:36–00:41:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2496s)

怎麼樣去做分析

### S0725 · [00:41:37–00:41:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2497s)

怎麼樣去畫圖

### S0726 · [00:41:39–00:41:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2499s)

怎麼樣產生出結果

### S0727 · [00:41:42–00:41:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2502s)

對所以有時候你會看到漂漂亮亮的圖

### S0728 · [00:41:45–00:41:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2505s)

那你如果沒有

### S0729 · [00:41:46–00:41:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2506s)

仔細去

### S0730 · [00:41:48–00:41:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2508s)

看裡面到底AI產生出了什麼樣的工具的話

### S0731 · [00:41:51–00:41:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2511s)

一樣就是

### S0732 · [00:41:52–00:41:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2512s)

所有的東西呢

### S0733 · [00:41:53–00:41:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2513s)

它都是機率模型

### S0734 · [00:41:55–00:41:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2515s)

所以它一定會有錯誤

### S0735 · [00:41:56–00:41:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2516s)

所以有可能漂亮的圖表背後

### S0736 · [00:41:59–00:42:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2519s)

的資料的抓舉

### S0737 · [00:42:01–00:42:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2521s)

甚至是不正確的

### S0738 · [00:42:02–00:42:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2522s)

所以這個過程其實

### S0739 · [00:42:04–00:42:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2524s)

不是那麼好做

### S0740 · [00:42:07–00:42:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2527s)

所以這邊有一個很簡單的影片

## 16｜「做一片果醬吐司」為什麼還需要拆步驟？

HTML：[回到本章](index.html#toast-procedure)。原片範圍：00:42:07–00:44:58。

### S0741 · [00:42:09–00:42:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2529s)

就是告訴各位說

### S0742 · [00:42:11–00:42:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2531s)

就是要怎麼樣把腦袋的流程搬出來

### S0743 · [00:42:30–00:42:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2550s)

他這個影片呢主要做的是呢

### S0744 · [00:42:33–00:42:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2553s)

他是給小朋友

### S0745 · [00:42:35–00:42:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2555s)

他拿一個

### S0746 · [00:42:36–00:42:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2556s)

那個

### S0747 · [00:42:37–00:42:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2557s)

就是學習單給小朋友他說呢

### S0748 · [00:42:39–00:42:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2559s)

你們要怎麼樣去做

### S0749 · [00:42:41–00:42:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2561s)

果醬吐司

### S0750 · [00:42:42–00:42:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2562s)

這個聽起來非常的簡單

### S0751 · [00:42:44–00:42:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2564s)

對但

### S0752 · [00:42:45–00:42:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2565s)

這個這個過程當中呢

### S0753 · [00:42:48–00:42:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2568s)

蠻難的

### S0754 · [00:42:49–00:42:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2569s)

可以我們可能放一分鐘來看一下

### S0755 · [00:43:00–00:43:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2580s)

you get peanut butter

### S0756 · [00:43:02–00:43:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2582s)

and you get jelly

### S0757 · [00:43:05–00:43:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2585s)

did i make it

### S0758 · [00:43:07–00:43:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2587s)

that's what it said to do

### S0759 · [00:43:08–00:43:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2588s)

i got my bread

### S0760 · [00:43:09–00:43:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2589s)

i got my peanut butter and i got my jelly

### S0761 · [00:43:11–00:43:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2591s)

so it's good

### S0762 · [00:43:13–00:43:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2593s)

let's try another one

### S0763 · [00:43:14–00:43:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2594s)

put the bread flat

### S0764 · [00:43:17–00:43:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2597s)

all right

### S0765 · [00:43:18–00:43:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2598s)

it's pretty flat i feel like that's good

### S0766 · [00:43:19–00:43:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2599s)

spread jelly and jam on the bread

### S0767 · [00:43:22–00:43:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2602s)

this is good so far

### S0768 · [00:43:28–00:43:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2608s)

put peanut butter on the other side

### S0769 · [00:43:32–00:43:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2612s)

it's crunchy

### S0770 · [00:43:33–00:43:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2613s)

spread peanut butter on the other side

### S0771 · [00:43:35–00:43:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2615s)

got it

### S0772 · [00:43:38–00:43:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2618s)

like this

### S0773 · [00:43:45–00:43:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2625s)

that's what it said to do

### S0774 · [00:43:48–00:43:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2628s)

let's look at another one

### S0775 · [00:43:49–00:43:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2629s)

you need to get out the

### S0776 · [00:43:51–00:43:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2631s)

oh get out the bread

### S0777 · [00:43:53–00:43:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2633s)

first i get out the bread

### S0778 · [00:43:55–00:43:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2635s)

get out some jelly

### S0779 · [00:43:56–00:43:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2636s)

perfect

### S0780 · [00:43:57–00:43:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2637s)

get out peanut butter too

### S0781 · [00:43:29–00:43:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2609s)

另一邊

### S0782 · [00:43:32–00:43:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2612s)

很酥脆

### S0783 · [00:43:33–00:43:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2613s)

在另一邊塗上蕃茄油

### S0784 · [00:43:35–00:43:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2615s)

明白了

### S0785 · [00:43:38–00:43:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2618s)

像這樣嗎?

### S0786 · [00:43:39–00:43:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2619s)

準備吃了嗎?

### S0787 · [00:43:45–00:43:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2625s)

這就是要做的

### S0788 · [00:43:47–00:43:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2627s)

再看看另一個

### S0789 · [00:43:49–00:43:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2629s)

你必須要拿出

### S0790 · [00:43:52–00:43:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2632s)

拿出蕃茄油

### S0791 · [00:43:53–00:43:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2633s)

先拿出蕃茄油

### S0792 · [00:43:55–00:43:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2635s)

拿出蕃茄油

### S0793 · [00:43:56–00:43:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2636s)

完美

### S0794 · [00:43:57–00:43:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2637s)

拿出蕃茄油

### S0795 · [00:44:00–00:44:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2640s)

對,所以這整個流程呢

### S0796 · [00:44:01–00:44:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2641s)

其實你要變成是像

### S0797 · [00:44:04–00:44:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2644s)

有點像工程師的思維

### S0798 · [00:44:06–00:44:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2646s)

然後來去引導AI說

### S0799 · [00:44:08–00:44:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2648s)

你的第一步要做什麼

### S0800 · [00:44:09–00:44:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2649s)

所以以塗果醬吐司這個例子呢

### S0801 · [00:44:12–00:44:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2652s)

第一步呢

### S0802 · [00:44:13–00:44:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2653s)

你可能要把袋子給拆開

### S0803 · [00:44:16–00:44:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2656s)

那把果醬拿出來

### S0804 · [00:44:18–00:44:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2658s)

那可能放到盤子上

### S0805 · [00:44:20–00:44:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2660s)

再來把果醬打開

### S0806 · [00:44:22–00:44:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2662s)

然後手拿湯匙

### S0807 · [00:44:25–00:44:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2665s)

再舀果醬

### S0808 · [00:44:26–00:44:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2666s)

然後塗上麵包

### S0809 · [00:44:28–00:44:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2668s)

所以你可以知道說

### S0810 · [00:44:30–00:44:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2670s)

就這個流程看起來很簡單

### S0811 · [00:44:32–00:44:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2672s)

但是

### S0812 · [00:44:33–00:44:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2673s)

你把每一個流程拆開的話

### S0813 · [00:44:36–00:44:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2676s)

它需要非常精準的去描述

### S0814 · [00:44:39–00:44:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2679s)

你每一個流程

### S0815 · [00:44:40–00:44:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2680s)

需要做什麼樣的事

### S0816 · [00:44:42–00:44:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2682s)

所以這其實就是整個

### S0817 · [00:44:44–00:44:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2684s)

Prompt Engineering的一個核心

### S0818 · [00:44:47–00:44:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2687s)

就是你能不能

### S0819 · [00:44:49–00:44:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2689s)

有大致上的世界觀

### S0820 · [00:44:52–00:44:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2692s)

能夠把整個流程呢

### S0821 · [00:44:53–00:44:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2693s)

給用文字來敘述的非常的清楚

## 17｜為什麼只是改一句話，場景卻一路跑掉了？

HTML：[回到本章](index.html#coffee-video)。原片範圍：00:44:58–00:47:00。

### S0822 · [00:44:58–00:45:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2698s)

所以如果我們回到另外一個影片的話

### S0823 · [00:45:02–00:45:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2702s)

有一個影片我覺得蠻好笑的

### S0824 · [00:45:04–00:45:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2704s)

就是

### S0825 · [00:45:05–00:45:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2705s)

這其實也是跟Prompt有關

### S0826 · [00:45:07–00:45:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2707s)

聲稱女主推門走進咖啡店

### S0827 · [00:45:13–00:45:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2713s)

對嘛

### S0828 · [00:45:13–00:45:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2713s)

輕點推門

### S0829 · [00:45:14–00:45:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2714s)

別再把門摔了

### S0830 · [00:45:20–00:45:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2720s)

就非得把人家的門拆了是吧

### S0831 · [00:45:22–00:45:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2722s)

也行吧

### S0832 · [00:45:22–00:45:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2722s)

繼續

### S0833 · [00:45:23–00:45:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2723s)

咖啡廳內男主轉頭看見女主

### S0834 · [00:45:28–00:45:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2728s)

這樣轉頭還是人類嗎

### S0835 · [00:45:30–00:45:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2730s)

算了

### S0836 · [00:45:31–00:45:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2731s)

讓女主直接坐到男主對面吧

### S0837 · [00:45:33–00:45:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2733s)

是坐在椅子上啊

### S0838 · [00:45:39–00:45:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2739s)

就這樣吧

### S0839 · [00:45:40–00:45:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2740s)

男主給女主倒一杯咖啡吧

### S0840 · [00:45:44–00:45:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2744s)

誰讓你這麼倒咖啡的

### S0841 · [00:45:45–00:45:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2745s)

把他頭髮弄乾淨啊

### S0842 · [00:45:47–00:45:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2747s)

水溫可以嗎

### S0843 · [00:45:49–00:45:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2749s)

可以

### S0844 · [00:45:49–00:45:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2749s)

怎麼到理髮店了

### S0845 · [00:45:51–00:45:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2751s)

換回來啊

### S0846 · [00:45:53–00:45:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2753s)

水溫可以嗎

### S0847 · [00:45:55–00:45:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2755s)

可以

### S0848 · [00:45:55–00:45:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2755s)

我是說換回咖啡店啊

### S0849 · [00:45:58–00:45:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2758s)

水溫可以嗎

### S0850 · [00:45:59–00:46:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2759s)

可以

### S0851 · [00:46:03–00:46:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2763s)

對所以

### S0852 · [00:46:04–00:46:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2764s)

這影片

### S0853 · [00:46:05–00:46:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2765s)

我覺得我自己覺得蠻好笑的

### S0854 · [00:46:08–00:46:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2768s)

它其實整個核心也是一樣

### S0855 · [00:46:10–00:46:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2770s)

就是

### S0856 · [00:46:11–00:46:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2771s)

有時候我們認為的

### S0857 · [00:46:13–00:46:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2773s)

腦袋裡面的東西

### S0858 · [00:46:15–00:46:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2775s)

其實要轉換成文字

### S0859 · [00:46:17–00:46:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2777s)

要說得非常非常清楚的時候

### S0860 · [00:46:19–00:46:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2779s)

這過程是非常的難的

### S0861 · [00:46:21–00:46:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2781s)

原因是因為

### S0862 · [00:46:22–00:46:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2782s)

人的生活會有大量的經驗

### S0863 · [00:46:25–00:46:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2785s)

就是你其實已經從小到大

### S0864 · [00:46:26–00:46:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2786s)

你已經塗過數十遍國障吐司了

### S0865 · [00:46:30–00:46:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2790s)

所以你在表達文字的時候

### S0866 · [00:46:32–00:46:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2792s)

你其實不需要

### S0867 · [00:46:34–00:46:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2794s)

說得這麼清楚

### S0868 · [00:46:35–00:46:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2795s)

但是對方也可以理解

### S0869 · [00:46:37–00:46:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2797s)

但對AI來說

### S0870 · [00:46:38–00:46:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2798s)

你可以不用說得這麼清楚

### S0871 · [00:46:40–00:46:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2800s)

但他絕對沒有辦法理解

### S0872 · [00:46:42–00:46:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2802s)

他只能夠用

### S0873 · [00:46:44–00:46:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2804s)

猜的方式

### S0874 · [00:46:45–00:46:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2805s)

來去

### S0875 · [00:46:46–00:46:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2806s)

想說你到底要幹嘛

### S0876 · [00:46:48–00:46:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2808s)

所以就會產生很多的

### S0877 · [00:46:51–00:46:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2811s)

誤解

### S0878 · [00:46:52–00:46:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2812s)

和產生很多

### S0879 · [00:46:53–00:46:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2813s)

不一定是正確的這個

### S0880 · [00:46:56–00:47:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2816s)

結果出現

## 18｜一直在同一串對話修改，舊答案會不會干擾新任務？

HTML：[回到本章](index.html#context-drift)。原片範圍：00:47:00–00:48:05。

### S0881 · [00:47:00–00:47:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2820s)

所以這個我們可以

### S0882 · [00:47:02–00:47:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2822s)

很快的來看一下

### S0883 · [00:47:04–00:47:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2824s)

所以有可能呢

### S0884 · [00:47:05–00:47:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2825s)

你產生一個初始的Prompt之後

### S0885 · [00:47:08–00:47:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2828s)

那AI給你第二個

### S0886 · [00:47:10–00:47:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2830s)

第一個答案

### S0887 · [00:47:12–00:47:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2832s)

這個你不滿意呢

### S0888 · [00:47:13–00:47:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2833s)

你會再可能

### S0889 · [00:47:14–00:47:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2834s)

叫AI show第二個Prompt

### S0890 · [00:47:16–00:47:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2836s)

再產生第二個結果

### S0891 · [00:47:18–00:47:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2838s)

第三個Prompt

### S0892 · [00:47:19–00:47:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2839s)

再第三個結果

### S0893 · [00:47:21–00:47:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2841s)

隨著很多不同的結果堆疊之後呢

### S0894 · [00:47:24–00:47:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2844s)

這些脈絡呢

### S0895 · [00:47:25–00:47:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2845s)

整個會進入到AI的腦袋裡面

### S0896 · [00:47:28–00:47:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2848s)

那這個東西呢

### S0897 · [00:47:29–00:47:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2849s)

整個呢

### S0898 · [00:47:30–00:47:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2850s)

我們就會叫它context

### S0899 · [00:47:32–00:47:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2852s)

所以有個東西叫context engineering

### S0900 · [00:47:34–00:47:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2854s)

它其實就是脈絡

### S0901 · [00:47:36–00:47:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2856s)

工程的意思

### S0902 · [00:47:37–00:47:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2857s)

所以當你後續有

### S0903 · [00:47:39–00:47:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2859s)

更新的Prompt產生的時候呢

### S0904 · [00:47:41–00:47:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2861s)

其實這個Prompt會說

### S0905 · [00:47:42–00:47:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2862s)

前面的文字給

### S0906 · [00:47:45–00:47:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2865s)

這個叫上下文的腐敗

### S0907 · [00:47:48–00:47:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2868s)

所以有時候

### S0908 · [00:47:50–00:47:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2870s)

要有最新的結果的時候呢

### S0909 · [00:47:52–00:47:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2872s)

就其實基本上

### S0910 · [00:47:53–00:47:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2873s)

等你討論到最後一個的時候

### S0911 · [00:47:55–00:47:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2875s)

你另外開一個新的對話

### S0912 · [00:47:57–00:47:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2877s)

把那個Prompt再貼到

### S0913 · [00:47:58–00:48:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2878s)

新的對話給它就好

## 19｜你說的「做好了」，能不能讓別人檢查？

HTML：[回到本章](index.html#define-good)。原片範圍：00:48:05–00:49:10。

### S0914 · [00:48:05–00:48:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2885s)

在使用AI上呢

### S0915 · [00:48:06–00:48:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2886s)

人的工作呢

### S0916 · [00:48:08–00:48:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2888s)

已經開始往上移了

### S0917 · [00:48:09–00:48:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2889s)

就是你需要

### S0918 · [00:48:10–00:48:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2890s)

很好的去定義整個問題

### S0919 · [00:48:13–00:48:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2893s)

你需要很好去描述整個需求

### S0920 · [00:48:15–00:48:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2895s)

你也需要判斷成果

### S0921 · [00:48:17–00:48:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2897s)

發現偏差

### S0922 · [00:48:18–00:48:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2898s)

並且提供回饋

### S0923 · [00:48:20–00:48:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2900s)

最後呢

### S0924 · [00:48:20–00:48:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2900s)

你要決定說下一輪呢

### S0925 · [00:48:22–00:48:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2902s)

你需要怎麼樣做修正

### S0926 · [00:48:25–00:48:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2905s)

所以這個過程其實不是那麼

### S0927 · [00:48:28–00:48:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2908s)

簡單

### S0928 · [00:48:28–00:48:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2908s)

尤其是你要

### S0929 · [00:48:29–00:48:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2909s)

回過頭來

### S0930 · [00:48:30–00:48:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2910s)

你要讓AI產生文字

### S0931 · [00:48:32–00:48:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2912s)

或進行分析的時候呢

### S0932 · [00:48:34–00:48:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2914s)

非常難去發現

### S0933 · [00:48:35–00:48:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2915s)

但如果你今天只是要讓AI做一個網站

### S0934 · [00:48:38–00:48:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2918s)

或做一個很視覺化的東西

### S0935 · [00:48:41–00:48:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2921s)

的時候

### S0936 · [00:48:42–00:48:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2922s)

這時候呢

### S0937 · [00:48:43–00:48:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2923s)

相對就會比較簡單一點

### S0938 · [00:48:46–00:48:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2926s)

所以核心就是呢

### S0939 · [00:48:47–00:48:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2927s)

你需要知道

### S0940 · [00:48:48–00:48:49](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2928s)

好呢

### S0941 · [00:48:49–00:48:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2929s)

長怎樣

### S0942 · [00:48:50–00:48:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2930s)

這個文字掉了

### S0943 · [00:48:51–00:48:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2931s)

所以好呢

### S0944 · [00:48:53–00:48:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2933s)

就有點像你要怎麼知道說資料是分析好了

### S0945 · [00:48:56–00:48:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2936s)

或者是這個資料的好是

### S0946 · [00:48:59–00:49:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2939s)

可能你的老闆或整個交付任務的時候呢

### S0947 · [00:49:04–00:49:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2944s)

就是是有被很好的去做定義的

## 20｜AI 做不好，問題一定是模型不夠強嗎？

HTML：[回到本章](index.html#model-and-harness)。原片範圍：00:49:10–00:50:35。

### S0948 · [00:49:10–00:49:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2950s)

當然Prompt只是其中一層而已

### S0949 · [00:49:14–00:49:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2954s)

就是整個模型呢

### S0950 · [00:49:16–00:49:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2956s)

就是Agent呢

### S0951 · [00:49:19–00:49:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2959s)

可以想像成它其實是一個原模型加上

### S0952 · [00:49:22–00:49:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2962s)

Honest

### S0953 · [00:49:24–00:49:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2964s)

Honest呢

### S0954 · [00:49:25–00:49:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2965s)

有非常多

### S0955 · [00:49:25–00:49:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2965s)

就是我們剛剛之前說過的

### S0956 · [00:49:27–00:49:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2967s)

就是功能

### S0957 · [00:49:28–00:49:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2968s)

還有可能呼叫功能的這些準則

### S0958 · [00:49:32–00:49:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2972s)

那以及記憶

### S0959 · [00:49:33–00:49:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2973s)

那還有上下文怎麼樣去管理的

### S0960 · [00:49:36–00:49:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2976s)

那當然還有你的skill

### S0961 · [00:49:37–00:49:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2977s)

也就是技能的部分

### S0962 · [00:49:39–00:49:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2979s)

所以Agent表現的不好呢

### S0963 · [00:49:41–00:49:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2981s)

問題呢

### S0964 · [00:49:41–00:49:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2981s)

不一定出在模型

### S0965 · [00:49:44–00:49:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2984s)

第一個呢

### S0966 · [00:49:44–00:49:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2984s)

有可能是你Prompt寫的不清楚

### S0967 · [00:49:46–00:49:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2986s)

那第二個呢

### S0968 · [00:49:47–00:49:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2987s)

有可能是你上下文塞太多東西了

### S0969 · [00:49:51–00:49:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2991s)

所以導致於你會有上下文腐敗的狀況

### S0970 · [00:49:54–00:49:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2994s)

或者是你上下文裡面塞不同的東西

### S0971 · [00:49:58–00:49:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2998s)

你第一個呢

### S0972 · [00:49:58–00:50:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=2998s)

可能討論是旅遊

### S0973 · [00:50:00–00:50:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3000s)

那你會覺得說

### S0974 · [00:50:01–00:50:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3001s)

哎這個聊得很好啊

### S0975 · [00:50:02–00:50:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3002s)

然後你天外飛啊

### S0976 · [00:50:03–00:50:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3003s)

一筆突然插上一個健身

### S0977 · [00:50:07–00:50:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3007s)

所以上下完全沒有關係

### S0978 · [00:50:09–00:50:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3009s)

所以它就會有上下文的汙染

### S0979 · [00:50:13–00:50:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3013s)

那第三個呢

### S0980 · [00:50:14–00:50:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3014s)

就是Honest的流程設計是有問題的

### S0981 · [00:50:17–00:50:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3017s)

包括你需要多少個skill

### S0982 · [00:50:20–00:50:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3020s)

那你需要多少個Agent

### S0983 · [00:50:23–00:50:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3023s)

所以有時候問題

### S0984 · [00:50:25–00:50:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3025s)

不見得是你換一個更好的模型

### S0985 · [00:50:28–00:50:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3028s)

就會有一個比較好的結果

### S0986 · [00:50:31–00:50:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3031s)

這個是不一定的

## 21｜提示詞裡的每一條規則，真的都有幫助嗎？

HTML：[回到本章](index.html#compare-rules)。原片範圍：00:50:35–00:51:09。

### S0987 · [00:50:35–00:50:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3035s)

所以回去可以

### S0988 · [00:50:36–00:50:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3036s)

自己回去可以用一個簡單的例子呢

### S0989 · [00:50:40–00:50:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3040s)

來去做設計

### S0990 · [00:50:42–00:50:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3042s)

一樣可以想一下說

### S0991 · [00:50:44–00:50:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3044s)

如果用Costar的話

### S0992 · [00:50:46–00:50:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3046s)

我把其中一個item換掉的話

### S0993 · [00:50:48–00:50:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3048s)

那整個產出的結果會是如何的

### S0994 · [00:50:52–00:50:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3052s)

所以一旦你開始比較之後呢

### S0995 · [00:50:54–00:50:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3054s)

你會比較清楚的知道說

### S0996 · [00:50:57–00:50:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3057s)

就是少一個規則

### S0997 · [00:50:59–00:50:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3059s)

多一個規則

### S0998 · [00:50:59–00:51:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3059s)

對整個結果產生出來

### S0999 · [00:51:02–00:51:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3062s)

會有多大的差異性存在

## 22｜真正要配好的，除了提示詞還有哪些東西？

HTML：[回到本章](index.html#system-layers)。原片範圍：00:51:09–00:53:30。

### S1000 · [00:51:09–00:51:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3069s)

所以真正的系統呢

### S1001 · [00:51:11–00:51:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3071s)

它不是在找一個完美的prompt

### S1002 · [00:51:15–00:51:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3075s)

因為真正完美的系統

### S1003 · [00:51:17–00:51:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3077s)

好的系統呢

### S1004 · [00:51:18–00:51:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3078s)

它牽涉到非常非常多

### S1005 · [00:51:20–00:51:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3080s)

就是prompt只是最基本的

### S1006 · [00:51:23–00:51:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3083s)

你如何去引導AI

### S1007 · [00:51:24–00:51:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3084s)

那就會進入到一個context

### S1008 · [00:51:27–00:51:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3087s)

因為所有的prompt都會疊在一起了

### S1009 · [00:51:29–00:51:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3089s)

就是你的context能不能保持一個

### S1010 · [00:51:31–00:51:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3091s)

非常乾淨的狀態

### S1011 · [00:51:33–00:51:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3093s)

就是它完全依照你的脈絡來去進行

### S1012 · [00:51:38–00:51:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3098s)

再來就是總共你有多少個工具

### S1013 · [00:51:42–00:51:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3102s)

那以及你需不需要調用記憶

### S1014 · [00:51:44–00:51:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3104s)

或是你的專案做到一半的話

### S1015 · [00:51:47–00:51:51](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3107s)

你這個專案能不能保存之前的記憶

### S1016 · [00:51:51–00:51:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3111s)

這個都非常的重要

### S1017 · [00:51:52–00:51:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3112s)

還有你的工作流要怎麼設計

### S1018 · [00:51:55–00:51:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3115s)

安全護欄你如何去評估

### S1019 · [00:51:58–00:52:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3118s)

最後呢才是替換模型

### S1020 · [00:52:01–00:52:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3121s)

所以不見得需要用到很聰明的模型

### S1021 · [00:52:04–00:52:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3124s)

才可以做事

### S1022 · [00:52:05–00:52:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3125s)

像現在比較聰明的模型

### S1023 · [00:52:08–00:52:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3128s)

大概是Cloud的Opus 5.5或Fab 5.5

### S1024 · [00:52:13–00:52:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3133s)

但如果你有一個非常好的

### S1025 · [00:52:16–00:52:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3136s)

整個系統和工作流的話

### S1026 · [00:52:19–00:52:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3139s)

你可能用到Opus 4.8

### S1027 · [00:52:21–00:52:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3141s)

可能就可以達到同樣的一個結果

### S1028 · [00:52:26–00:52:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3146s)

所以模型只是其中一個一項item而已

### S1029 · [00:52:31–00:52:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3151s)

就是你還有非常多其他的

### S1030 · [00:52:33–00:52:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3153s)

會影響到你最終的產出

### S1031 · [00:52:36–00:52:38](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3156s)

所以如果你是需要

### S1032 · [00:52:38–00:52:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3158s)

針對資料去做分析的話

### S1033 · [00:52:40–00:52:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3160s)

你這裡所有的東西

### S1034 · [00:52:42–00:52:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3162s)

最好都是為了資料分析去做準備

### S1035 · [00:52:46–00:52:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3166s)

如果你今天只是要去可能

### S1036 · [00:52:48–00:52:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3168s)

改文章寫文章的話

### S1037 · [00:52:50–00:52:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3170s)

那這個東西整個所有的工具

### S1038 · [00:52:53–00:52:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3173s)

就需要替寫文章去做準備

### S1039 · [00:52:58–00:53:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3178s)

所以不同的target或不同的目標

### S1040 · [00:53:02–00:53:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3182s)

其實會決定在於說

### S1041 · [00:53:05–00:53:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3185s)

你會有可能不同的Honest的組合

### S1042 · [00:53:09–00:53:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3189s)

所以在Tool方面

### S1043 · [00:53:11–00:53:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3191s)

有一些東西用不到

### S1044 · [00:53:12–00:53:13](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3192s)

其實在這個專案用不到

### S1045 · [00:53:13–00:53:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3193s)

你就可以把它關掉

### S1046 · [00:53:15–00:53:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3195s)

所以這就會回到我們之後會討論的

### S1047 · [00:53:17–00:53:20](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3197s)

就是我們如何去做skill

### S1048 · [00:53:20–00:53:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3200s)

或如何去加載skill

### S1049 · [00:53:22–00:53:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3202s)

那以及如何去做Cloud.md的這個file

## 23｜一份雨量資料，為什麼不能只丟一句「幫我分析」？

HTML：[回到本章](index.html#rainfall-workflow)。原片範圍：00:53:30–00:56:26。

### S1050 · [00:53:30–00:53:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3210s)

用一個簡單的例子

### S1051 · [00:53:31–00:53:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3211s)

來說明上面整個的流動討論

### S1052 · [00:53:36–00:53:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3216s)

如果你今天手上有一個餘量站

### S1053 · [00:53:39–00:53:42](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3219s)

那你想要請AI進行分析

### S1054 · [00:53:42–00:53:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3222s)

你的prompt絕對不會是我手上有一個餘量站

### S1055 · [00:53:46–00:53:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3226s)

請你幫我做分析

### S1056 · [00:53:48–00:53:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3228s)

因為你不可能叫AI去讀裡面的檔案

### S1057 · [00:53:52–00:53:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3232s)

所以這是一個流程上的問題

### S1058 · [00:53:55–00:53:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3235s)

你第一個步驟

### S1059 · [00:53:57–00:54:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3237s)

你需要確定好你說使用的目的

### S1060 · [00:54:01–00:54:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3241s)

以及這個資料的背景

### S1061 · [00:54:03–00:54:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3243s)

所以你可能先定義一個問題

### S1062 · [00:54:05–00:54:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3245s)

和使用的對象

### S1063 · [00:54:06–00:54:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3246s)

那你可能需要給一個AI

### S1064 · [00:54:09–00:54:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3249s)

這個餘量站的站碼

### S1065 · [00:54:12–00:54:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3252s)

那它的時間單位

### S1066 · [00:54:14–00:54:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3254s)

那以及它的採樣率

### S1067 · [00:54:16–00:54:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3256s)

它的欄位

### S1068 · [00:54:17–00:54:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3257s)

那它所選擇的方式

### S1069 · [00:54:19–00:54:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3259s)

是用什麼樣的方式去做量測的

### S1070 · [00:54:22–00:54:25](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3262s)

再來你可能請AI去做

### S1071 · [00:54:25–00:54:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3265s)

讀這個檔案的工具

### S1072 · [00:54:27–00:54:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3267s)

而不是讓AI直接去讀這個檔案

### S1073 · [00:54:29–00:54:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3269s)

因為AI讀很多數字的時候

### S1074 · [00:54:31–00:54:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3271s)

它一定會產生

### S1075 · [00:54:34–00:54:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3274s)

就是會有幻覺產生

### S1076 · [00:54:37–00:54:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3277s)

所以你一定是用一個程式

### S1077 · [00:54:39–00:54:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3279s)

然後讓程式來去讀裡面的資料

### S1078 · [00:54:43–00:54:47](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3283s)

而不是讓AI直接把所有的文數字給讀完

### S1079 · [00:54:47–00:54:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3287s)

接下來則是可能計算

### S1080 · [00:54:50–00:54:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3290s)

然後確認單位再來檢核

### S1081 · [00:54:52–00:54:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3292s)

所以有問題

### S1082 · [00:54:53–00:54:55](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3293s)

你就要一直不斷的去迭代修正

### S1083 · [00:54:55–00:54:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3295s)

最後產出圖表

### S1084 · [00:54:57–00:54:59](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3297s)

所以在這整個過程當中

### S1085 · [00:54:59–00:55:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3299s)

你有幾個

### S1086 · [00:55:00–00:55:01](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3300s)

第一個你需要的工具

### S1087 · [00:55:01–00:55:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3301s)

可能是讀這個

### S1088 · [00:55:03–00:55:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3303s)

假設這個資料工具

### S1089 · [00:55:04–00:55:06](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3304s)

可能是CSV檔

### S1090 · [00:55:06–00:55:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3306s)

那可能是Excel的檔案

### S1091 · [00:55:08–00:55:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3308s)

所以你需要有一個讀工具的人

### S1092 · [00:55:10–00:55:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3310s)

你需要有一個進行分析的Agent

### S1093 · [00:55:14–00:55:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3314s)

那你可能需要有一個簡而的Agent

### S1094 · [00:55:16–00:55:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3316s)

你可能需要有一個畫圖的Agent

### S1095 · [00:55:19–00:55:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3319s)

所以不同的Agent

### S1096 · [00:55:21–00:55:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3321s)

他們會負責不同的功能

### S1097 · [00:55:24–00:55:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3324s)

原因是因為你要保持

### S1098 · [00:55:26–00:55:30](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3326s)

每一個Agent的context是完整的

### S1099 · [00:55:30–00:55:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3330s)

你如果讓一個人同時做四件事的話

### S1100 · [00:55:34–00:55:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3334s)

到了第四件事的時候

### S1101 · [00:55:36–00:55:39](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3336s)

有可能就因為上下文汙染的關係

### S1102 · [00:55:39–00:55:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3339s)

所以導致你第四件事

### S1103 · [00:55:41–00:55:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3341s)

不會達成的非常的漂亮

### S1104 · [00:55:44–00:55:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3344s)

所以在這整個路徑當中

### S1105 · [00:55:46–00:55:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3346s)

其實你回過頭來

### S1106 · [00:55:48–00:55:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3348s)

就是你還是需要有一個世界觀

### S1107 · [00:55:50–00:55:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3350s)

你要很清楚的知道說

### S1108 · [00:55:52–00:55:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3352s)

你調用AI是要拿來做什麼樣的事情

### S1109 · [00:55:56–00:55:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3356s)

那這個脈絡清楚了之後

### S1110 · [00:55:58–00:56:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3358s)

你再來去分配任務給不同的Agent

### S1111 · [00:56:02–00:56:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3362s)

你可以說我這個任務

### S1112 · [00:56:03–00:56:05](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3363s)

我要開四個Agent

### S1113 · [00:56:05–00:56:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3365s)

那第一個Agent要做什麼事

### S1114 · [00:56:07–00:56:09](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3367s)

第二個Agent要做什麼事

### S1115 · [00:56:09–00:56:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3369s)

那第一個Agent他做完事之後

### S1116 · [00:56:12–00:56:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3372s)

要把任務或結果交接給第二個Agent

### S1117 · [00:56:16–00:56:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3376s)

所以其實寫Prompt

### S1118 · [00:56:18–00:56:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3378s)

其實有點像是你就是把分析的流程

### S1119 · [00:56:21–00:56:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3381s)

給寫得非常的清楚

### S1120 · [00:56:23–00:56:26](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3383s)

就這樣而已

## 24｜多叫幾個 AI 幫忙，就一定比較好嗎？

HTML：[回到本章](index.html#handoff)。原片範圍：00:56:26–00:57:11。

### S1121 · [00:56:26–00:56:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3386s)

所以如果要分工的時候

### S1122 · [00:56:28–00:56:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3388s)

就剛才說的就是你需要有subagent

### S1123 · [00:56:31–00:56:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3391s)

那原因是因為

### S1124 · [00:56:33–00:56:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3393s)

你要保持整個Antest Window的乾淨

### S1125 · [00:56:37–00:56:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3397s)

所以這個其實不是太好去設計

### S1126 · [00:56:41–00:56:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3401s)

那你可以直接交給AI來處理

### S1127 · [00:56:44–00:56:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3404s)

你可以把整個需求寫出來之後

### S1128 · [00:56:46–00:56:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3406s)

然後後面備註說

### S1129 · [00:56:48–00:56:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3408s)

我允許你可以調用多個Agent

### S1130 · [00:56:50–00:56:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3410s)

來去執行這件事

### S1131 · [00:56:52–00:56:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3412s)

所以他就會有一個老大

### S1132 · [00:56:54–00:56:58](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3414s)

那這個老大就會開始分配不同的任務

### S1133 · [00:56:58–00:57:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3418s)

給他的下屬們

### S1134 · [00:57:00–00:57:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3420s)

所以這個小嘍囉們

### S1135 · [00:57:02–00:57:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3422s)

可能就是不同的subagent

### S1136 · [00:57:04–00:57:11](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3424s)

所以這主要是把不同的東西給切乾淨

## 25｜看到一個「神級提示詞」，應該怎麼學？

HTML：[回到本章](index.html#observe-reflect)。原片範圍：00:57:11–00:57:40。

### S1137 · [00:57:11–00:57:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3431s)

最後Prompt疊帶不是AI沒有做好

### S1138 · [00:57:14–00:57:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3434s)

叫他再做一次

### S1139 · [00:57:15–00:57:18](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3435s)

而是你真的要去想一下說

### S1140 · [00:57:18–00:57:22](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3438s)

就是這個東西到底是不是你要的

### S1141 · [00:57:22–00:57:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3442s)

然後再回來去疊帶

### S1142 · [00:57:24–00:57:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3444s)

所以有時候你看到網路上

### S1143 · [00:57:27–00:57:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3447s)

一個很神的這種Prompt的時候

### S1144 · [00:57:29–00:57:33](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3449s)

你可以自己去想一下說

### S1145 · [00:57:33–00:57:35](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3453s)

人家的Prompt是怎麼下的

### S1146 · [00:57:35–00:57:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3455s)

那這個Prompt的結果

### S1147 · [00:57:37–00:57:40](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3457s)

有沒有符合你的預期

## 26｜AI 聽完整堂課之後，會問什麼問題？

HTML：[回到本章](index.html#live-ai-questions)。原片範圍：00:57:40–01:00:48。

### S1148 · [00:57:40–00:57:44](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3460s)

好所以回過頭來測試一下

### S1149 · [00:57:44–00:57:45](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3464s)

我的工具

### S1150 · [00:57:45–00:57:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3465s)

所以這個是最後了

### S1151 · [00:57:50–00:57:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3470s)

看一下喔

### S1152 · [00:57:52–00:57:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3472s)

因為你知道就是

### S1153 · [00:57:56–00:57:57](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3476s)

上這種課

### S1154 · [00:57:57–00:58:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3477s)

大家一定都不會有問題的

### S1155 · [00:58:00–00:58:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3480s)

所以我自己做了一個工具

### S1156 · [00:58:02–00:58:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3482s)

這工具

### S1157 · [00:58:03–00:58:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3483s)

你可以看到他會一直不斷的在

### S1158 · [00:58:07–00:58:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3487s)

轉譯我現在講的這個話

### S1159 · [00:58:10–00:58:12](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3490s)

那這個有什麼樣的功能呢

### S1160 · [00:58:12–00:58:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3492s)

所以一旦我把它停止之後

### S1161 · [00:58:16–00:58:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3496s)

然後我邀請AI

### S1162 · [00:58:21–00:58:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3501s)

有什麼需要討論的嗎

### S1163 · [00:58:24–00:58:28](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3504s)

對所以原則上AI就會我整個上課的

### S1164 · [00:57:58–00:58:10](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3478s)

所以我自己做了一個工具,這工具呢,你可以看到它會一直不斷的在轉移我現在講的這個話,那這個有什麼樣的功能呢?

### S1165 · [00:58:10–00:58:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3490s)

所以一旦我把它停止之後,然後我邀請AI。

### S1166 · [00:58:22–00:58:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3502s)

對,所以原則上AI就會我整個上課的,就是剛剛四十幾分鐘、五十分鐘的上下文。

### S1167 · [00:58:32–00:58:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3512s)

我想問一下說,請問剛才大概接近五十分鐘的內容,有哪個地方不清楚的嗎?

### S1168 · [00:58:43–00:58:46](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3523s)

你可以很誠實的告訴我,沒有關係。

### S1169 · [00:58:46–00:58:54](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3526s)

另外呢,你可以扮演學生的角色,或許你可以問我幾個問題,我們可以來討論一下。

### S1170 · [00:58:54–00:59:03](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3534s)

我覺得整體很清楚,只是在上下文汙染和何時要切換新對話那一段,我還想再確認一下。

### S1171 · [00:59:03–00:59:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3543s)

如果我是一個學生,我會問,在設計多個agent分工時,要怎麼判斷要不要拆成不同角色,才不會讓流程變得更複雜。

### S1172 · [00:59:15–00:59:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3555s)

對,所以你可以看到,這個工具其實就是蠻方你的,就是為了避免老師自己上課有點太無聊。

### S1173 · [00:59:23–00:59:34](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3563s)

就是起碼有一個旁觀的AI可以跟你對話來問問題,因為臺灣的學生很多呢,就是不太容易去問問題。

### S1174 · [00:59:35–00:59:41](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3575s)

另外這個工具其實有點像是,你如果需要演講的時候,你其實就把它打開錄音。

### S1175 · [00:59:41–00:59:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3581s)

就是背後的主字稿呢,其實它可以有不同的時間戳計在上面。

### S1176 · [00:59:48–00:59:53](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3588s)

對,但我這個還沒有做完,因為我最後還會再增加一個功能。

### S1177 · [00:59:53–01:00:02](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3593s)

就是你可以把整個你想要講的powerpoint上傳到上面,所以它會去知道你每一頁的重點在哪裡。

### S1178 · [01:00:02–01:00:08](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3602s)

所以它真的可以回過頭來,針對某一頁,然後來去問你問題。

### S1179 · [01:00:09–01:00:16](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3609s)

對,那這個如果等最後做完了,可以再給大家下載來玩看看。

### S1180 · [01:00:16–01:00:24](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3616s)

但這要,它後面需要API的費用,但這個費用很便宜,就是剛錄大概50分鐘左右。

### S1181 · [01:00:24–01:00:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3624s)

大概花可能十幾塊臺幣而已吧,或不到10塊,可能不到10塊。

### S1182 · [01:00:32–01:00:36](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3632s)

對,所以這個用完之後呢,可以再給大家使用。

### S1183 · [01:00:36–01:00:43](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3636s)

它就是一個,會變成是一個APP,但這個只是format版,然後會出現在你的上面。

### S1184 · [01:00:43–01:00:48](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3643s)

那你按錄製的時候呢,整個它直接就可以錄整個的功能。

## 27｜討論和實作，為什麼常常值得分成兩段？

HTML：[回到本章](index.html#discuss-then-execute)。原片範圍：01:00:48–01:03:45。

### S1185 · [01:00:48–01:00:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3648s)

對,所以這是今天的最後一頁。

### S1186 · [01:00:52–01:01:00](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3652s)

所以這個呢,其實整個下prime的過程,還是會回到說呢,你其實到底想要完成什麼樣的工作。

### S1187 · [01:01:00–01:01:04](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3660s)

就是想清楚還是最優先的。

### S1188 · [01:01:04–01:01:15](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3664s)

對,因為一旦你沒有想清楚的時候呢,你run給prime,或你就直接叫AI進來工作,進來執行的時候呢,非常容易有上下門汙染的問題。

### S1189 · [01:01:15–01:01:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3675s)

因為AI做出一個任務,那這個東西不見得是你要的之後,那你可能叫它迭代去修改。

### S1190 · [01:01:24–01:01:31](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3684s)

所以在這個過程當中呢,你會讓AI混了很多很多不同的元素存在。

### S1191 · [01:01:31–01:01:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3691s)

所以混到後來呢,它有可能自己都會搞混,它不知道要怎麼樣去做。

### S1192 · [01:01:37–01:01:50](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3697s)

那原因是因為呢,在Codecs裡面呢,如果你用一個新的對話的時候,它已經沒有就是上下文的這個數量存在了。

### S1193 · [01:01:50–01:02:17](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3710s)

可是如果你開一個cloud code的話,就是cloud裡面呢,還是會有,就是你今天這個上下文進展到,到幾%。

### S1194 · [01:02:17–01:02:21](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3737s)

就這邊,會有進展到幾%。

### S1195 · [01:02:21–01:02:29](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3741s)

所以常態上的用法,都還是會回到可能chat的模式。

### S1196 · [01:02:29–01:02:32](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3749s)

就先把你要的東西呢,先給討論清楚。

### S1197 · [01:02:32–01:02:37](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3752s)

然後哪怕你是開最高thinking的model,你讓它一直不斷的去思考。

### S1198 · [01:02:37–01:02:52](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3757s)

那你們一直不斷的對話之後,收斂出來的結果,再開一個新的對話,或你回到Codecs這邊,你直接開Codecs去用新的對話,再直接工作。

### S1199 · [01:02:52–01:02:56](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3772s)

所以這是很常態我們所使用的一個方式。

### S1200 · [01:02:56–01:03:07](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3776s)

就盡量避免在brainstorming和描實作的這兩個步驟,都在同一個contest window裡面去進行。

### S1201 · [01:03:07–01:03:14](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3787s)

原因是因為你在最初的討論的過程當中呢,那個結果有可能是不見得那麼正確的。

### S1202 · [01:03:14–01:03:19](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3794s)

它會汙染到你最後真正想要執行的那個指令。

### S1203 · [01:03:20–01:03:23](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3800s)

好,那今天呢大概就到這邊。

### S1204 · [01:03:23–01:03:27](https://www.youtube.com/watch?v=NsszuRc5JC8&t=3803s)

感謝各位,先關掉了。

## 本機製作與核對紀錄

- 2026-10-05：完成 27 章完整概念伴讀，正文約一萬字；15 張 PDF 圖與 8 張原片截圖，共 23 張，均保留來源頁碼或時間與中文圖說。
- 初次製作於 2026-10-05 僅在本機完成。公開版本的 PDF 統一命名為 slides.pdf，與留在本機的 week4.pdf 內容完全相同；原始辨識稿與原始時間 JSON 均未改寫。
- Chromium 已實看 1440、768、390px 的首屏、中段、末段；27 個來源展開區、桌機章節跳轉、手機展開目錄、23 張圖片的放大／關閉／Escape／焦點返回、手機圖內橫向捲動均已實測。
- 字級調到 200% 時，390px 畫面正文仍未水平溢出；深色風格面板的背景、文字與選取態已實看。測試後已恢復 100%，沒有儲存新的全域偏好。
- 已用實際評論核對保存與重載、回饋預覽、剪貼簿文字及下載回饋檔。來源稿的下載資料另直接內嵌 HTML，避免本機 file:// 模式把「下載」連結只當成開啟文字檔；PDF 保持使用者原檔。
- 已跑 html-visualizer 的 verify.py：靜態結構、腳本語法、樣式與 Session 檢查通過。它找不到自己的 Playwright，因此其內建執行期、跑版與字級檢查不計通過；上述畫面與互動是另用本次工作階段的 Chromium 實測。
- 來源完整性另行核對：1,204 個來源片段全數保留，1,185 個正課片段各歸一章；19 個候場／音樂片段只省略於教學正文。正文的教學順序、例子、失敗修正、後段工具示範與回扣已對照完整辨識及 39 頁 PDF，並保留前述辨識限制。
