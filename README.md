# AI × Earth Education 2026

AI × Earth Education 2026 課程教材，每週上傳更新一次。目前已公開第一週教材，後續週次將於整理完成後陸續上傳。

## 如何開啟 HTML

GitHub 的 HTML 檔案頁顯示的是原始碼，不是完整網頁。請依下列方式開啟：

1. 在本 repo 上方選 **Code → Download ZIP**，下載後解壓縮；也可以進入 HTML 檔案頁，按 **Download raw file** 下載單一檔案。
2. 在 `Material/` 中找到要閱讀的週次資料夾，以 Chrome、Safari 或 Edge 開啟其中的 HTML 圖解導讀檔案。
3. 在圖解導讀內點選影片或時間連結，即可搭配 YouTube 觀看課程。

影片需要網路連線；HTML 也引用線上樣式資源，建議連網閱讀。本 repo 提供影片連結，不包含影片檔案。

## 教材索引

| 週次 | 簡報 | 補充教材 |
| --- | --- | --- |
| Week 1 | [PowerPoint](Material/week1.pptx) | [PDF](Material/Week1/week1.pdf) · [HTML 圖解導讀（下載後開啟）](Material/Week1/AI_Earth_課程前言_逐字稿-視覺化.html) · [逐字稿](Material/Week1/AI_Earth_課程前言_逐字稿.md) · [原始辨識文字](Material/Week1/AI_Earth_課程前言_raw.txt) |

## 閱讀提醒

- 逐字稿由語音辨識整理，並非人工逐秒校稿；專有名詞及辨識內容可能有誤，請以原影片為準。
- 第一週逐字稿略過 00:00–08:25 開場音樂；無可辨識對話的段落未補寫內容。
- 圖解導讀包含整理與補充說明，不應全部視為講者原話；辨識處理與用語校正詳見逐字稿開頭。

## 教材更新與同步

本 repo 的教材放在 `Material/`。下載 ZIP 的讀者，請重新下載以取得更新；使用 Git 的讀者可在自己的 repo 資料夾執行 `git pull --ff-only` 取得更新。

維護者在本機修改後，需執行 `git add Material README.md .gitignore`、`git commit -m "docs: update course materials"` 與 `git push` 才會更新 GitHub；本機存檔不會自動上傳。目前僅追蹤 `Material/week1.pptx` 與 `Material/Week1/`，其他教材保留在本機、不會上傳。其他週次準備公開時，請先更新 `.gitignore` 的公開範圍，再一併更新上方索引。
