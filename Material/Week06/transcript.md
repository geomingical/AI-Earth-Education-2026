# Week 6｜打開 Harness：替 AI 搭好工作環境：帶時間辨識稿

來源影片：https://www.youtube.com/watch?v=GmBZMaWsAqM
課堂 PDF：[slides.pdf](./slides.pdf)，42 頁；使用者原檔 Material/week6.pdf 保持不變。

這是原始語音辨識的繁體字形整理與分段，不是人工逐秒校稿。辨識誤字與重疊仍保留；正文歸納見 [課程伴讀](./index.html)。

## 來源與限制

來源：原片為 GmBZMaWsAqM，標題「AI × Earth Education｜Harness-MCP, AGENTS.md,Skill」，長 1:11:25；下載音訊約 4,285.01 秒、影片 4,285 秒。以原片時間為回看線索，沒有套用其他週次的偏移。當週 PDF 共 42 頁，發布檔 slides.pdf 與使用者原本的 week6.pdf 內容相同。辨識方式：影片的 English CC1 字幕在中文授課段出現零碎英文，未採用。改用 video_script 的 faster-whisper medium、明確指定中文，以約 15 分鐘一段、30 秒重疊完成 5 段辨識。保留 1,454 個原始片段，正文各章來源收錄 S0031–S1454 共 1,424 段；分段交界的重疊不刪除。繁體轉換初步改動 126 段，逐一檢視後撤回 3 段錯轉的「隻」，另修正一處「里面→裡面」；最後 123 段字形改動，英文技術名稱不變。開場與省略：00:00–10:04 為候場範圍，不放入教學正文。S0001–S0030 共 30 個歌詞辨識片段留在完整稿；其中 S0030 被標成 03:30.53–10:13.91 的異常長區間，不能解讀為連續七分鐘講話。原辨識漏掉約 10:04–10:38 的招呼與活動說明，另取 09:50–10:50 音訊局部重辨識，將 R01–R10 補入開場；15 個補辨片段及絕對時間完整保留於帶時間稿附錄。原始辨識稿與時間 JSON 均未覆寫。如何看待正文：正文是整理者的繁體中文歸納，不是逐字引語。Harness、Context Window、AGENTS.md、Claude Code、Zeabur、grill-me 等以投影片或畫面校正拼寫；來源展開區保留 Honest、Contest、Agent MD 等誤辨，遇到不清楚的專名請回原片核對。口述的產品支援、資安新聞、帳號經驗與活動預告只代表當天講述，不是另行查證的現況。投影片中未現場執行的筆記本練習與補充內容明確另標；沒有附上的練習檔不提供虛構下載。實作限制：網頁可見不等於已部署，AI 說修改完成不等於畫面通過驗收。後段保留 Figma 權限回報、Sites 部署 DNS 錯誤、原版排版重疊與改版後未由 AI 完成瀏覽器檢查等證據。這份筆記不宣稱課堂示範網站已公開或 Skill 已完整測試。所有章節皆有原片入口；辨識時間不是人工逐秒校稿。

## 來源單元對照

| 時間 | HTML 章節 | PDF 頁 | 來源片段 ID |
|---|---|---|---|
| 10:04–11:17 | [這次實體活動，為什麼也邀請圖像記錄師？](./index.html#opening) | 影片獨有 | R01–R10；S0031, S0032, S0033, S0034, S0035, S0036, S0037, S0038, S0039, S0040, S0041, S0042, S0043, S0044, S0045, S0046, S0047, S0048 |
| 11:17–12:54 | [知道名詞，為什麼還是連不到自己的工作？](./index.html#different-ai) | 2 | S0049, S0050, S0051, S0052, S0053, S0054, S0055, S0056, S0057, S0058, S0059, S0060, S0061, S0062, S0063, S0064, S0065, S0066, S0067, S0068, S0069, S0070, S0071, S0072, S0073, S0074, S0075, S0076, S0077, S0078, S0079, S0080, S0081, S0082, S0083, S0084, S0085, S0086, S0087, S0088, S0089, S0090, S0091, S0092, S0093, S0094 |
| 12:54–13:57 | [Harness 到底包住了模型的哪些部分？](./index.html#harness-map) | 3, 5 | S0095, S0096, S0097, S0098, S0099, S0100, S0101, S0102, S0103, S0104, S0105, S0106, S0107, S0108, S0109, S0110, S0111, S0112, S0113, S0114, S0115, S0116, S0117, S0118, S0119, S0120, S0121, S0122, S0123, S0124, S0125, S0126, S0127, S0128 |
| 13:57–16:41 | [服務很方便，為什麼仍要問資料交給了誰？](./index.html#weekly-news) | 4 | S0129, S0130, S0131, S0132, S0133, S0134, S0135, S0136, S0137, S0138, S0139, S0140, S0141, S0142, S0143, S0144, S0145, S0146, S0147, S0148, S0149, S0150, S0151, S0152, S0153, S0154, S0155, S0156, S0157, S0158, S0159, S0160, S0161, S0162, S0163, S0164, S0165, S0166, S0167, S0168, S0169, S0170, S0171, S0172, S0173, S0174, S0175, S0176, S0177, S0178, S0179, S0180, S0181, S0182, S0183, S0184, S0185, S0186, S0187, S0188, S0189, S0190, S0191, S0192, S0193, S0194, S0195, S0196, S0197, S0198, S0199, S0200, S0201, S0202, S0203, S0204, S0205, S0206, S0207, S0208 |
| 16:41–18:33 | [把模型請進專案，它會自動知道你想做什麼嗎？](./index.html#new-employee) | 5 | S0209, S0210, S0211, S0212, S0213, S0214, S0215, S0216, S0217, S0218, S0219, S0220, S0221, S0222, S0223, S0224, S0225, S0226, S0227, S0228, S0229, S0230, S0231, S0232, S0233, S0234, S0235, S0236, S0237, S0238, S0239, S0240, S0241, S0242, S0243, S0244, S0245, S0246, S0247, S0248, S0249 |
| 18:33–20:05 | [一個影片連結，如何變成可重複的筆記工作流程？](./index.html#project-workflow) | 6, 7 | S0250, S0251, S0252, S0253, S0254, S0255, S0256, S0257, S0258, S0259, S0260, S0261, S0262, S0263, S0264, S0265, S0266, S0267, S0268, S0269, S0270, S0271, S0272, S0273, S0274, S0275, S0276, S0277, S0278, S0279, S0280, S0281, S0282, S0283 |
| 20:05–21:13 | [AGENTS.md 與 CLAUDE.md，可以直接當成同一份設定嗎？](./index.html#rule-filenames) | 8 | S0284, S0285, S0286, S0287, S0288, S0289, S0290, S0291, S0292, S0293, S0294, S0295, S0296, S0297, S0298, S0299, S0300, S0301, S0302, S0303, S0304, S0305, S0306, S0307, S0308, S0309, S0310 |
| 21:13–22:20 | [第一份規則，需要把未來所有錯誤都預想好嗎？](./index.html#small-rules) | 9 | S0311, S0312, S0313, S0314, S0315, S0316, S0317, S0318, S0319, S0320, S0321, S0322, S0323, S0324, S0325, S0326, S0327, S0328, S0329, S0330, S0331, S0332, S0333, S0334, S0335 |
| 22:20–23:32 | [規則變厚之後，該刪掉什麼、移出什麼？](./index.html#rules-length) | 10 | S0336, S0337, S0338, S0339, S0340, S0341, S0342, S0343, S0344, S0345, S0346, S0347, S0348, S0349, S0350, S0351, S0352, S0353, S0354, S0355, S0356, S0357, S0358, S0359, S0360, S0361 |
| 23:32–25:23 | [專案變大，怎樣讓不同資料夾有各自的規則？](./index.html#scoped-rules) | 7, 11 | S0362, S0363, S0364, S0365, S0366, S0367, S0368, S0369, S0370, S0371, S0372, S0373, S0374, S0375, S0376, S0377, S0378, S0379, S0380, S0381, S0382, S0383, S0384, S0385, S0386, S0387, S0388, S0389 |
| 25:23–26:34 | [怎麼知道 AI 至少有讀到規則？](./index.html#read-receipt) | 14, 15 | S0390, S0391, S0392, S0393, S0394, S0395, S0396, S0397, S0398, S0399, S0400, S0401, S0402, S0403, S0404, S0405, S0406, S0407, S0408, S0409, S0410, S0411, S0412, S0413 |
| 26:34–27:49 | [回覆了暗號，為什麼還可能不照規則做？](./index.html#read-not-obey) | 15, 16 | S0414, S0415, S0416, S0417, S0418, S0419, S0420, S0421, S0422, S0423, S0424, S0425, S0426, S0427, S0428, S0429, S0430, S0431, S0432, S0433, S0434, S0435, S0436, S0437, S0438, S0439, S0440 |
| 27:49–30:25 | [刪除前必須停下來，和「請先問我」差在哪裡？](./index.html#hooks) | 16, 17 | S0441, S0442, S0443, S0444, S0445, S0446, S0447, S0448, S0449, S0450, S0451, S0452, S0453, S0454, S0455, S0456, S0457, S0458, S0459, S0460, S0461, S0462, S0463, S0464, S0465, S0466, S0467, S0468, S0469, S0470, S0471, S0472, S0473, S0474, S0475, S0476, S0477, S0478, S0479, S0480, S0481, S0482, S0483, S0484, S0485, S0486, S0487 |
| 30:25–31:37 | [什麼時候寫規則，什麼時候才需要 Hook？](./index.html#rules-evolve) | 18 | S0488, S0489, S0490, S0491, S0492, S0493, S0494, S0495, S0496, S0497, S0498, S0499, S0500, S0501, S0502, S0503, S0504, S0505 |
| 31:37–34:06 | [為什麼每個 Agent 都接一次天氣工具，會變成麻煩？](./index.html#mcp-standard) | 19, 20, 21, 22 | S0506, S0507, S0508, S0509, S0510, S0511, S0512, S0513, S0514, S0515, S0516, S0517, S0518, S0519, S0520, S0521, S0522, S0523, S0524, S0525, S0526, S0527, S0528, S0529, S0530, S0531, S0532, S0533, S0534, S0535, S0536, S0537, S0538, S0539, S0540, S0541, S0542, S0543, S0544, S0545, S0546, S0547, S0548, S0549, S0550, S0551, S0552, S0553, S0554 |
| 34:06–35:25 | [有一百個 MCP Server，就比只有幾個更好嗎？](./index.html#mcp-counter) | 23 | S0555, S0556, S0557, S0558, S0559, S0560, S0561, S0562, S0563, S0564, S0565, S0566, S0567, S0568, S0569, S0570, S0571, S0572, S0573, S0574, S0575, S0576, S0577, S0578, S0579, S0580, S0581 |
| 35:25–36:24 | [Tools、Resources、Prompts，各自提供什麼？](./index.html#mcp-three) | 24 | S0582, S0583, S0584, S0585, S0586, S0587, S0588, S0589, S0590, S0591, S0592, S0593, S0594, S0595, S0596, S0597, S0598, S0599 |
| 36:24–37:22 | [MCP 和 Function Calling，是二選一嗎？](./index.html#calling-quality) | 25, 26 | S0600, S0601, S0602, S0603, S0604, S0605, S0606, S0607, S0608, S0609, S0610, S0611, S0612, S0613, S0614 |
| 37:22–38:53 | [實驗室已有的分析程式，可以變成共用工具嗎？](./index.html#local-remote) | 27 | S0615, S0616, S0617, S0618, S0619, S0620, S0621, S0622, S0623, S0624, S0625, S0626, S0627, S0628, S0629, S0630, S0631, S0632, S0633, S0634, S0635, S0636, S0637, S0638, S0639, S0640 |
| 38:53–40:49 | [想試一個 MCP，第一句話應該是「幫我裝」嗎？](./index.html#first-mcp) | 28, 29, 30 | S0641, S0642, S0643, S0644, S0645, S0646, S0647, S0648, S0649, S0650, S0651, S0652, S0653, S0654, S0655, S0656, S0657, S0658, S0659, S0660, S0661, S0662, S0663, S0664, S0665, S0666, S0667, S0668, S0669 |
| 40:49–42:37 | [一直追問你的 AI，也可以是一個 Skill 嗎？](./index.html#skill-method) | 31, 32, 33 | S0670, S0671, S0672, S0673, S0674, S0675, S0676, S0677, S0678, S0679, S0680, S0681, S0682, S0683, S0684, S0685, S0686, S0687, S0688, S0689, S0690, S0691, S0692, S0693, S0694, S0695, S0696 |
| 42:37–45:02 | [Skill 還沒執行，為什麼也會佔用上下文？](./index.html#skill-loading) | 34 | S0697, S0698, S0699, S0700, S0701, S0702, S0703, S0704, S0705, S0706, S0707, S0708, S0709, S0710, S0711, S0712, S0713, S0714, S0715, S0716, S0717, S0718, S0719, S0720, S0721, S0722, S0723, S0724, S0725, S0726, S0727, S0728, S0729, S0730, S0731, S0732, S0733, S0734, S0735, S0736, S0737, S0738, S0739, S0740, S0741, S0742, S0743, S0744, S0745, S0746, S0747, S0748, S0749, S0750, S0751, S0752, S0753, S0754, S0755, S0756 |
| 45:02–46:15 | [提問、流程、角色視角，都能保存成方法嗎？](./index.html#skill-angles) | 35, 36 | S0757, S0758, S0759, S0760, S0761, S0762, S0763, S0764, S0765, S0766, S0767, S0768, S0769, S0770, S0771, S0772, S0773, S0774, S0775, S0776, S0777, S0778, S0779, S0780, S0781, S0782, S0783, S0784, S0785, S0786, S0787, S0788, S0789, S0790, S0791 |
| 46:15–47:26 | [資深同事的經驗，能變成 AI 讀得懂的工作知識嗎？](./index.html#tacit-knowledge) | 37, 38 | S0792, S0793, S0794, S0795, S0796, S0797, S0798, S0799, S0800, S0801, S0802, S0803, S0804, S0805, S0806, S0807, S0808, S0809, S0810, S0811, S0812, S0813, S0814, S0815, S0816, S0817, S0818, S0819, S0820, S0821, S0822, S0823, S0824, S0825, S0826, S0827, S0828, S0829, S0830, S0831 |
| 47:26–48:54 | [熱門工程師 Skill，為什麼不一定適合做研究？](./index.html#method-not-judgment) | 39, 40, 41, 42 | S0832, S0833, S0834, S0835, S0836, S0837, S0838, S0839, S0840, S0841, S0842, S0843, S0844, S0845, S0846, S0847, S0848, S0849, S0850, S0851, S0852, S0853, S0854, S0855, S0856, S0857, S0858, S0859, S0860, S0861, S0862, S0863, S0864, S0865, S0866, S0867, S0868, S0869, S0870, S0871, S0872, S0873, S0874, S0875, S0876, S0877, S0878 |
| 48:54–51:30 | [研究規則與影片筆記規則，為什麼長得不同？](./index.html#real-rule-files) | 7, 11, 15 | S0879, S0880, S0881, S0882, S0883, S0884, S0885, S0886, S0887, S0888, S0889, S0890, S0891, S0892, S0893, S0894, S0895, S0896, S0897, S0898, S0899, S0900, S0901, S0902, S0903, S0904, S0905, S0906, S0907, S0908, S0909, S0910, S0911, S0912, S0913, S0914, S0915, S0916, S0917, S0918, S0919, S0920, S0921, S0922, S0923, S0924, S0925, S0926, S0927, S0928, S0929, S0930, S0931, S0932, S0933, S0934, S0935, S0936, S0937, S0938, S0939, S0940, S0941, S0942, S0943, S0944, S0945, S0946, S0947, S0948, S0949, S0950, S0951, S0952, S0953 |
| 51:30–53:26 | [活動網站原本要一個區塊一個區塊點，接上 MCP 後改變什麼？](./index.html#hyperlink-tools) | 23, 24 | S0954, S0955, S0956, S0957, S0958, S0959, S0960, S0961, S0962, S0963, S0964, S0965, S0966, S0967, S0968, S0969, S0970, S0971, S0972, S0973, S0974, S0975, S0976, S0977, S0978, S0979, S0980, S0981, S0982, S0983, S0984, S0985, S0986, S0987, S0988, S0989, S0990, S0991, S0992, S0993, S0994, S0995, S0996, S0997, S0998, S0999, S1000, S1001, S1002, S1003, S1004 |
| 53:26–55:04 | [新聞資料接進來後，可以做什麼研究型整理？](./index.html#news-resources) | 24, 27 | S1005, S1006, S1007, S1008, S1009, S1010, S1011, S1012, S1013, S1014, S1015, S1016, S1017, S1018, S1019, S1020, S1021, S1022, S1023, S1024, S1025, S1026, S1027, S1028, S1029, S1030, S1031, S1032, S1033, S1034, S1035, S1036, S1037, S1038, S1039, S1040, S1041, S1042, S1043, S1044, S1045, S1046, S1047, S1048 |
| 55:04–56:45 | [示範網站開始前，為什麼先請 AI 建立 AGENTS.md？](./index.html#demo-rule) | 5, 9 | S1049, S1050, S1051, S1052, S1053, S1054, S1055, S1056, S1057, S1058, S1059, S1060, S1061, S1062, S1063, S1064, S1065, S1066, S1067, S1068, S1069, S1070, S1071, S1072, S1073, S1074, S1075, S1076, S1077, S1078, S1079, S1080, S1081, S1082, S1083, S1084 |
| 56:45–59:35 | [Sites 與 Figma，為什麼要分清各自的角色？](./index.html#demo-tools) | 23, 24, 29 | S1085, S1086, S1087, S1088, S1089, S1090, S1091, S1092, S1093, S1094, S1095, S1096, S1097, S1098, S1099, S1100, S1101, S1102, S1103, S1104, S1105, S1106, S1107, S1108, S1109, S1110, S1111, S1112, S1113, S1114, S1115, S1116, S1117, S1118, S1119, S1120, S1121, S1122, S1123, S1124, S1125, S1126, S1127, S1128, S1129, S1130, S1131, S1132, S1133, S1134, S1135, S1136, S1137, S1138, S1139, S1140, S1141, S1142, S1143, S1144, S1145, S1146, S1147, S1148, S1149, S1150, S1151, S1152, S1153, S1154, S1155, S1156, S1157, S1158, S1159, S1160, S1161, S1162, S1163, S1164 |
| 59:35–01:02:14 | [AI 說正在做，怎麼看出它真的遇到了什麼限制？](./index.html#demo-permissions) | 24, 27, 30 | S1165, S1166, S1167, S1168, S1169, S1170, S1171, S1172, S1173, S1174, S1175, S1176, S1177, S1178, S1179, S1180, S1181, S1182, S1183, S1184, S1185, S1186, S1187, S1188, S1189, S1190, S1191, S1192, S1193, S1194, S1195, S1196, S1197, S1198, S1199, S1200, S1201, S1202, S1203, S1204, S1205, S1206, S1207, S1208, S1209, S1210, S1211, S1212, S1213, S1214, S1215, S1216, S1217, S1218, S1219, S1220, S1221, S1222, S1223, S1224, S1225, S1226 |
| 01:02:14–01:04:30 | [想換設計風格，一定要把 Skill 永久安裝嗎？](./index.html#mono-skill) | 33, 36, 39 | S1227, S1228, S1229, S1230, S1231, S1232, S1233, S1234, S1235, S1236, S1237, S1238, S1239, S1240, S1241, S1242, S1243, S1244, S1245, S1246, S1247, S1248, S1249, S1250, S1251, S1252, S1253, S1254, S1255, S1256, S1257, S1258, S1259, S1260, S1261, S1262, S1263, S1264, S1265, S1266, S1267, S1268, S1269, S1270, S1271, S1272, S1273, S1274, S1275, S1276, S1277, S1278, S1279, S1280, S1281, S1282, S1283 |
| 01:04:30–01:06:53 | [風格變了，為什麼講者卻說「好像沒有比較好」？](./index.html#restyle-result) | 39 | S1284, S1285, S1286, S1287, S1288, S1289, S1290, S1291, S1292, S1293, S1294, S1295, S1296, S1297, S1298, S1299, S1300, S1301, S1302, S1303, S1304, S1305, S1306, S1307, S1308, S1309, S1310, S1311, S1312, S1313, S1314, S1315, S1316, S1317, S1318, S1319, S1320, S1321, S1322, S1323, S1324, S1325, S1326, S1327, S1328, S1329, S1330, S1331, S1332, S1333, S1334, S1335, S1336, S1337 |
| 01:06:53–01:08:34 | [AI 直接給漂亮圖表，我們可能少學了哪一段？](./index.html#learning-gap) | 37, 39, 41 | S1338, S1339, S1340, S1341, S1342, S1343, S1344, S1345, S1346, S1347, S1348, S1349, S1350, S1351, S1352, S1353, S1354, S1355, S1356, S1357, S1358, S1359, S1360, S1361, S1362, S1363, S1364, S1365, S1366, S1367, S1368, S1369, S1370, S1371, S1372, S1373, S1374, S1375, S1376, S1377, S1378 |
| 01:08:34–01:10:14 | [怎麼把一篇反思，轉成能邊做邊教的方法？](./index.html#ai-mentor) | 33, 37, 41 | S1379, S1380, S1381, S1382, S1383, S1384, S1385, S1386, S1387, S1388, S1389, S1390, S1391, S1392, S1393, S1394, S1395, S1396, S1397, S1398, S1399, S1400, S1401, S1402, S1403, S1404, S1405, S1406, S1407, S1408, S1409, S1410, S1411, S1412, S1413, S1414, S1415, S1416, S1417, S1418, S1419, S1420, S1421, S1422, S1423, S1424 |
| 01:10:14–01:11:25 | [學完這些零件，最重要的能力還是什麼？](./index.html#observe-and-refine) | 41, 42 | S1425, S1426, S1427, S1428, S1429, S1430, S1431, S1432, S1433, S1434, S1435, S1436, S1437, S1438, S1439, S1440, S1441, S1442, S1443, S1444, S1445, S1446, S1447, S1448, S1449, S1450, S1451, S1452, S1453, S1454 |

## 完整辨識來源（保留原片段順序）

### 候場、音樂與開場前收音（不放進正文）

#### S0001 · [01:57–01:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=117s)

I walk by the old oak door

#### S0002 · [01:59–02:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=119s)

And I step onto the moss on the forest floor

#### S0003 · [02:03–02:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=123s)

The air is thick with the scent of pine and rain

#### S0004 · [02:06–02:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=126s)

Washing away the weight of a world in pain

#### S0005 · [02:10–02:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=130s)

I press my palms to the damp and dark soil

#### S0006 · [02:13–02:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=133s)

Feeling the life that breathes beneath the torn

#### S0007 · [02:17–02:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=137s)

It's not just a place where we lay our head

#### S0008 · [02:20–02:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=140s)

It's the very blood, it's the daily bread

#### S0009 · [02:23–02:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=143s)

Oh, we don't just live here, we belong

#### S0010 · [02:26–02:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=146s)

To the whisper of the trees and the river song

#### S0011 · [02:28–02:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=148s)

We've made of the dust and the ocean spray

#### S0012 · [02:31–02:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=151s)

A part of the earth that won't fade away

#### S0013 · [02:34–02:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=154s)

Yes, we are home in the dirt, in the sky

#### S0014 · [02:38–02:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=158s)

This is where we live and where we lie

#### S0015 · [02:42–02:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=162s)

I climb the ridge as the afternoon blows

#### S0016 · [02:45–02:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=165s)

And I let the ocean wind take what it knows

#### S0017 · [02:49–02:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=169s)

It carries the salt and the secrets of old

#### S0018 · [02:52–02:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=172s)

The story in every cold breath that is told

#### S0019 · [02:57–03:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=177s)

The hands in the creases I see

#### S0020 · [03:00–03:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=180s)

The very same lines that are etched in the tree

#### S0021 · [03:03–03:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=183s)

We aren't just visitors passing on through

#### S0022 · [03:06–03:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=186s)

I am a part of this earth and so are you

#### S0023 · [03:10–03:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=190s)

Oh, we don't just live here, we belong

#### S0024 · [03:14–03:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=194s)

To the whisper of the trees and the river song

#### S0025 · [03:16–03:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=196s)

We've made of the dust and the ocean spray

#### S0026 · [03:19–03:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=199s)

A part of the earth that won't fade away

#### S0027 · [03:21–03:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=201s)

Yes, we are home in the dirt, in the sky

#### S0028 · [03:25–03:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=205s)

This is where we live and where we lie

#### S0029 · [03:28–03:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=208s)

Yes, we are home

#### S0030 · [03:30–10:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=210s)

We started from the soil and the sun

### 課堂與現場示範

#### S0031 · [10:38–10:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=638s)

的圖像記錄師

#### S0032 · [10:39–10:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=639s)

他專門在記錄整個

#### S0033 · [10:42–10:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=642s)

就是可能是研討會的過程啊

#### S0034 · [10:45–10:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=645s)

或是演講的過程

#### S0035 · [10:46–10:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=646s)

那他把整個重點呢給視覺化

#### S0036 · [10:49–10:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=649s)

我自己是覺得蠻酷的啦

#### S0037 · [10:51–10:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=651s)

對,然後因為我跟他認識

#### S0038 · [10:53–10:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=653s)

那就是Ruby呢

#### S0039 · [10:55–10:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=655s)

就是這個記錄師呢

#### S0040 · [10:57–11:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=657s)

就是他也蠻願意來現場

#### S0041 · [11:00–11:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=660s)

就是針對三個講題來做話

#### S0042 · [11:03–11:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=663s)

對,所以如果各位禮拜三

#### S0043 · [11:05–11:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=665s)

晚上有空的話呢

#### S0044 · [11:07–11:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=667s)

就可以過來看看

#### S0045 · [11:09–11:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=669s)

如果臨時才有空的呢

#### S0046 · [11:10–11:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=670s)

也可以過來看看

#### S0047 · [11:11–11:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=671s)

就是我們接受

#### S0048 · [11:13–11:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=673s)

先上車後不飄的過程

#### S0049 · [11:17–11:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=677s)

今天呢就會跟各位簡單的

#### S0050 · [11:20–11:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=680s)

說明一下Honest

#### S0051 · [11:22–11:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=682s)

因為上禮拜我們其實有

#### S0052 · [11:24–11:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=684s)

談過Contest Window

#### S0053 · [11:26–11:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=686s)

Contest其實就是Honest的其中一環

#### S0054 · [11:30–11:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=690s)

所以我想說這禮拜其實就延續著

#### S0055 · [11:33–11:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=693s)

上禮拜的話題

#### S0056 · [11:35–11:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=695s)

就我們把Honest的其他部分呢

#### S0057 · [11:38–11:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=698s)

給稍微的講完整一點點

#### S0058 · [11:41–11:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=701s)

然後上禮拜

#### S0059 · [11:42–11:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=702s)

就是有人有給我一個Feedback

#### S0060 · [11:44–11:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=704s)

就是他覺得

#### S0061 · [11:46–11:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=706s)

就是有一些內容呢

#### S0062 · [11:48–11:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=708s)

跟他真實的場景

#### S0063 · [11:50–11:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=710s)

比較難去做連接

#### S0064 · [11:52–11:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=712s)

對,那這個問題其實我也知道

#### S0065 · [11:55–11:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=715s)

就是我偷渡一下我明天

#### S0066 · [11:57–11:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=717s)

其中一頁的投影片

#### S0067 · [12:00–12:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=720s)

就是我也想辦法

#### S0068 · [12:01–12:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=721s)

想要去解決這個問題

#### S0069 · [12:03–12:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=723s)

但這個問題其實很難的點

#### S0070 · [12:05–12:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=725s)

是在於說

#### S0071 · [12:06–12:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=726s)

我很難理解你們每一個人

#### S0072 · [12:09–12:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=729s)

所使用的情境

#### S0073 · [12:12–12:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=732s)

那我也很難去理解

#### S0074 · [12:14–12:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=734s)

你們每一個人用AI的程度

#### S0075 · [12:16–12:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=736s)

所以有時候可能我會漏掉

#### S0076 · [12:18–12:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=738s)

某一些部分

#### S0077 · [12:20–12:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=740s)

或我很難進入到

#### S0078 · [12:21–12:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=741s)

你們使用的情境呢

#### S0079 · [12:23–12:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=743s)

來去做說明

#### S0080 · [12:25–12:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=745s)

所以回過頭來就是如果

#### S0081 · [12:27–12:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=747s)

有任何的問題呢

#### S0082 · [12:29–12:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=749s)

其實你都可以留言給我

#### S0083 · [12:30–12:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=750s)

或你就

#### S0084 · [12:32–12:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=752s)

反正應該你可以隨便找到

#### S0085 · [12:34–12:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=754s)

我的臉書或Discord

#### S0086 · [12:36–12:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=756s)

或是可能

#### S0087 · [12:38–12:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=758s)

Whatever的Message

#### S0088 · [12:39–12:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=759s)

你都可以丟

#### S0089 · [12:40–12:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=760s)

訊息給我

#### S0090 · [12:41–12:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=761s)

因為既然大家都願意花這個時間了

#### S0091 · [12:44–12:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=764s)

那其實就

#### S0092 · [12:46–12:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=766s)

我覺得也需要花時間好好去理解

#### S0093 · [12:49–12:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=769s)

這個東西

#### S0094 · [12:51–12:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=771s)

今天主要會有三個部分

#### S0095 · [12:56–12:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=776s)

在Honest最重要的

#### S0096 · [12:58–12:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=778s)

是維奧的三個

#### S0097 · [12:59–13:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=779s)

第一個呢

#### S0098 · [13:00–13:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=780s)

第一個呢

#### S0099 · [13:01–13:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=781s)

就是我們的AI的規則

#### S0100 · [13:03–13:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=783s)

那第二個呢

#### S0101 · [13:04–13:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=784s)

就是呼叫工具的規格

#### S0102 · [13:08–13:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=788s)

那第三個呢

#### S0103 · [13:09–13:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=789s)

就是可能AI做事的風格

#### S0104 · [13:12–13:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=792s)

所以這三個呢

#### S0105 · [13:13–13:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=793s)

都會在Honest

#### S0106 · [13:15–13:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=795s)

就是這個東西裡面

#### S0107 · [13:17–13:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=797s)

Honest這個名詞呢

#### S0108 · [13:18–13:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=798s)

其實在今年才出現

#### S0109 · [13:21–13:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=801s)

它叫馬鞍的那個安具

#### S0110 · [13:24–13:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=804s)

原因是因為

#### S0111 · [13:25–13:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=805s)

Agent呢

#### S0112 · [13:26–13:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=806s)

其實就是一個會做事的AI

#### S0113 · [13:29–13:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=809s)

會工作的一個AI

#### S0114 · [13:31–13:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=811s)

你可以把它想成

#### S0115 · [13:32–13:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=812s)

它是一個工具人

#### S0116 · [13:33–13:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=813s)

那工具人呢

#### S0117 · [13:34–13:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=814s)

其實就是我們之前講過的

#### S0118 · [13:36–13:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=816s)

是模型本身這個大腦

#### S0119 · [13:38–13:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=818s)

加上它外面所環繞的

#### S0120 · [13:40–13:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=820s)

這些所有的東西

#### S0121 · [13:42–13:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=822s)

那這些所有的東西呢

#### S0122 · [13:44–13:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=824s)

就包含了

#### S0123 · [13:45–13:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=825s)

就是給AI的規則

#### S0124 · [13:47–13:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=827s)

那給AI的工具

#### S0125 · [13:48–13:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=828s)

那以及給AI做事的風格

#### S0126 · [13:51–13:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=831s)

這三種

#### S0127 · [13:52–13:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=832s)

那還有上禮拜的contest window

#### S0128 · [13:56–13:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=836s)

這禮拜呢

#### S0129 · [13:57–13:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=837s)

的AI News呢

#### S0130 · [13:59–14:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=839s)

全部幾乎環繞在於

#### S0131 · [14:01–14:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=841s)

就是治安的部分

#### S0132 · [14:03–14:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=843s)

就第一個呢

#### S0133 · [14:04–14:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=844s)

則是

#### S0134 · [14:05–14:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=845s)

Zebra這個是

#### S0135 · [14:06–14:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=846s)

臺灣一個新創團隊

#### S0136 · [14:08–14:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=848s)

他們做的一個一間公司

#### S0137 · [14:11–14:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=851s)

那創辦人很年輕

#### S0138 · [14:12–14:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=852s)

好像才25還26歲而已

#### S0139 · [14:16–14:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=856s)

那這個產品呢

#### S0140 · [14:18–14:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=858s)

是他大學做專題的時候

#### S0141 · [14:21–14:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=861s)

的一個專案

#### S0142 · [14:22–14:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=862s)

那他把它弄成是一個

#### S0143 · [14:24–14:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=864s)

服務

#### S0144 · [14:25–14:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=865s)

這個服務主要是在解決說

#### S0145 · [14:27–14:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=867s)

過去可能我們做軟體的人

#### S0146 · [14:31–14:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=871s)

那有非常非常多需要設定的地方

#### S0147 · [14:34–14:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=874s)

那他們把這些設定的地方呢

#### S0148 · [14:36–14:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=876s)

給搞定

#### S0149 · [14:37–14:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=877s)

就像我自己有用龍蝦

#### S0150 · [14:38–14:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=878s)

那我的龍蝦呢

#### S0151 · [14:39–14:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=879s)

也是部署在Zebra上面

#### S0152 · [14:42–14:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=882s)

它其實就是一個面板

#### S0153 · [14:44–14:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=884s)

然後你按龍蝦

#### S0154 · [14:45–14:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=885s)

它就幫你裝好了

#### S0155 · [14:47–14:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=887s)

對所以這其實是一個非常

#### S0156 · [14:49–14:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=889s)

臺灣也蠻多人在使用的一個服務

#### S0157 · [14:53–14:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=893s)

但是因為它在8月的時候呢

#### S0158 · [14:56–14:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=896s)

有遭受過駭客的入侵

#### S0159 · [14:29–14:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=869s)

我們做軟體的人

#### S0160 · [14:32–14:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=872s)

有非常多需要設定的地方

#### S0161 · [14:35–14:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=875s)

他們把這些設定的地方給搞定

#### S0162 · [14:38–14:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=878s)

就像我自己有用龍蝦

#### S0163 · [14:39–14:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=879s)

我的龍蝦也是部署在Ziver上面

#### S0164 · [14:43–14:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=883s)

它其實就是一個面板

#### S0165 · [14:45–14:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=885s)

然後你按龍蝦

#### S0166 · [14:46–14:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=886s)

它就幫你裝好了

#### S0167 · [14:48–14:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=888s)

所以這其實是一個非常

#### S0168 · [14:50–14:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=890s)

臺灣也蠻多人在使用的一個服務

#### S0169 · [14:53–14:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=893s)

但是因為它在8月的時候

#### S0170 · [14:57–14:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=897s)

有遭受過駭客的入侵

#### S0171 · [14:59–15:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=899s)

那在10月也就是前幾天的時候

#### S0172 · [15:04–15:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=904s)

又再度遭受到駭客的入侵

#### S0173 · [15:07–15:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=907s)

就是它已經被打到

#### S0174 · [15:08–15:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=908s)

連用戶都對它喪失了信任感

#### S0175 · [15:11–15:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=911s)

所以它決定就是關閉整個的服務

#### S0176 · [15:15–15:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=915s)

再來就是OpenCode也有此案的問題

#### S0177 · [15:19–15:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=919s)

OpenCode它其實是一個Honest的一個

#### S0178 · [15:24–15:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=924s)

也不能說是軟體

#### S0179 · [15:25–15:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=925s)

它就是一個專門做Honest的

#### S0180 · [15:28–15:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=928s)

那它也有它自己的APP

#### S0181 · [15:30–15:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=930s)

所以你可以用OpenCode的Honest

#### S0182 · [15:32–15:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=932s)

來去接各種不同的模型

#### S0183 · [15:35–15:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=935s)

你可以接GPT的模型

#### S0184 · [15:37–15:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=937s)

你可以接GrimLine的模型

#### S0185 · [15:39–15:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=939s)

你也可以接Code的模型

#### S0186 · [15:42–15:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=942s)

所以第三個就是臺灣一間上市公司

#### S0187 · [15:45–15:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=945s)

叫Joye APP

#### S0188 · [15:47–15:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=947s)

就是他們專門在做軟體服務的

#### S0189 · [15:50–15:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=950s)

所以就是上禮拜

#### S0190 · [15:52–15:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=952s)

簡直是資安的一個大災難

#### S0191 · [15:55–15:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=955s)

就是有很多公司都受到資安的攻擊

#### S0192 · [15:59–16:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=959s)

那這種狀況在未來只會越來越多

#### S0193 · [16:03–16:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=963s)

除了資安以外

#### S0194 · [16:05–16:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=965s)

唯一的好消息就是

#### S0195 · [16:07–16:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=967s)

GrimLine的Model聽說整個壓起來了

#### S0196 · [16:10–16:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=970s)

突然感覺好像變強了

#### S0197 · [16:13–16:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=973s)

但這個我沒有辦法去測試

#### S0198 · [16:14–16:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=974s)

因為我的GrimLine的Model

#### S0199 · [16:17–16:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=977s)

被Googleban掉了

#### S0200 · [16:18–16:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=978s)

我那個帳戶不能使用

#### S0201 · [16:20–16:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=980s)

就是GrimLine的Model

#### S0202 · [16:22–16:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=982s)

原因是因為

#### S0203 · [16:24–16:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=984s)

我過去曾經把GrimLine的Model

#### S0204 · [16:27–16:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=987s)

接到OpenCode的Hannes

#### S0205 · [16:29–16:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=989s)

但這個是違反Google的原則

#### S0206 · [16:33–16:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=993s)

所以他們就把我的帳戶ban掉

#### S0207 · [16:35–16:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=995s)

然後完全沒有辦法恢復

#### S0208 · [16:40–16:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1000s)

所以回到今天

#### S0209 · [16:43–16:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1003s)

就是過去我們一直在講AI的模型

#### S0210 · [16:46–16:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1006s)

所以模型它其實負責的事情

#### S0211 · [16:49–16:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1009s)

就是文字的接絡而已

#### S0212 · [16:51–16:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1011s)

所以你可以把它簡化成

#### S0213 · [16:54–16:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1014s)

它其實就是一個AI的腦袋

#### S0214 · [16:56–16:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1016s)

它去理解你的文字

#### S0215 · [16:58–16:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1018s)

然後它去生成文字

#### S0216 · [16:59–17:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1019s)

然後它可能給你一個建議

#### S0217 · [17:02–17:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1022s)

但你如果有某一個專案的狀態之下

#### S0218 · [17:07–17:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1027s)

假設你這個專案可能是建造一個網頁

#### S0219 · [17:10–17:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1030s)

那你call一個AI的模型進來

#### S0220 · [17:12–17:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1032s)

它完全會不知道說你這個專案

#### S0221 · [17:15–17:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1035s)

到底在做什麼樣的事情

#### S0222 · [17:18–17:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1038s)

所以這個時候

#### S0223 · [17:19–17:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1039s)

我們就需要有一個Agent MD

#### S0224 · [17:22–17:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1042s)

它其實就是員工守則

#### S0225 · [17:25–17:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1045s)

就是告訴這個AI模型說

#### S0226 · [17:27–17:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1047s)

好 我今天的這個專案

#### S0227 · [17:31–17:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1051s)

那可能是做網頁專用的

#### S0228 · [17:35–17:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1055s)

那你可能需要遵守

#### S0229 · [17:37–17:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1057s)

我喜歡用什麼樣的字體

#### S0230 · [17:39–17:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1059s)

那字體是多大

#### S0231 · [17:41–17:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1061s)

那第二個則是

#### S0232 · [17:43–17:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1063s)

工具可能是製作網頁的工具

#### S0233 · [17:47–17:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1067s)

第三個可能是製作網頁視覺的

#### S0234 · [17:50–17:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1070s)

工作的法則

#### S0235 · [17:53–17:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1073s)

對 呼應就是剛剛最前面說

#### S0236 · [17:56–17:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1076s)

有時候可能用講的

#### S0237 · [17:58–17:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1078s)

你們比較難去想像

#### S0238 · [17:59–18:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1079s)

所以在頓片部分

#### S0239 · [18:01–18:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1081s)

我今天會就是先全部一起帶過之後

#### S0240 · [18:05–18:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1085s)

統一回到我的電腦

#### S0241 · [18:07–18:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1087s)

那我會用一個很簡單的

#### S0242 · [18:10–18:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1090s)

可能做一個網頁

#### S0243 · [18:12–18:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1092s)

然後把這三個給串在一起

#### S0244 · [18:15–18:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1095s)

然後讓各位看到說

#### S0245 · [18:16–18:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1096s)

如何建立一個簡單的Agent MD

#### S0246 · [18:20–18:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1100s)

那如何去接一個製作網頁的工具

#### S0247 · [18:23–18:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1103s)

那如何讓一個視覺化的方法

#### S0248 · [18:27–18:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1107s)

去影響到整個網頁的這個呈現

#### S0249 · [18:32–18:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1112s)

在規則的部分

#### S0250 · [18:35–18:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1115s)

它其實就很簡單

#### S0251 · [18:37–18:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1117s)

假設你今天有一個工作的目錄

#### S0252 · [18:39–18:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1119s)

我這個工作目錄

#### S0253 · [18:40–18:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1120s)

主要是做一個類似

#### S0254 · [18:42–18:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1122s)

知識的圖書館的一個概念

#### S0255 · [18:45–18:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1125s)

所以進來之後

#### S0256 · [18:46–18:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1126s)

你可能就會有一個Agent MD

#### S0257 · [18:49–18:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1129s)

那這個Agent MD

#### S0258 · [18:51–18:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1131s)

主要就是告訴AI說

#### S0259 · [18:53–18:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1133s)

這個專案在幹嘛的

#### S0260 · [18:55–18:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1135s)

那你這個工作流程是如何

#### S0261 · [18:58–19:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1138s)

那我這個Knowledge Library這個工作流程是

#### S0262 · [19:02–19:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1142s)

我其實只要給它一個YouTube的連結

#### S0263 · [19:06–19:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1146s)

它最後就可以做成一個

#### S0264 · [19:08–19:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1148s)

HTML版本視覺化的筆記

#### S0265 · [19:12–19:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1152s)

所以在這個狀態之下

#### S0266 · [19:15–19:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1155s)

我這個Agent MD

#### S0267 · [19:16–19:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1156s)

要說的就是

#### S0268 · [19:18–19:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1158s)

第一個

#### S0269 · [19:19–19:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1159s)

我這個專案在做什麼事

#### S0270 · [19:22–19:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1162s)

第二個就是我這個專案的工作流程

#### S0271 · [19:26–19:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1166s)

所以一旦你有一個新的Model進來之後

#### S0272 · [19:29–19:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1169s)

它會快速知道說

#### S0273 · [19:31–19:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1171s)

你只要丟一個連結給我

#### S0274 · [19:33–19:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1173s)

那我就要想辦法去抽取

#### S0275 · [19:36–19:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1176s)

這個YouTube連結背後的聲音

#### S0276 · [19:39–19:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1179s)

聲音要轉成文字

#### S0277 · [19:41–19:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1181s)

那文字要轉成

#### S0278 · [19:43–19:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1183s)

整理成一份很好的筆記

#### S0279 · [19:47–19:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1187s)

所以因應不同的專案

#### S0280 · [19:49–19:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1189s)

其實我們會有不同脈絡的Agent MD

#### S0281 · [19:53–19:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1193s)

但主要的核心就是在於說

#### S0282 · [19:56–19:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1196s)

你這個案子是要做什麼的

#### S0283 · [19:59–20:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1199s)

你這個工作目錄是要幹嘛的

#### S0284 · [20:05–20:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1205s)

過去除了Cloud Code以外

#### S0285 · [20:08–20:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1208s)

所有的工作手則都叫Agent MD

#### S0286 · [20:13–20:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1213s)

你如果用Gem9

#### S0287 · [20:14–20:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1214s)

你如果用GPT

#### S0288 · [20:16–20:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1216s)

那甚至你用其他小的模型

#### S0289 · [20:20–20:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1220s)

他們所共同有的

#### S0290 · [20:22–20:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1222s)

就是Agent MD的這個資料夾

#### S0291 · [20:26–20:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1226s)

那過去只有Cloud Code

#### S0292 · [20:28–20:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1228s)

會單獨使用一個叫Cloud.MD的規則檔

#### S0293 · [20:32–20:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1232s)

他們兩個的意義是完全一模一樣的

#### S0294 · [20:35–20:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1235s)

但Cloud Code過去就是想要特立獨行

#### S0295 · [20:38–20:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1238s)

它想要

#### S0296 · [20:39–20:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1239s)

我不曉得它要幹嘛

#### S0297 · [20:40–20:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1240s)

但它就替它自己模型

#### S0298 · [20:43–20:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1243s)

的Honest還有Model

#### S0299 · [20:45–20:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1245s)

建立了一個叫Cloud.MD

#### S0300 · [20:47–20:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1247s)

但在幾個禮拜之前

#### S0301 · [20:49–20:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1249s)

我記得幾個禮拜之前

#### S0302 · [20:51–20:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1251s)

幾個月之前

#### S0303 · [20:52–20:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1252s)

就是Cloud Code也改了

#### S0304 · [20:54–20:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1254s)

就是他們已經可以接受Agent MD

#### S0305 · [20:58–21:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1258s)

所以其實你在創一個新的目錄的時候

#### S0306 · [21:01–21:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1261s)

你只要建立一個Agent MD就可以了

#### S0307 · [21:05–21:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1265s)

那在這個目錄之下

#### S0308 · [21:07–21:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1267s)

你可以用任何的模型

#### S0309 · [21:09–21:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1269s)

進入到這個目錄

#### S0310 · [21:11–21:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1271s)

然後來工作

#### S0311 · [21:13–21:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1273s)

規則檔一開始很簡單

#### S0312 · [21:17–21:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1277s)

就千萬不要複雜

#### S0313 · [21:19–21:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1279s)

就是其實如果

#### S0314 · [21:21–21:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1281s)

建立一個初始專案的話

#### S0315 · [21:22–21:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1282s)

你只要告訴它

#### S0316 · [21:24–21:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1284s)

你這個專案在幹嘛

#### S0317 · [21:25–21:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1285s)

你想要幹嘛

#### S0318 · [21:27–21:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1287s)

然後你請AI去建立一個

#### S0319 · [21:31–21:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1291s)

很簡單的Agent MD的檔案

#### S0320 · [21:35–21:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1295s)

但隨著你工作的時間拉長

#### S0321 · [21:39–21:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1299s)

你有越來越多的這些資料進來的話

#### S0322 · [21:44–21:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1304s)

你的Agent MD的專案目錄

#### S0323 · [21:47–21:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1307s)

就會越來越肥厚

#### S0324 · [21:49–21:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1309s)

原因是因為裡面會建立了

#### S0325 · [21:51–21:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1311s)

非常非常多新的

#### S0326 · [21:53–21:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1313s)

員工的工作守則

#### S0327 · [21:55–21:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1315s)

有可能AI一直同樣犯

#### S0328 · [21:58–22:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1318s)

很多一樣的錯誤

#### S0329 · [22:00–22:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1320s)

這種東西就可以叫AI把它寫進

#### S0330 · [22:04–22:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1324s)

員工守則裡面

#### S0331 · [22:05–22:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1325s)

原因是因為這個錯誤是常犯的

#### S0332 · [22:08–22:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1328s)

所以他下次讀到這個守則的時候

#### S0333 · [22:10–22:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1330s)

他就會知道說

#### S0334 · [22:12–22:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1332s)

他過去犯了什麼樣的錯

#### S0335 · [22:14–22:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1334s)

之後我就不能再犯同樣的錯誤

#### S0336 · [22:20–22:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1340s)

再來就是規則不是越多越好

#### S0337 · [22:23–22:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1343s)

因為你的規則會一直不斷的

#### S0338 · [22:25–22:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1345s)

慢慢的長大

#### S0339 · [22:27–22:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1347s)

而且這個有時候膨脹的速度

#### S0340 · [22:29–22:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1349s)

會蠻快的

#### S0341 · [22:31–22:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1351s)

所以其實在開發的過程

#### S0342 · [22:34–22:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1354s)

或在運行的過程當中

#### S0343 · [22:36–22:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1356s)

有時候我們要稍微去看一下

#### S0344 · [22:38–22:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1358s)

Agent MD是不是太長了

#### S0345 · [22:41–22:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1361s)

就有一個比較基本的一個概念

#### S0346 · [22:45–22:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1365s)

概念大概

#### S0347 · [22:46–22:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1366s)

我們大概都會鎖在200行以內

#### S0348 · [22:49–22:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1369s)

因為有時候可能會有一些

#### S0349 · [22:52–22:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1372s)

就是可能如果AI會很常去記錄

#### S0350 · [22:55–22:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1375s)

在這個專案他到底犯了什麼樣的錯

#### S0351 · [22:58–23:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1378s)

如果這種東西可能超過100行

#### S0352 · [23:01–23:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1381s)

那個錯誤就可以把它移出Agent MD

#### S0353 · [23:05–23:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1385s)

你就可以開成另外一個MD檔

#### S0354 · [23:08–23:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1388s)

然後在Agent MD裡面只要告訴他說

#### S0355 · [23:11–23:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1391s)

你可以去參照哪一個檔案

#### S0356 · [23:13–23:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1393s)

那個檔案是我們常犯的一個錯誤

#### S0357 · [23:17–23:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1397s)

所以這個地方你需要去注意一下

#### S0358 · [23:20–23:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1400s)

所以Agent MD它是需要時間去維護的

#### S0359 · [23:24–23:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1404s)

就最好大概控制在200行以內

#### S0360 · [23:27–23:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1407s)

會是一個比較舒服的長度

#### S0361 · [23:31–23:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1411s)

所以規則檔它大概就像一張地圖一樣

#### S0362 · [23:38–23:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1418s)

就如果回到前面的這個工作目錄來說的話

#### S0363 · [23:43–23:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1423s)

可能我的Agent MD裡面就會去說明說

#### S0364 · [23:47–23:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1427s)

我這個assets這個folder裡面

#### S0365 · [23:51–23:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1431s)

它是代表什麼意思

#### S0366 · [23:53–23:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1433s)

這個licenses裡面的folder代表什麼意思

#### S0367 · [23:56–23:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1436s)

這四個可能是我的專案

#### S0368 · [23:59–24:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1439s)

這個專案他們可能各自的原始來源是哪裡

#### S0369 · [24:04–24:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1444s)

他們各自可能又代表什麼樣的內容

#### S0370 · [24:08–24:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1448s)

所以Agent MD也同樣會是一個

#### S0371 · [24:14–24:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1454s)

就是像一張地圖一樣

#### S0372 · [24:18–24:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1458s)

它在說明你這整個專案裡面的每一個folder

#### S0373 · [24:22–24:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1462s)

或是很重要的folder

#### S0374 · [24:24–24:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1464s)

它到底是代表什麼樣的概念

#### S0375 · [24:28–24:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1468s)

所以有可能你整個的專案的內容越來越大的時候

#### S0376 · [24:35–24:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1475s)

你就會需要去分層

#### S0377 · [24:38–24:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1478s)

再進入到剛開始的目錄

#### S0378 · [24:41–24:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1481s)

你可能會有一個Agent MD

#### S0379 · [24:43–24:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1483s)

那裡面你可能在這個folder裡面

#### S0380 · [24:46–24:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1486s)

你還有一個叫Lab

#### S0381 · [24:48–24:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1488s)

那Lab裡面也可以有自己的Agent MD

#### S0382 · [24:52–24:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1492s)

所以這個Agent MD

#### S0383 · [24:54–24:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1494s)

就是只有for這個labs

#### S0384 · [24:57–25:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1497s)

這個目錄所使用的規則

#### S0385 · [25:01–25:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1501s)

所以總規則控制著全部的內容

#### S0386 · [25:05–25:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1505s)

labs的規則只控制labs的內容

#### S0387 · [25:09–25:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1509s)

所以這個是當你的專案變大之後再慢慢的分工

#### S0388 · [25:13–25:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1513s)

這種分工的方式你都可以請AI來做協助

#### S0389 · [25:19–25:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1519s)

所以這個是一個很簡單的

#### S0390 · [25:23–25:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1523s)

如果你不知道你的Agent MD

#### S0391 · [25:28–25:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1528s)

到底有沒有被AI讀過

#### S0392 · [25:30–25:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1530s)

那你就可以在一個folder裡面

#### S0393 · [25:33–25:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1533s)

最後加上你自己可以辨識的字

#### S0394 · [25:38–25:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1538s)

因為像我就會加各式各樣奇奇怪怪的字

#### S0395 · [25:41–25:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1541s)

什麼Tawaii 沙拉紐油這種

#### S0396 · [25:46–25:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1546s)

或這種奇怪的字

#### S0397 · [25:47–25:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1547s)

我每個folder都有自己專屬的字

#### S0398 · [25:50–25:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1550s)

我就會告訴他說

#### S0399 · [25:51–25:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1551s)

如果你讀完整個工作守則

#### S0400 · [25:53–25:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1553s)

請你一定要列印出什麼什麼字

#### S0401 · [25:57–25:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1557s)

所以我在工作過程當中

#### S0402 · [25:58–26:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1558s)

我只要看到那種很奇怪的字

#### S0403 · [26:00–26:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1560s)

我就知道說AI已經讀過了整份工作守則

#### S0404 · [26:05–26:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1565s)

所以理論上

#### S0405 · [26:06–26:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1566s)

它應該就要照著整個工作守則的脈絡下去走

#### S0406 · [26:11–26:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1571s)

這個也是我其中一個

#### S0407 · [26:16–26:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1576s)

就是我會在最後面寫

#### S0408 · [26:18–26:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1578s)

如果你讀完這份規則

#### S0409 · [26:20–26:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1580s)

那你就要回覆一個什麼樣的東西

#### S0410 · [26:23–26:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1583s)

所以這有點像是只是一個可以觀察的訊號

#### S0411 · [26:27–26:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1587s)

你要確定AI是不是真的有讀過了

#### S0412 · [26:31–26:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1591s)

這個東西而已

#### S0413 · [26:33–26:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1593s)

但這邊有一個很重要的概念是

#### S0414 · [26:39–26:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1599s)

它有時候可能它

#### S0415 · [26:42–26:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1602s)

你會看到

#### S0416 · [26:43–26:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1603s)

假設我這個叫吉他娃的密碼按碼

#### S0417 · [26:48–26:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1608s)

假設我今天在工作的時候看到吉他娃

#### S0418 · [26:51–26:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1611s)

我會知道說AI讀過這個規則

#### S0419 · [26:53–26:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1613s)

但AI會不會照這個規則走呢

#### S0420 · [26:56–26:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1616s)

不一定

#### S0421 · [26:58–26:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1618s)

這有點像是說

#### S0422 · [26:59–27:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1619s)

你今天進宣是第一天

#### S0423 · [27:01–27:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1621s)

可能你的指導老師或老師們

#### S0424 · [27:04–27:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1624s)

拿了一個實驗室工作守則給你看

#### S0425 · [27:08–27:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1628s)

但這個工作守則假設有一百行

#### S0426 · [27:12–27:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1632s)

你看完之後你會不會照著守則去執行

#### S0427 · [27:16–27:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1636s)

有時候是不一定的

#### S0428 · [27:18–27:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1638s)

所以這個可能也是需要注意

#### S0429 · [27:21–27:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1641s)

所以常態上你大概要知道說

#### S0430 · [27:25–27:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1645s)

你工作守則的脈絡是什麼

#### S0431 · [27:28–27:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1648s)

在AI執行的過程當中

#### S0432 · [27:30–27:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1650s)

你需要一直不斷去觀察

#### S0433 · [27:32–27:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1652s)

就是AI就是它讀了

#### S0434 · [27:34–27:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1654s)

但到底有沒有照做

#### S0435 · [27:36–27:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1656s)

如果沒有照做的話

#### S0436 · [27:38–27:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1658s)

你就要再寫進工作守則裡面

#### S0437 · [27:41–27:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1661s)

你就要告訴它說

#### S0438 · [27:42–27:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1662s)

為什麼你都沒有照做

#### S0439 · [27:44–27:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1664s)

所以這個也是很需要注意的一個狀況

#### S0440 · [27:48–27:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1668s)

另外一個就是

#### S0441 · [27:52–27:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1672s)

這個有點像是

#### S0442 · [27:55–27:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1675s)

這個是Hook

#### S0443 · [27:57–28:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1677s)

Hook跟Agents.md又不太一樣

#### S0444 · [28:01–28:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1681s)

假設我們把Agents.md

#### S0445 · [28:04–28:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1684s)

當作是一個工作守則來看的話

#### S0446 · [28:09–28:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1689s)

那Hook就是一個很硬性的規則

#### S0447 · [28:14–28:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1694s)

就是它遇到某一種狀況

#### S0448 · [28:17–28:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1697s)

它一定會執行某一個動作或程序

#### S0449 · [28:21–28:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1701s)

舉例來說

#### S0450 · [28:24–28:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1704s)

假設你今天是公司最後一個離開的

#### S0451 · [28:29–28:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1709s)

當你關燈的時候

#### S0452 · [28:31–28:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1711s)

你可能觸發的規則就是你燈一關

#### S0453 · [28:34–28:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1714s)

鐵門就會拉下去

#### S0454 · [28:37–28:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1717s)

所以這個Hook就已經幾乎是被挾持的

#### S0455 · [28:41–28:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1721s)

所以這邊會有一個簡單的概念

#### S0456 · [28:45–28:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1725s)

就是如果你原本的要求是

#### S0457 · [28:47–28:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1727s)

執行Agents.md建議哪一些

#### S0458 · [28:49–28:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1729s)

信可以刪除或者是封存

#### S0459 · [28:53–28:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1733s)

信件太多的時候可能會觸發

#### S0460 · [28:57–29:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1737s)

就是我們之前說過的上下文押說

#### S0461 · [29:01–29:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1741s)

所以先確認這件事就有可能會被漏掉

#### S0462 · [29:05–29:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1745s)

所以Agents.md有可能會直接動手去

#### S0463 · [29:09–29:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1749s)

刪除你的信件

#### S0464 · [29:12–29:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1752s)

所以這時候Hook就可以發揮作用

#### S0465 · [29:15–29:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1755s)

Hook裡面就可以寫到說

#### S0466 · [29:17–29:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1757s)

當Agents.md執行移除的程序的時候

#### S0467 · [29:22–29:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1762s)

我需要跳出訊息來詢問使用者

#### S0468 · [29:26–29:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1766s)

這個到底要不要刪除

#### S0469 · [28:59–29:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1739s)

或者上下文押說

#### S0470 · [29:06–29:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1746s)

所以Agent有可能會直接動手去刪除你的信件

#### S0471 · [29:17–29:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1757s)

當Agent執行移除的程序的時候

#### S0472 · [29:29–29:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1769s)

所以這種就是Hook的一種

#### S0473 · [29:31–29:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1771s)

就是它AI運行到某一個狀態之下

#### S0474 · [29:36–29:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1776s)

它可以完全的執行一個命令

#### S0475 · [29:39–29:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1779s)

就Hook你們會比較少用到

#### S0476 · [29:41–29:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1781s)

因為Hook這個東西對初學者來說比較不好懂

#### S0477 · [29:47–29:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1787s)

如果你們對這個東西也不是那麼理解

#### S0478 · [29:52–29:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1792s)

其實就把它跳過就好了

#### S0479 · [29:54–30:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1794s)

所以主要是在執行一個危險的動作的時候

#### S0480 · [30:01–30:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1801s)

可以讓整個系統在關鍵時刻

#### S0481 · [30:05–30:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1805s)

把這個Agent要進行危險的動作給擋住

#### S0482 · [30:09–30:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1809s)

就我們剛才說過

#### S0483 · [30:11–30:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1811s)

就是如果要刪除檔案

#### S0484 · [30:13–30:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1813s)

或要去讀一些你不想讓AI讀的檔案的時候

#### S0485 · [30:18–30:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1818s)

那工具它就會自己去執行

#### S0486 · [30:21–30:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1821s)

它就會觸發整個工具

#### S0487 · [30:24–30:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1824s)

這邊大致上整理AgentMD跟Hook的一個時機點

#### S0488 · [30:34–30:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1834s)

所以你可能是先讓Agent去做事

#### S0489 · [30:38–30:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1838s)

做事之後你會觀察到Agent可能犯的錯誤

#### S0490 · [30:42–30:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1842s)

同樣在犯一次錯誤的時候

#### S0491 · [30:45–30:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1845s)

你就可以把它寫進規則裡面

#### S0492 · [30:48–30:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1848s)

那Hook則是你完全不能失敗的時候

#### S0493 · [30:53–30:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1853s)

如果像AI要刪除檔案的時候

#### S0494 · [30:56–31:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1856s)

這個就是不被允許的

#### S0495 · [31:00–31:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1860s)

或是你今天要壓縮上下文的時候

#### S0496 · [31:02–31:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1862s)

你希望AI可以告訴你說

#### S0497 · [31:05–31:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1865s)

可能我要壓縮上下文了

#### S0498 · [31:07–31:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1867s)

那這種也可以去寫一個Hook

#### S0499 · [31:10–31:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1870s)

或是可能你要壓縮之前的5%

#### S0500 · [31:13–31:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1873s)

可以出動這個Hook

#### S0501 · [31:15–31:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1875s)

讓你可以即時把可能上下文用別的方式給保留下來

#### S0502 · [31:21–31:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1881s)

所以上面這個大概是AgentMD跟Hook的概念

#### S0503 · [31:28–31:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1888s)

你其實只要記得AgentMD這個東西就好了

#### S0504 · [31:32–31:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1892s)

Hook可以大致上先挑過它

#### S0505 · [31:36–31:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1896s)

再來則是MCP的內容

#### S0506 · [31:42–31:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1902s)

MCP它最一開始

#### S0507 · [31:44–31:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1904s)

我們之前有說過Tool Calling

#### S0508 · [31:47–31:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1907s)

就是AI它可以自己去使用這些工具

#### S0509 · [31:52–31:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1912s)

但最一開始會出現MCP的概念是

#### S0510 · [31:56–31:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1916s)

如果你是Cloud Code的使用者

#### S0511 · [31:58–32:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1918s)

如果你是Codex的使用者

#### S0512 · [32:01–32:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1921s)

或是你是其他Agent的使用者

#### S0513 · [32:04–32:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1924s)

你所需要的工具假設是查詢天氣

#### S0514 · [32:08–32:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1928s)

所以Cloud Code對查詢天氣

#### S0515 · [32:11–32:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1931s)

可能會有自己的一套運用工具的規則

#### S0516 · [32:14–32:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1934s)

Codex可能也會有自己的一套

#### S0517 · [32:17–32:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1937s)

其他的Agent也可能會有自己的一套

#### S0518 · [32:21–32:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1941s)

所以你在開發工具的時候

#### S0519 · [32:24–32:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1944s)

在這個狀態之下

#### S0520 · [32:26–32:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1946s)

你就會需要考慮到

#### S0521 · [32:29–32:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1949s)

Cloud Code它是怎麼樣

#### S0522 · [32:31–32:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1951s)

就是做他們這個工具的規則

#### S0523 · [32:34–32:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1954s)

Codex是怎麼做的

#### S0524 · [32:36–32:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1956s)

其他Agent是怎麼做的

#### S0525 · [32:38–32:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1958s)

到行程的時候

#### S0526 · [32:39–32:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1959s)

它一樣要考慮這三個路線

#### S0527 · [32:42–32:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1962s)

所以隨著AI的模型越來越多的時候

#### S0528 · [32:46–32:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1966s)

這些工具呼叫的規則

#### S0529 · [32:49–32:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1969s)

會以線性的

#### S0530 · [32:54–32:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1974s)

以線性的去增長整個的複雜程度

#### S0531 · [32:57–32:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1977s)

所以這個時候

#### S0532 · [32:59–33:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1979s)

就是在忘記去年來前年年底的時候

#### S0533 · [33:02–33:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1982s)

就提出了一個叫MCP

#### S0534 · [33:05–33:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1985s)

就是共用同一個規則

#### S0535 · [33:08–33:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1988s)

讓AI來去呼叫這一些工具

#### S0536 · [33:12–33:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1992s)

所以MCP它只是一個格式而已

#### S0537 · [33:16–33:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1996s)

就是一個標準的格式

#### S0538 · [33:19–33:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=1999s)

就是它沒有其他的任何的能力

#### S0539 · [33:22–33:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2002s)

那MCP我們在之前有說過

#### S0540 · [33:25–33:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2005s)

它其實就是一個

#### S0541 · [33:27–33:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2007s)

可以用JSON的方式來去呼叫某一個工具

#### S0542 · [33:31–33:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2011s)

就是它在電腦裡面

#### S0543 · [33:32–33:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2012s)

是用JSON的方式來去做呈現的

#### S0544 · [33:35–33:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2015s)

所以你可以把MCP想成USB

#### S0545 · [33:39–33:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2019s)

那這個也是你如果去打MCP

#### S0546 · [33:43–33:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2023s)

MCP就是大家都會告訴你

#### S0547 · [33:45–33:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2025s)

同樣的類比的方式

#### S0548 · [33:47–33:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2027s)

原因是因為它就有點像是

#### S0549 · [33:50–33:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2030s)

統一一個完全固定格式的插座

#### S0550 · [33:54–33:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2034s)

不管你要運用到什麼樣的工具

#### S0551 · [33:56–34:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2036s)

都是用這種規格來去做連接

#### S0552 · [34:00–34:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2040s)

這個是Codex自己找的圖

#### S0553 · [34:03–34:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2043s)

我覺得蠻醜的

#### S0554 · [34:05–34:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2045s)

所以你可以把MCP想像成

#### S0555 · [34:10–34:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2050s)

它大概是一個簡單的服務櫃臺

#### S0556 · [34:14–34:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2054s)

就你說使用Agent

#### S0557 · [34:16–34:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2056s)

透過MCP的Server去連接

#### S0558 · [34:19–34:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2059s)

那當然這個MCP的Server

#### S0559 · [34:21–34:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2061s)

會取決於說你的供應商是誰

#### S0560 · [34:24–34:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2064s)

如果你的供應商是否

#### S0561 · [34:27–34:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2067s)

把圖片繪製得很漂亮的這些工具

#### S0562 · [34:31–34:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2071s)

那你就要去接到對方的MCP Server

#### S0563 · [34:34–34:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2074s)

那有一些MCP Server可能是走

#### S0564 · [34:37–34:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2077s)

文件的寫作

#### S0565 · [34:39–34:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2079s)

那你就要去接到對方的MCP Server

#### S0566 · [34:42–34:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2082s)

所以你在做一個東西的時候

#### S0567 · [34:44–34:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2084s)

你就需要去想說

#### S0568 · [34:46–34:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2086s)

那你可能需要拿幾項不同的工具

#### S0569 · [34:50–34:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2090s)

那有人做好這些工具的時候

#### S0570 · [34:52–34:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2092s)

其實你就可以把它拿進來使用

#### S0571 · [34:56–34:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2096s)

那一樣有一些MCP的說明檔

#### S0572 · [34:59–35:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2099s)

會進入到你的Context裡面

#### S0573 · [35:02–35:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2102s)

所以東西不是越多越好

#### S0574 · [35:05–35:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2105s)

不是你今天可能接100個MCP Server

#### S0575 · [35:09–35:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2109s)

那接進來之後

#### S0576 · [35:11–35:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2111s)

就是你的上下文就很容易被汙染

#### S0577 · [35:14–35:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2114s)

所以在初期要做的時候

#### S0578 · [35:17–35:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2117s)

就要去決定說

#### S0579 · [35:18–35:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2118s)

看你需要什麼樣的內容

#### S0580 · [35:21–35:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2121s)

那你再去抓什麼樣的工具進來就可以

#### S0581 · [35:24–35:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2124s)

所以MCP Server它其實提供了三種不同的能力

#### S0582 · [35:32–35:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2132s)

第一個則是工具

#### S0583 · [35:34–35:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2134s)

就是這個Server它有工具可以使用

#### S0584 · [35:38–35:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2138s)

那這個Server它也提供一些資源

#### S0585 · [35:41–35:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2141s)

有可能是文字的資源

#### S0586 · [35:43–35:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2143s)

或是它可以提供一些資料

#### S0587 · [35:46–35:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2146s)

或是它可以提供一些什麼樣的檔案

#### S0588 · [35:49–35:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2149s)

那這些都算資源

#### S0589 · [35:51–35:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2151s)

那第三個它可能有一個很Default的提示詞

#### S0590 · [35:56–35:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2156s)

它可能就會告訴你說這個MCP Server

#### S0591 · [35:59–36:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2159s)

可以提供什麼樣的工具

#### S0592 · [36:02–36:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2162s)

那你可以用什麼樣的方式來去詢問

#### S0593 · [36:05–36:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2165s)

所以MCP Server它可以提供這三種不同的

#### S0594 · [36:09–36:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2169s)

那待會我可以開一個網站

#### S0595 · [36:12–36:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2172s)

就它有它們自己的MCP Server

#### S0596 · [36:15–36:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2175s)

那我們就可以來去看一下說

#### S0597 · [36:17–36:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2177s)

它大概提供了什麼樣的工具

#### S0598 · [36:19–36:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2179s)

那怎麼樣的資源

#### S0599 · [36:23–36:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2183s)

這邊是在說明MCP跟Function Calling的差別

#### S0600 · [36:29–36:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2189s)

MCP只是讓模型接上這個工具而已

#### S0601 · [36:33–36:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2193s)

那如果要使用這個工具

#### S0602 · [36:36–36:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2196s)

模型還是透過Function Calling的方式

#### S0603 · [36:39–36:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2199s)

來去呼叫整個工具

#### S0604 · [36:42–36:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2202s)

所以這兩種不是衝突

#### S0605 · [36:45–36:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2205s)

就是它其實是一個順序的

#### S0606 · [36:47–36:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2207s)

你先用MCP去接到工具本身

#### S0607 · [36:50–36:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2210s)

那再用Function Calling去呼叫你接上去的工具

#### S0608 · [36:56–37:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2216s)

當然這跟我們之前說的agents.md是類似的

#### S0609 · [37:02–37:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2222s)

就是讀了agents.md

#### S0610 · [37:04–37:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2224s)

不代表模型會照agents.md的方式去走

#### S0611 · [37:08–37:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2228s)

那你接了工具不代表你這個東西就會做得好

#### S0612 · [37:12–37:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2232s)

也不代表這個工具就是一個非常好用的工具

#### S0613 · [37:17–37:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2237s)

所以後續的檢核其實是非常的需要的

#### S0614 · [37:21–37:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2241s)

MCP它可以在自己的電腦裡面

#### S0615 · [37:28–37:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2248s)

你如果自己的電腦裡面有非常多大量的工具

#### S0616 · [37:32–37:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2252s)

假設這些工具可能是你們實驗室本身

#### S0617 · [37:36–37:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2256s)

自己所有分析數據的

#### S0618 · [37:40–37:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2260s)

假設是Python的檔案好了

#### S0619 · [37:43–37:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2263s)

那就可以透過可能Local的MCP去做連接

#### S0620 · [37:48–37:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2268s)

假設你要畫線性圖

#### S0621 · [37:50–37:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2270s)

那你要畫趨勢圖或你要畫熱點圖

#### S0622 · [37:53–37:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2273s)

那你們實驗室可能已經有線型的這些工具了

#### S0623 · [37:57–38:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2277s)

那其實你們就可以架組自己的MCP的server

#### S0624 · [38:01–38:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2281s)

那所有的人都可以呼叫這個MCP server的東西

#### S0625 · [38:05–38:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2285s)

來去做使用

#### S0626 · [38:07–38:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2287s)

那這個也另外一個好處是避免

#### S0627 · [38:10–38:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2290s)

就是有時候可能新進來的人他們不懂

#### S0628 · [38:13–38:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2293s)

那他們就會去上網去抓一些奇奇怪怪的城市

#### S0629 · [38:16–38:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2296s)

或奇奇怪怪的工具來做使用

#### S0630 · [38:19–38:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2299s)

那第二個則是Remote的MCP

#### S0631 · [38:21–38:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2301s)

那這個就是別人開發好的工具

#### S0632 · [38:24–38:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2304s)

那你只是接別人的工具來做使用而已

#### S0633 · [38:28–38:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2308s)

所以如果要接別人工具

#### S0634 · [38:30–38:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2310s)

那接別人工具你就要去確保說

#### S0635 · [38:33–38:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2313s)

這個工具的提供方式是誰

#### S0636 · [38:35–38:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2315s)

然後這個工具它會用到你什麼樣的內容

#### S0637 · [38:39–38:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2319s)

它會不會進入到你的電腦本身去讀某一些資料

#### S0638 · [38:44–38:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2324s)

那它需要你授權什麼樣的憑證

#### S0639 · [38:47–38:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2327s)

因為只要連到外面去就會有資安的問題

#### S0640 · [38:52–38:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2332s)

好所以這個就是我們可以跳過

#### S0641 · [38:59–39:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2339s)

那有興趣可以到Deals的Practice自己去看

#### S0642 · [39:05–39:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2345s)

所以如果你想要使用MCP

#### S0643 · [39:09–39:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2349s)

你可以去選一件你想要做的事

#### S0644 · [39:13–39:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2353s)

那你讓AI去搜尋說

#### S0645 · [39:16–39:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2356s)

基於這件事你有什麼樣成熟的工具可以去使用

#### S0646 · [39:20–39:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2360s)

那對方可能就會有提供MCP

#### S0647 · [39:23–39:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2363s)

那你就可以去讓AI先去讀過說

#### S0648 · [39:27–39:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2367s)

這個MCP到底有哪一些工具

#### S0649 · [39:30–39:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2370s)

那以及什麼資料是可信賴的

#### S0650 · [39:33–39:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2373s)

那這個工具提供什麼樣的權限

#### S0651 · [39:37–39:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2377s)

所以這個是一個最簡單的一個路徑

#### S0652 · [39:41–39:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2381s)

當然就是MCP讓能力變多

#### S0653 · [39:45–39:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2385s)

但是權限也更重要

#### S0654 · [39:48–39:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2388s)

原因是因為你要去接別人的東西

#### S0655 · [39:50–39:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2390s)

所以別人的東西代表它可能就會有風險

#### S0656 · [39:55–40:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2395s)

所以資安不是只在於我們上禮拜談過

#### S0657 · [40:00–40:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2400s)

像Jailbreak或是Prom Injection的部分

#### S0658 · [40:04–40:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2404s)

有可能資安會去攻擊別人的MCP Server

#### S0659 · [40:07–40:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2407s)

那在別人的MCP裡面去藏奇奇怪怪的提示詞

#### S0660 · [40:12–40:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2412s)

所以當你接上別人的MCP的時候

#### S0661 · [40:14–40:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2414s)

等到撈回來你就發現說就是事情大條

#### S0662 · [40:18–40:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2418s)

就是好像你的電腦發生了某一些奇奇怪怪的事故

#### S0663 · [40:23–40:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2423s)

所以這些都是需要去小心的

#### S0664 · [40:26–40:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2426s)

所以MCP要接就要接那種很大間的廠商

#### S0665 · [40:31–40:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2431s)

他們所提供的MCP或他們所提供的工具

#### S0666 · [40:36–40:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2436s)

原因是因為越大間的就代表說

#### S0667 · [40:39–40:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2439s)

可能會有越多人去使用

#### S0668 · [40:42–40:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2442s)

所以你會馬上遇到的風險就會比較低一點點

#### S0669 · [40:48–40:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2448s)

再來就會進入到Skill

#### S0670 · [40:53–41:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2453s)

Skill這個已經很難去定義說Skill到底可以做什麼

#### S0671 · [41:02–41:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2462s)

因為現在變得是好像什麼東西全部都可以變成Skill

#### S0672 · [41:10–41:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2470s)

就你要讓它模擬一個人的風格

#### S0673 · [41:14–41:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2474s)

可以用Skill

#### S0674 · [41:15–41:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2475s)

那Skill同樣也可以去雕用一個工具

#### S0675 · [41:19–41:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2479s)

那Skill也可以還原一整個流程的脈絡

#### S0676 · [41:24–41:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2484s)

所以Skill這個東西現在非常非常非常難去定義

#### S0677 · [41:29–41:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2489s)

像這個GreenMe它是一個很熱門的一個Skill

#### S0678 · [41:35–41:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2495s)

它其實就是AI會一直問你問題

#### S0679 · [41:38–41:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2498s)

問到就是你跟AI的想法完全對齊為止

#### S0680 · [41:44–41:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2504s)

假設你要去建一個網站

#### S0681 · [41:47–41:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2507s)

然後它就會問你說你要什麼顏色

#### S0682 · [41:50–41:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2510s)

然後你決定好之後它就會再問你說

#### S0683 · [41:53–41:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2513s)

那你的字要多大

#### S0684 · [41:55–41:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2515s)

那你要什麼樣的風格

#### S0685 · [41:57–41:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2517s)

那你要不要有圖片

#### S0686 · [41:59–42:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2519s)

那你的文字密度要多高

#### S0687 · [42:01–42:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2521s)

所以它會問你問到很煩

#### S0688 · [42:04–42:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2524s)

所以這個就是其中一個Skill

#### S0689 · [42:07–42:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2527s)

它的Skill就是每一次都只會問你一個問題

#### S0690 · [42:11–42:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2531s)

每一題都提供你建議的答案和理由

#### S0691 · [42:14–42:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2534s)

然後你要一直不斷的追問到它覺得滿意為止

#### S0692 · [42:19–42:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2539s)

所以這種東西也可以是一個Skill

#### S0693 · [42:23–42:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2543s)

所以現在的Skill非常非常難去定義

#### S0694 · [42:26–42:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2546s)

那我們之前有說過Skill的前面它的格式是用Yaml

#### S0695 · [42:31–42:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2551s)

那後面的格式是用Mutton的格式來去做呈現

#### S0696 · [42:36–42:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2556s)

Skill這個東西當然也不是裝越多越好

#### S0697 · [42:43–42:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2563s)

因為你裝越多的Skill

#### S0698 · [42:45–42:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2565s)

其實它們的名字和這個描述Description

#### S0699 · [42:49–42:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2569s)

都同時會進入到整個Context裡面

#### S0700 · [42:53–42:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2573s)

所以你有太多的Skill的話

#### S0701 · [42:56–43:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2576s)

這個AI在還沒運作的Idle

#### S0702 · [43:00–43:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2580s)

就會被塞進很多Skill的名字

#### S0703 · [43:04–43:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2584s)

那當然這個Skill怎麼樣可以被觸發

#### S0704 · [43:08–43:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2588s)

通常是用關鍵字來被觸發

#### S0705 · [43:12–43:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2592s)

假設你提到設計這個字的話

#### S0706 · [43:16–43:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2596s)

你想要去設計一個好看的網頁

#### S0707 · [43:19–43:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2599s)

所以在最一開始AI可能偵測到設計

#### S0708 · [43:23–43:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2603s)

那它就會去你的Skill裡面去撈

#### S0709 · [43:26–43:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2606s)

有哪一個的描述是跟設計相關的

#### S0710 · [43:30–43:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2610s)

那它就會把這個Skill全部都給撈回來

#### S0711 · [43:33–43:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2613s)

所以它會先撈整個名字

#### S0712 · [43:37–43:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2617s)

看這個敘述

#### S0713 · [43:38–43:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2618s)

假設敘述跟設計相關

#### S0714 · [43:42–43:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2622s)

那它就會解放讀下面所有的內容

#### S0715 · [43:46–43:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2626s)

然後進到你的Context裡面

#### S0716 · [43:49–43:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2629s)

所以Skill有時候要保持它的乾淨性

#### S0717 · [43:54–43:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2634s)

因為如果你有兩個Skill

#### S0718 · [43:56–43:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2636s)

它是有點互相

#### S0719 · [43:28–43:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2608s)

設計相關的

#### S0720 · [43:30–43:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2610s)

那他就會把這個skill全部都給撈回來

#### S0721 · [43:33–43:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2613s)

所以他會先撈

#### S0722 · [43:36–43:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2616s)

整個名字看這個敘述

#### S0723 · [43:38–43:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2618s)

假設敘述呢跟

#### S0724 · [43:41–43:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2621s)

設計相關

#### S0725 · [43:42–43:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2622s)

那他就會開始解放讀下面的所有的內容

#### S0726 · [43:46–43:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2626s)

然後進到你的contest裡面

#### S0727 · [43:49–43:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2629s)

所以skill有時候呢要保持他的

#### S0728 · [43:53–43:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2633s)

乾淨性

#### S0729 · [43:56–43:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2636s)

他是有點互相

#### S0730 · [43:59–44:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2639s)

就是功能有點互相重疊

#### S0731 · [44:02–44:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2642s)

假設你有一個skill是設計圖片

#### S0732 · [44:05–44:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2645s)

有一個skill是設計網站

#### S0733 · [44:07–44:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2647s)

所以你今天下一個prompt呢是說

#### S0734 · [44:09–44:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2649s)

我想要做一個漂亮的網站設計

#### S0735 · [44:13–44:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2653s)

他可能同時觸發兩個skill

#### S0736 · [44:15–44:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2655s)

所以兩個skill呢

#### S0737 · [44:16–44:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2656s)

同時都會灌到你的contest window裡面

#### S0738 · [44:19–44:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2659s)

所以這個時候呢就很容易會有

#### S0739 · [44:22–44:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2662s)

我們之前說過的

#### S0740 · [44:24–44:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2664s)

contest pollution

#### S0741 · [44:26–44:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2666s)

的這種現象出現

#### S0742 · [44:29–44:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2669s)

所以

#### S0743 · [44:30–44:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2670s)

就是

#### S0744 · [44:32–44:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2672s)

這個東西呢自己可以再注意一下

#### S0745 · [44:34–44:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2674s)

那你如果不知道這個東西怎麼拿

#### S0746 · [44:36–44:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2676s)

你就問AI

#### S0747 · [44:38–44:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2678s)

你就請他去針對你的skill

#### S0748 · [44:41–44:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2681s)

的使用庫來去做

#### S0749 · [44:44–44:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2684s)

深度的調查

#### S0750 · [44:45–44:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2685s)

或自我的健康體檢

#### S0751 · [44:47–44:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2687s)

你覺得說這個東西會不會太多

#### S0752 · [44:49–44:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2689s)

那有哪些東西呢是我不需要用到的

#### S0753 · [44:53–44:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2693s)

我自己的skill大概是維持在20到

#### S0754 · [44:56–44:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2696s)

30個

#### S0755 · [44:57–44:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2697s)

左右

#### S0756 · [45:01–45:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2701s)

所以剛那個呢

#### S0757 · [45:03–45:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2703s)

就是

#### S0758 · [45:04–45:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2704s)

可以自己去玩你可以打

#### S0759 · [45:06–45:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2706s)

grill me

#### S0760 · [45:07–45:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2707s)

然後skill

#### S0761 · [45:08–45:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2708s)

那你就可以找到這個skill

#### S0762 · [45:09–45:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2709s)

就是如果沒有這個skill的時候呢

#### S0763 · [45:12–45:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2712s)

你打一個很簡單的prompt

#### S0764 · [45:14–45:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2714s)

那AI可能就馬上開始做網站

#### S0765 · [45:17–45:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2717s)

那你有這個skill呢就跟剛我們說的

#### S0766 · [45:20–45:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2720s)

就是他會瘋狂的問你問你

#### S0767 · [45:22–45:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2722s)

會問到你覺得很煩為止

#### S0768 · [45:27–45:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2727s)

那每一件事呢其實

#### S0769 · [45:29–45:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2729s)

幾乎都被skill化了

#### S0770 · [45:31–45:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2731s)

你的提問的方式像剛的grill me

#### S0771 · [45:33–45:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2733s)

已經可以變成skill

#### S0772 · [45:35–45:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2735s)

那工作流程也可以變成skill

#### S0773 · [45:38–45:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2738s)

你可以切換視角

#### S0774 · [45:39–45:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2739s)

這也可以是一個skill

#### S0775 · [45:41–45:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2741s)

那你也可以徵溜

#### S0776 · [45:43–45:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2743s)

某一個人

#### S0777 · [45:44–45:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2744s)

有可能是你覺得你們

#### S0778 · [45:46–45:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2746s)

老師的meeting太煩了

#### S0779 · [45:48–45:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2748s)

但是他每一次的

#### S0780 · [45:49–45:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2749s)

決策就熱熱等

#### S0781 · [45:51–45:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2751s)

那你就可以錄音

#### S0782 · [45:52–45:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2752s)

也可以把meeting的過程整個錄下來

#### S0783 · [45:54–45:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2754s)

然後你去徵溜你們老師這個人

#### S0784 · [45:57–45:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2757s)

對那你就可以得到跟他相同

#### S0785 · [45:59–46:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2759s)

類似概念想法

#### S0786 · [46:01–46:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2761s)

的可能

#### S0787 · [46:02–46:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2762s)

maybe是一些評論之類的

#### S0788 · [46:04–46:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2764s)

對所以skill使用的場景呢

#### S0789 · [46:07–46:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2767s)

五花八門就取決說你要

#### S0790 · [46:10–46:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2770s)

用在哪一個地方

#### S0791 · [46:13–46:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2773s)

對所以

#### S0792 · [46:15–46:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2775s)

這個呢就是AI其實在改變呢

#### S0793 · [46:17–46:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2777s)

是很多的SOP

#### S0794 · [46:19–46:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2779s)

因為過去

#### S0795 · [46:20–46:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2780s)

有一些東西呢

#### S0796 · [46:22–46:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2782s)

越資深的人可能越有經驗

#### S0797 · [46:24–46:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2784s)

但這些經驗呢

#### S0798 · [46:25–46:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2785s)

其實完全都可以轉化成

#### S0799 · [46:28–46:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2788s)

AI可以讀的文字檔

#### S0800 · [46:31–46:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2791s)

就他其實已經是可以變成一個

#### S0801 · [46:33–46:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2793s)

新的SOP

#### S0802 · [46:35–46:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2795s)

但現在還沒有辦法這麼普及呢

#### S0803 · [46:38–46:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2798s)

第一個是因為AI的

#### S0804 · [46:39–46:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2799s)

滲透率不足

#### S0805 · [46:41–46:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2801s)

那第二個是因為

#### S0806 · [46:42–46:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2802s)

大家沒有想到可以這樣用

#### S0807 · [46:44–46:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2804s)

這個才是最大的問題

#### S0808 · [46:46–46:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2806s)

因為原則上呢

#### S0809 · [46:48–46:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2808s)

幾乎所有會用到電腦

#### S0810 · [46:51–46:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2811s)

以及手機的所有的工作流程

#### S0811 · [46:54–46:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2814s)

都可以用到AI

#### S0812 · [46:56–46:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2816s)

就像農夫也可以

#### S0813 · [46:57–46:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2817s)

你可以有一個智慧農場

#### S0814 · [46:59–47:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2819s)

你可以用AI來去控制

#### S0815 · [47:01–47:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2821s)

你整個農場

#### S0816 · [47:02–47:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2822s)

所以

#### S0817 · [47:03–47:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2823s)

整個

#### S0818 · [47:04–47:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2824s)

受限會在於說人的想像力呢

#### S0819 · [47:06–47:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2826s)

會決定一切

#### S0820 · [47:07–47:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2827s)

所以

#### S0821 · [47:08–47:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2828s)

要用AI的時候呢

#### S0822 · [47:09–47:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2829s)

你可以盡量去想像很多場景

#### S0823 · [47:11–47:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2831s)

然後你就拿去問AI說我可以這樣用嗎

#### S0824 · [47:13–47:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2833s)

或可以怎麼用

#### S0825 · [47:14–47:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2834s)

對這是一個很簡單的方式

#### S0826 · [47:17–47:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2837s)

所以

#### S0827 · [47:18–47:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2838s)

過去就是很多經驗呢

#### S0828 · [47:19–47:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2839s)

其實都可以已經可以

#### S0829 · [47:21–47:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2841s)

被轉成文字的方式

#### S0830 · [47:23–47:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2843s)

來去做表達

#### S0831 · [47:25–47:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2845s)

對那這邊呢

#### S0832 · [47:27–47:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2847s)

只是在提醒各位說

#### S0833 · [47:29–47:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2849s)

如果你看到一個很熱門的skill

#### S0834 · [47:31–47:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2851s)

那你要先

#### S0835 · [47:33–47:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2853s)

知道說

#### S0836 · [47:34–47:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2854s)

就是這個skill是在幹嘛的

#### S0837 · [47:37–47:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2857s)

因為呼應鋼的問題

#### S0838 · [47:38–47:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2858s)

就skill這個東西不是

#### S0839 · [47:41–47:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2861s)

越多越好

#### S0840 · [47:42–47:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2862s)

就你拿著別人的skill呢

#### S0841 · [47:44–47:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2864s)

那人家可能是做coding的

#### S0842 · [47:46–47:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2866s)

但你可能是做science的

#### S0843 · [47:48–47:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2868s)

這兩個東西就完全

#### S0844 · [47:49–47:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2869s)

不一樣

#### S0845 · [47:50–47:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2870s)

所以你拿著別人的方法呢

#### S0846 · [47:52–47:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2872s)

不代表你可以用

#### S0847 · [47:53–47:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2873s)

而且現在很多很熱門的skill

#### S0848 · [47:55–47:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2875s)

其實都是

#### S0849 · [47:57–48:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2877s)

從工程師身上過來的

#### S0850 · [48:00–48:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2880s)

所以工程師的身份跟你的身份呢

#### S0851 · [48:03–48:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2883s)

其實是不一樣的

#### S0852 · [48:04–48:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2884s)

所以不見得就是這個東西是適用

#### S0853 · [48:08–48:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2888s)

所以今天很快呢

#### S0854 · [48:09–48:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2889s)

就跟各位說就是

#### S0855 · [48:12–48:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2892s)

Agents.md呢

#### S0856 · [48:13–48:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2893s)

他其實建立的呢

#### S0857 · [48:14–48:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2894s)

就是一個規則

#### S0858 · [48:16–48:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2896s)

mcp呢

#### S0859 · [48:17–48:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2897s)

他其實就是連接工具的方式

#### S0860 · [48:20–48:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2900s)

那skill呢

#### S0861 · [48:21–48:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2901s)

很難去定義

#### S0862 · [48:22–48:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2902s)

他可以是方法

#### S0863 · [48:23–48:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2903s)

他可以是風格

#### S0864 · [48:24–48:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2904s)

他可以是任何

#### S0865 · [48:25–48:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2905s)

有的沒有的

#### S0866 · [48:26–48:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2906s)

現在其實很多東西呢

#### S0867 · [48:28–48:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2908s)

都已經可以變成是一個skill

#### S0868 · [48:33–48:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2913s)

好所以

#### S0869 · [48:34–48:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2914s)

等一下會做一個很

#### S0870 · [48:36–48:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2916s)

簡單的一個

#### S0871 · [48:38–48:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2918s)

live

#### S0872 · [48:39–48:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2919s)

的

#### S0873 · [48:40–48:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2920s)

demo

#### S0874 · [48:41–48:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2921s)

那當然後面這個東西就是

#### S0875 · [48:43–48:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2923s)

欸反正有powerpoint

#### S0876 · [48:44–48:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2924s)

就是各位可以留著

#### S0877 · [48:46–48:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2926s)

再去看

#### S0878 · [48:47–48:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2927s)

所以我們回到

#### S0879 · [48:54–48:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2934s)

回到這邊好了

#### S0880 · [48:55–48:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2935s)

這個呢就是我自己的

#### S0881 · [48:58–49:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2938s)

幾個agents.md

#### S0882 · [49:01–49:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2941s)

第一個這個agents.md呢

#### S0883 · [49:02–49:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2942s)

他是專門for research

#### S0884 · [49:04–49:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2944s)

那research呢

#### S0885 · [49:05–49:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2945s)

他可能就有資料先行

#### S0886 · [49:08–49:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2948s)

那他可能就有

#### S0887 · [49:09–49:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2949s)

不好的結果呢

#### S0888 · [49:10–49:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2950s)

是最重要的

#### S0889 · [49:12–49:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2952s)

那他很多東西呢

#### S0890 · [49:14–49:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2954s)

是需要做討論的

#### S0891 · [49:16–49:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2956s)

所以這種完全就是看

#### S0892 · [49:17–49:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2957s)

你這個專案本身是在

#### S0893 · [49:20–49:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2960s)

做什麼

#### S0894 · [49:21–49:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2961s)

那做什麼決定

#### S0895 · [49:22–49:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2962s)

你這個agents.md呢

#### S0896 · [49:24–49:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2964s)

需要用什麼

#### S0897 · [49:25–49:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2965s)

那我這個專案呢也是

#### S0898 · [49:27–49:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2967s)

這個已經比較多了

#### S0899 · [49:29–49:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2969s)

三百多行

#### S0900 · [49:30–49:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2970s)

對那一樣最後面呢

#### S0901 · [49:31–49:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2971s)

我會加很多奇奇怪怪的字

#### S0902 · [49:33–49:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2973s)

所以我的ai看完了整份文件之後呢

#### S0903 · [49:36–49:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2976s)

他就會輸出

#### S0904 · [49:37–49:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2977s)

像這個就會輸出kawaii

#### S0905 · [49:38–49:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2978s)

那我就知道說

#### S0906 · [49:40–49:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2980s)

他已經把整個規則給

#### S0907 · [49:42–49:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2982s)

看完了

#### S0908 · [49:45–49:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2985s)

對那

#### S0909 · [49:46–49:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2986s)

這個呢也是另外一個

#### S0910 · [49:47–49:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2987s)

就是剛才知識庫的這個

#### S0911 · [49:50–49:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2990s)

agents.md

#### S0912 · [49:52–49:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2992s)

那這個agents.md呢

#### S0913 · [49:54–49:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2994s)

他就清楚的記載著

#### S0914 · [49:56–49:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2996s)

整個

#### S0915 · [49:57–50:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=2997s)

整個folder工作的這個流程

#### S0916 · [50:01–50:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3001s)

那常態上呢

#### S0917 · [50:02–50:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3002s)

你會有兩個

#### S0918 · [50:04–50:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3004s)

agents.md

#### S0919 · [50:05–50:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3005s)

影響著你的工作

#### S0920 · [50:09–50:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3009s)

第一個呢則是

#### S0921 · [50:11–50:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3011s)

你們自己的工作目錄

#### S0922 · [50:14–50:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3014s)

第二個呢

#### S0923 · [50:15–50:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3015s)

則是最上層的

#### S0924 · [50:17–50:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3017s)

agents.md

#### S0925 · [50:24–50:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3024s)

所以

#### S0926 · [50:25–50:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3025s)

好我上層的假設是這個好了

#### S0927 · [50:28–50:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3028s)

那上層的呢就是

#### S0928 · [50:30–50:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3030s)

這個東西呢會影響到你

#### S0929 · [50:32–50:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3032s)

整臺電腦全部的工作目錄

#### S0930 · [50:36–50:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3036s)

如果你要進入到知識庫的時候呢

#### S0931 · [50:39–50:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3039s)

他會讀這一份加這一份進來

#### S0932 · [50:43–50:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3043s)

所以

#### S0933 · [50:44–50:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3044s)

最初始的那一份工作目錄呢

#### S0934 · [50:47–50:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3047s)

其實越精簡越好

#### S0935 · [50:49–50:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3049s)

你可能可以設定你個人的風格

#### S0936 · [50:52–50:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3052s)

那你需要用繁體中文回覆

#### S0937 · [50:54–50:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3054s)

這是整臺電腦的規則

#### S0938 · [50:57–50:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3057s)

但進入到了單一的

#### S0939 · [50:59–51:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3059s)

工作目錄裡面呢

#### S0940 · [51:01–51:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3061s)

每一個folder呢

#### S0941 · [51:02–51:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3062s)

都有他自己的工作的流程

#### S0942 · [51:05–51:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3065s)

所以這邊要特別記得就是你

#### S0943 · [51:08–51:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3068s)

開一個新的專案的時候呢

#### S0944 · [51:09–51:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3069s)

你同時會有

#### S0945 · [51:11–51:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3071s)

AI同時會讀兩份不同的

#### S0946 · [51:13–51:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3073s)

agents.md

#### S0947 · [51:16–51:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3076s)

對那這個呢就是我們之前說過的

#### S0948 · [51:18–51:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3078s)

JSON的這種MCP

#### S0949 · [51:20–51:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3080s)

那待會呢就會示範

#### S0950 · [51:22–51:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3082s)

Figma

#### S0951 · [51:23–51:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3083s)

是個很簡單的

#### S0952 · [51:25–51:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3085s)

MCP這個Figma呢是來做設計

#### S0953 · [51:28–51:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3088s)

做使用

#### S0954 · [51:30–51:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3090s)

好同時呢也可以回到這邊

#### S0955 · [51:33–51:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3093s)

這個是

#### S0956 · [51:35–51:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3095s)

我們整個

#### S0957 · [51:36–51:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3096s)

活動

#### S0958 · [51:38–51:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3098s)

所看到的就是可能AI Earth

#### S0959 · [51:40–51:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3100s)

的整個活動的內容

#### S0960 · [51:43–51:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3103s)

這個內容過去呢

#### S0961 · [51:44–51:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3104s)

你要建立每一個block呢

#### S0962 · [51:46–51:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3106s)

會很麻煩

#### S0963 · [51:47–51:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3107s)

原因是因為你可能要回到後臺

#### S0964 · [51:50–51:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3110s)

那你可能會有很多不同的區塊

#### S0965 · [51:54–51:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3114s)

這個每一個區塊呢

#### S0966 · [51:56–51:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3116s)

其實都是一個

#### S0967 · [51:57–51:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3117s)

工具本身

#### S0968 · [51:59–52:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3119s)

這個工具本身呢

#### S0969 · [52:01–52:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3121s)

你要去每一個每一個點

#### S0970 · [52:02–52:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3122s)

然後每一個修改

#### S0971 · [52:04–52:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3124s)

在AI時代下呢

#### S0972 · [52:05–52:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3125s)

這個平臺呢

#### S0973 · [52:07–52:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3127s)

他就有提供了MCP

#### S0974 · [52:10–52:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3130s)

這個MCP呢他有可用的工具是

#### S0975 · [52:13–52:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3133s)

第一個他要做首頁的設計

#### S0976 · [52:16–52:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3136s)

那他可以做活動

#### S0977 · [52:18–52:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3138s)

他可以做名單他可以做商城

#### S0978 · [52:20–52:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3140s)

所以他幾乎可以用自然的語言去描述

#### S0979 · [52:24–52:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3144s)

你前面的這一個頁面

#### S0980 · [52:27–52:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3147s)

到底要長成什麼樣子的樣態

#### S0981 · [52:32–52:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3152s)

所以這個就是MCP的

#### S0982 · [52:34–52:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3154s)

相對的一個好處

#### S0983 · [52:35–52:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3155s)

就你省除了人一個一個去點

#### S0984 · [52:38–52:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3158s)

每一個東西

#### S0985 · [52:39–52:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3159s)

尤其因為這個東西多的時候

#### S0986 · [52:40–52:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3160s)

你根本就沒有辦法去

#### S0987 · [52:42–52:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3162s)

去處理很多的細節

#### S0988 · [52:45–52:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3165s)

所以才會用MCP的方式

#### S0989 · [52:49–52:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3169s)

讓AI自己去做處理

#### S0990 · [52:51–52:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3171s)

那他這個MCP呢也有提供resources

#### S0991 · [52:55–52:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3175s)

那他會自動把你品牌的資料呢

#### S0992 · [52:57–52:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3177s)

帶進上下文裡面

#### S0993 · [53:00–53:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3180s)

假設因為我們這邊是AI Earth

#### S0994 · [53:02–53:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3182s)

那我們AI Earth的內容可能是

#### S0995 · [53:05–53:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3185s)

for地球科學的社群

#### S0996 · [53:08–53:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3188s)

那我們可能有固定的圖片

#### S0997 · [53:10–53:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3190s)

所以他就會把這些資料呢

#### S0998 · [53:12–53:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3192s)

自己內建帶進

#### S0999 · [53:14–53:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3194s)

整個像CloudCode或Codex裡面

#### S1000 · [53:16–53:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3196s)

當成是上下文

#### S1001 · [53:19–53:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3199s)

來去做處理

#### S1002 · [53:20–53:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3200s)

所以這個就是Hyperlink

#### S1003 · [53:22–53:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3202s)

他們自己的MCP的server

#### S1004 · [53:25–53:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3205s)

那也有單純是resources的

#### S1005 · [53:28–53:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3208s)

就像中央社他們也有他們自己的MCP

#### S1006 · [53:32–53:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3212s)

那他們的MCP呢

#### S1007 · [53:33–53:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3213s)

有很多都是他們過去

#### S1008 · [53:36–53:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3216s)

所有的這些新聞的內容

#### S1009 · [53:39–53:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3219s)

所以你可以去接他們的MCP

#### S1010 · [53:41–53:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3221s)

但這個MCP要錢

#### S1011 · [53:43–53:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3223s)

你可以去做說

#### S1012 · [53:44–53:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3224s)

像他有一個簡單的例子就是

#### S1013 · [53:46–53:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3226s)

他可以去做一個

#### S1014 · [53:48–53:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3228s)

臺北捷運通車30年來

#### S1015 · [53:50–53:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3230s)

歷史新聞和老照片的專題回顧

#### S1016 · [53:53–53:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3233s)

他可以把臺北捷運過去30年的所有新聞呢

#### S1017 · [53:56–53:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3236s)

都找出來

#### S1018 · [53:58–54:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3238s)

然後做成一個專業的網站

#### S1019 · [54:01–54:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3241s)

所以如果你是防災的話呢

#### S1020 · [54:02–54:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3242s)

你就可以把

#### S1021 · [54:04–54:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3244s)

去做說過去20年來

#### S1022 · [54:06–54:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3246s)

臺灣山坡地發生的災害有哪些

#### S1023 · [54:09–54:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3249s)

那也可以做成一個網站

#### S1024 · [54:11–54:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3251s)

對但前期就是不要做20年

#### S1025 · [54:13–54:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3253s)

因為這個錢燒蠻快的

#### S1026 · [54:16–54:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3256s)

就是你可能很快就沒錢了

#### S1027 · [54:18–54:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3258s)

對所以這種呢

#### S1028 · [54:19–54:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3259s)

像中央社他們就會提供MCP

#### S1029 · [54:21–54:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3261s)

那我有邀請

#### S1030 · [54:23–54:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3263s)

中央社做MCP的這個

#### S1031 · [54:26–54:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3266s)

他們資訊室的主任

#### S1032 · [54:27–54:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3267s)

然後他們資訊室主任會

#### S1033 · [54:30–54:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3270s)

來參加下一次的AI Earth的Meetup

#### S1034 · [54:33–54:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3273s)

就是他們會是下一個講者

#### S1035 · [54:36–54:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3276s)

因為我覺得這個東西對整個社群蠻重要的

#### S1036 · [54:39–54:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3279s)

就是我們要

#### S1037 · [54:41–54:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3281s)

就是在這麼多資料的狀態之下

#### S1038 · [54:44–54:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3284s)

那中央社他們是怎麼樣去整理

#### S1039 · [54:47–54:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3287s)

這些資料

#### S1040 · [54:48–54:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3288s)

那怎麼樣把這些資料呢

#### S1041 · [54:50–54:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3290s)

做成是一個MCP的Server

#### S1042 · [54:52–54:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3292s)

然後來給使用的人或民眾

#### S1043 · [54:55–54:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3295s)

來去做使用

#### S1044 · [54:56–54:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3296s)

所以我覺得這個東西蠻重要

#### S1045 · [54:58–54:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3298s)

所以

#### S1046 · [55:00–55:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3300s)

下一次的AI Earth呢

#### S1047 · [55:01–55:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3301s)

就是對方會過來

#### S1048 · [55:03–55:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3303s)

好那回到

#### S1049 · [55:06–55:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3306s)

Codex這邊我們做一個最

#### S1050 · [55:09–55:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3309s)

最簡單的運用

#### S1051 · [55:12–55:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3312s)

假設呢

#### S1052 · [55:13–55:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3313s)

我們開個新的對話

#### S1053 · [55:15–55:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3315s)

那我就可以跟他說

#### S1054 · [55:20–55:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3320s)

我現在想要做一個

#### S1055 · [55:22–55:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3322s)

Live Demo

#### S1056 · [55:23–55:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3323s)

那這個Live Demo呢

#### S1057 · [55:25–55:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3325s)

主要是想要

#### S1058 · [55:26–55:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3326s)

介紹Skills的單頁網站

#### S1059 · [55:30–55:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3330s)

所以你先幫我建立一個很簡單的

#### S1060 · [55:33–55:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3333s)

AgenceDMD

#### S1061 · [55:35–55:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3335s)

就專門for這個專案使用

#### S1062 · [55:47–55:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3347s)

好所以

#### S1063 · [55:48–55:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3348s)

現在整個呢就是

#### S1064 · [55:51–55:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3351s)

我想要去做一個

#### S1065 · [55:53–55:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3353s)

介紹Skills的網站

#### S1066 · [55:56–55:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3356s)

所以我請

#### S1067 · [55:57–56:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3357s)

AI Earth先幫我建立一個很簡單的

#### S1068 · [56:00–56:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3360s)

AgenceDMD

#### S1069 · [56:01–56:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3361s)

我用

#### S1070 · [56:03–56:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3363s)

最輕度的推理就好

#### S1071 · [56:15–56:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3375s)

對所以

#### S1072 · [56:17–56:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3377s)

你看到他一開始會先

#### S1073 · [56:18–56:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3378s)

偵測就是這個專案有沒有這個AgenceDMD

#### S1074 · [56:22–56:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3382s)

如果沒有的話其實你就把需求告訴他

#### S1075 · [56:25–56:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3385s)

那這個就是他

#### S1076 · [56:27–56:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3387s)

做出來的

#### S1077 · [56:29–56:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3389s)

AgenceDMD

#### S1078 · [56:31–56:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3391s)

他的目標他就是告訴你專案的目標

#### S1079 · [56:33–56:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3393s)

然後協同的原則

#### S1080 · [56:35–56:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3395s)

還有實作的範圍

#### S1081 · [56:37–56:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3397s)

那這些你當然可以仔細的看過每一條

#### S1082 · [56:41–56:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3401s)

再來修改

#### S1083 · [56:43–56:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3403s)

好所以

#### S1084 · [56:44–56:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3404s)

這個好了之後呢

#### S1085 · [56:46–56:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3406s)

我們就可以去

#### S1086 · [56:47–56:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3407s)

用

#### S1087 · [56:48–56:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3408s)

MCP

#### S1088 · [56:49–56:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3409s)

如果

#### S1089 · [56:50–56:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3410s)

要做網站

#### S1090 · [56:53–56:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3413s)

你不呼叫MCP的時候呢

#### S1091 · [56:57–56:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3417s)

你會到了這個

#### S1092 · [56:58–56:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3418s)

Site

#### S1093 · [56:59–57:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3419s)

Site這個是

#### S1094 · [57:00–57:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3420s)

Hodas裡面專門做

#### S1095 · [57:02–57:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3422s)

網站的一個工具

#### S1096 · [57:04–57:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3424s)

你可以先選他

#### S1097 · [57:06–57:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3426s)

然後我們可以到外掛這邊

#### S1098 · [57:08–57:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3428s)

就可以有很多的MCP

#### S1099 · [57:10–57:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3430s)

可以去

#### S1100 · [57:12–57:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3432s)

連接

#### S1101 · [57:13–57:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3433s)

那我們這次的MCP呢

#### S1102 · [57:15–57:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3435s)

用剛才說的

#### S1103 · [57:17–57:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3437s)

Figma

#### S1104 · [57:22–57:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3442s)

Figma呢

#### S1105 · [57:24–57:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3444s)

就是這個工具

#### S1106 · [57:26–57:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3446s)

就他專門做

#### S1107 · [57:27–57:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3447s)

設計的

#### S1108 · [57:28–57:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3448s)

那當然這邊有非常非常多的

#### S1109 · [57:31–57:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3451s)

MCP非常非常多的工具可以去連接

#### S1110 · [57:33–57:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3453s)

但

#### S1111 · [57:34–57:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3454s)

回到剛才說的就是不要亂

#### S1112 · [57:37–57:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3457s)

接

#### S1113 · [57:37–57:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3457s)

這些工具

#### S1114 · [57:39–57:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3459s)

因為

#### S1115 · [57:40–57:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3460s)

你要先確定說這些工具去

#### S1116 · [57:43–57:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3463s)

確實是你

#### S1117 · [57:44–57:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3464s)

用得到的

#### S1118 · [57:45–57:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3465s)

因為這些工具

#### S1119 · [57:46–57:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3466s)

有很多很奇怪的

#### S1120 · [57:48–57:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3468s)

都可以給你Google

#### S1121 · [57:51–57:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3471s)

我今天看到一個超怪的你看這個

#### S1122 · [57:54–57:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3474s)

這個工具叫做

#### S1123 · [57:57–57:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3477s)

產生一張

#### S1124 · [57:58–57:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3478s)

爸爸的

#### S1125 · [57:59–57:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3479s)

圖片

#### S1126 · [58:00–58:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3480s)

你知道這是誰敢裝啊

#### S1127 · [58:02–58:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3482s)

這聽起來整個超怪的好不好

#### S1128 · [58:04–58:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3484s)

好

#### S1129 · [58:05–58:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3485s)

所以回到首頁呢

#### S1130 · [58:06–58:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3486s)

你就可以跟他說

#### S1131 · [58:10–58:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3490s)

用

#### S1132 · [58:11–58:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3491s)

搭配

#### S1133 · [57:57–57:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3477s)

像一張爸爸的圖片

#### S1134 · [57:59–58:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3479s)

你知道,這誰敢裝啊

#### S1135 · [58:03–58:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3483s)

好,所以回到首頁呢

#### S1136 · [58:07–58:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3487s)

用

#### S1137 · [58:11–58:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3491s)

搭配

#### S1138 · [58:13–58:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3493s)

幫我設計

#### S1139 · [58:39–58:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3519s)

網站

#### S1140 · [58:41–58:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3521s)

因為這兩個其實它是不太一樣

#### S1141 · [58:47–58:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3527s)

因為Side是專門

#### S1142 · [58:49–58:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3529s)

在專門做

#### S1143 · [58:51–58:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3531s)

網站的工具

#### S1144 · [58:53–58:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3533s)

那Figma呢是協助

#### S1145 · [58:55–58:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3535s)

設計的工具

#### S1146 · [58:57–58:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3537s)

所以這其實是兩個不太一樣的

#### S1147 · [58:59–59:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3539s)

工具,如果沒有用Figma

#### S1148 · [59:01–59:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3541s)

你有可能做出來的網站

#### S1149 · [59:03–59:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3543s)

或許會稍微醜一點

#### S1150 · [59:05–59:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3545s)

但這個也不一定

#### S1151 · [59:07–59:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3547s)

所以這個就要

#### S1152 · [59:09–59:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3549s)

讓它跑一下

#### S1153 · [59:11–59:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3551s)

就它會

#### S1154 · [59:13–59:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3553s)

你看它這邊已經使用了Figma

#### S1155 · [59:15–59:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3555s)

的工具

#### S1156 · [59:17–59:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3557s)

它已經載入了相關的工具

#### S1157 · [59:19–59:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3559s)

這邊一樣

#### S1158 · [59:21–59:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3561s)

讀取了Side的技能

#### S1159 · [59:23–59:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3563s)

讀取了Figma Use的技能

#### S1160 · [59:25–59:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3565s)

所以它這個

#### S1161 · [59:27–59:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3567s)

MCP裡面就有包含了

#### S1162 · [59:29–59:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3569s)

一些Skill還有一些Tool

#### S1163 · [59:31–59:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3571s)

的部分

#### S1164 · [59:34–59:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3574s)

在這邊有一個需要

#### S1165 · [59:36–59:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3576s)

注意的是

#### S1166 · [59:38–59:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3578s)

有時候MCP跟Skill

#### S1167 · [59:40–59:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3580s)

這些東西它可能是同一個

#### S1168 · [59:42–59:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3582s)

工具的來源,那兩個合在一起

#### S1169 · [59:44–59:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3584s)

有時候它們會叫Prime In

#### S1170 · [59:46–59:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3586s)

就是

#### S1171 · [59:51–59:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3591s)

這個名詞,那這個名詞

#### S1172 · [59:53–59:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3593s)

基本上有點像是一個全家桶的概念

#### S1173 · [59:55–59:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3595s)

你就享有了

#### S1174 · [59:57–59:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3597s)

整個Figma這裡

#### S1175 · [59:59–01:00:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3599s)

所有的工具

#### S1176 · [01:00:01–01:00:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3601s)

那以及它們所有的

#### S1177 · [01:00:03–01:00:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3603s)

技能,所以現在有時候

#### S1178 · [01:00:05–01:00:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3605s)

有些東西已經不是那麼好

#### S1179 · [01:00:07–01:00:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3607s)

去辨認,就是什麼

#### S1180 · [01:00:09–01:00:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3609s)

是Prime In,那什麼是MCP

#### S1181 · [01:00:11–01:00:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3611s)

對,所以這些

#### S1182 · [01:00:13–01:00:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3613s)

很多都是Prime In

#### S1183 · [01:00:15–01:00:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3615s)

對,它還在思考

#### S1184 · [01:00:22–01:00:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3622s)

我覺得我應該不應該

#### S1185 · [01:00:24–01:00:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3624s)

給它Figma

#### S1186 · [01:00:26–01:00:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3626s)

它可能會做得比較快

#### S1187 · [01:00:28–01:00:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3628s)

因為有時候

#### S1188 · [01:00:30–01:00:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3630s)

你給它太多東西

#### S1189 · [01:00:32–01:00:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3632s)

就是它都會做得

#### S1190 · [01:00:34–01:00:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3634s)

滿,所以你可以

#### S1191 · [01:00:36–01:00:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3636s)

完全的看到它在這個過程當中

#### S1192 · [01:00:40–01:00:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3640s)

就是它讀了什麼

#### S1193 · [01:00:42–01:00:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3642s)

所以它用我的Mail

#### S1194 · [01:00:44–01:00:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3644s)

來去連接Figma

#### S1195 · [01:00:46–01:00:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3646s)

的這個MCP

#### S1196 · [01:00:48–01:00:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3648s)

因為我之前有授權給它了

#### S1197 · [01:00:50–01:00:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3650s)

所以這是它

#### S1198 · [01:00:52–01:00:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3652s)

整個授權過程

#### S1199 · [01:00:54–01:00:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3654s)

當中的一個

#### S1200 · [01:00:56–01:00:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3656s)

執行檔

#### S1201 · [01:00:58–01:01:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3658s)

那這個是它整個命令的

#### S1202 · [01:01:00–01:01:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3660s)

執行檔

#### S1203 · [01:01:03–01:01:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3663s)

所以其實

#### S1204 · [01:01:07–01:01:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3667s)

裡面你可以很清楚的看到說

#### S1205 · [01:01:09–01:01:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3669s)

就是AI在做

#### S1206 · [01:01:11–01:01:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3671s)

整個的過程當中

#### S1207 · [01:01:13–01:01:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3673s)

它到底看了什麼樣的東西

#### S1208 · [01:01:15–01:01:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3675s)

就它到底走了什麼樣的路徑

#### S1209 · [01:01:17–01:01:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3677s)

就它有沒有讀到

#### S1210 · [01:01:19–01:01:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3679s)

與不該讀的檔案

#### S1211 · [01:01:21–01:01:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3681s)

就像這裡

#### S1212 · [01:01:23–01:01:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3683s)

它確定有讀了Agents.d

#### S1213 · [01:01:25–01:01:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3685s)

那這個Agents.d呢

#### S1214 · [01:01:27–01:01:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3687s)

就是我們剛才做的這個

#### S1215 · [01:01:34–01:01:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3694s)

這個真的是

#### S1216 · [01:01:36–01:01:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3696s)

有點慢喔

#### S1217 · [01:01:41–01:01:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3701s)

欸,跑了喔

#### S1218 · [01:01:52–01:01:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3712s)

太麻煩了

#### S1219 · [01:01:55–01:01:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3715s)

等一下喔

#### S1220 · [01:01:57–01:01:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3717s)

欸

#### S1221 · [01:01:59–01:02:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3719s)

所以你看這個

#### S1222 · [01:02:01–01:02:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3721s)

好像還

#### S1223 · [01:02:03–01:02:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3723s)

還不差喔

#### S1224 · [01:02:05–01:02:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3725s)

這看起來滿

#### S1225 · [01:02:07–01:02:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3727s)

漂亮的

#### S1226 · [01:02:13–01:02:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3733s)

所以它其實做網站會非常非常的

#### S1227 · [01:02:15–01:02:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3735s)

快

#### S1228 · [01:02:17–01:02:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3737s)

把外部的skill

#### S1229 · [01:02:19–01:02:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3739s)

拉進來

#### S1230 · [01:02:21–01:02:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3741s)

我們剛才是用

#### S1231 · [01:02:23–01:02:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3743s)

Figma

#### S1232 · [01:02:25–01:02:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3745s)

它自己內建的一個skill

#### S1233 · [01:02:27–01:02:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3747s)

所以我們如果

#### S1234 · [01:02:29–01:02:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3749s)

想要去更改它的設計

#### S1235 · [01:02:31–01:02:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3751s)

我拉另外一個skill進來

#### S1236 · [01:02:33–01:02:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3753s)

給各位看

#### S1237 · [01:02:40–01:02:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3760s)

我這邊有一個skill

#### S1238 · [01:02:42–01:02:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3762s)

叫mono color的skill

#### S1239 · [01:02:44–01:02:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3764s)

這個skill

#### S1240 · [01:02:46–01:02:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3766s)

主要在幹嘛

#### S1241 · [01:02:48–01:02:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3768s)

可以把這個skill.md的檔案

#### S1242 · [01:02:50–01:02:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3770s)

拉過來看一下

#### S1243 · [01:02:52–01:02:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3772s)

還有

#### S1244 · [01:02:54–01:02:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3774s)

它整個專案的remit

#### S1245 · [01:02:56–01:03:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3776s)

這個skill呢

#### S1246 · [01:03:00–01:03:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3780s)

主要是在做

#### S1247 · [01:03:02–01:03:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3782s)

單色編輯印刷

#### S1248 · [01:03:04–01:03:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3784s)

就它做很多

#### S1249 · [01:03:06–01:03:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3786s)

可能單一顏色

#### S1250 · [01:03:08–01:03:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3788s)

的這種海報輸出

#### S1251 · [01:03:10–01:03:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3790s)

就是

#### S1252 · [01:03:12–01:03:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3792s)

那主要都是講求

#### S1253 · [01:03:14–01:03:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3794s)

單色系或雙色系

#### S1254 · [01:03:16–01:03:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3796s)

所以如果

#### S1255 · [01:03:18–01:03:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3798s)

回到

#### S1256 · [01:03:20–01:03:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3800s)

可以去這個網站

#### S1257 · [01:03:22–01:03:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3802s)

讓各位看一下

#### S1258 · [01:03:36–01:03:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3816s)

這個就是它最原始的skill

#### S1259 · [01:03:38–01:03:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3818s)

這個是一位設計師

#### S1260 · [01:03:40–01:03:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3820s)

他所做的

#### S1261 · [01:03:42–01:03:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3822s)

所以他做的這一些

#### S1262 · [01:03:44–01:03:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3824s)

就是

#### S1263 · [01:03:46–01:03:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3826s)

都是很簡樸

#### S1264 · [01:03:48–01:03:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3828s)

風格

#### S1265 · [01:03:50–01:03:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3830s)

單色或雙色

#### S1266 · [01:03:52–01:03:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3832s)

的這種規則

#### S1267 · [01:03:54–01:03:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3834s)

所以這個就是它

#### S1268 · [01:03:56–01:03:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3836s)

圖片的風格

#### S1269 · [01:04:00–01:04:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3840s)

所以我們可以用這個skill

#### S1270 · [01:04:02–01:04:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3842s)

來讓它寫看看

#### S1271 · [01:04:04–01:04:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3844s)

那這個mono color

#### S1272 · [01:04:06–01:04:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3846s)

它也是

#### S1273 · [01:04:08–01:04:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3848s)

我們meetup

#### S1274 · [01:04:10–01:04:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3850s)

的這個海報

#### S1275 · [01:04:12–01:04:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3852s)

整個海報就是搭載著

#### S1276 · [01:04:14–01:04:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3854s)

mono color的skill

#### S1277 · [01:04:16–01:04:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3856s)

來做設計的

#### S1278 · [01:04:18–01:04:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3858s)

因為我不是設計的人

#### S1279 · [01:04:20–01:04:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3860s)

所以有時候做出來的東西

#### S1280 · [01:04:22–01:04:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3862s)

就蠻醜的

#### S1281 · [01:04:24–01:04:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3864s)

我會借一下別人的東西

#### S1282 · [01:04:26–01:04:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3866s)

來做處理

#### S1283 · [01:04:28–01:04:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3868s)

所以這個好了之後

#### S1284 · [01:04:30–01:04:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3870s)

因為我沒有安裝這個skill

#### S1285 · [01:04:32–01:04:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3872s)

所以我就

#### S1286 · [01:04:37–01:04:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3877s)

因為很少用

#### S1287 · [01:04:39–01:04:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3879s)

所以我也不是那麼想去安裝

#### S1288 · [01:04:41–01:04:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3881s)

這個skill

#### S1289 · [01:04:48–01:04:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3888s)

幫我用這個skill

#### S1290 · [01:04:50–01:04:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3890s)

來去快速的

#### S1291 · [01:04:52–01:05:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3892s)

修改這個網站

#### S1292 · [01:05:04–01:05:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3904s)

所以它其實就已經

#### S1293 · [01:05:06–01:05:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3906s)

讀了整個的skill

#### S1294 · [01:05:08–01:05:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3908s)

它就會說這個skill

#### S1295 · [01:05:10–01:05:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3910s)

然後

#### S1296 · [01:05:12–01:05:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3912s)

編輯式的印刷感

#### S1297 · [01:05:14–01:05:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3914s)

那留白還有嚴格限制

#### S1298 · [01:05:16–01:05:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3916s)

顏色

#### S1299 · [01:05:18–01:05:20](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3918s)

主要是用在海報的設計

#### S1300 · [01:05:20–01:05:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3920s)

但是我這個是主要讓它

#### S1301 · [01:05:22–01:05:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3922s)

做網站

#### S1302 · [01:05:24–01:05:26](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3924s)

所以它需要做一點風格的

#### S1303 · [01:05:26–01:05:28](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3926s)

轉換

#### S1304 · [01:05:28–01:05:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3928s)

如果回來看原本的網站的時候

#### S1305 · [01:05:30–01:05:32](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3930s)

你會發現說

#### S1306 · [01:05:32–01:05:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3932s)

它其實有些東西沒有做好

#### S1307 · [01:05:34–01:05:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3934s)

這邊跟這個圖

#### S1308 · [01:05:36–01:05:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3936s)

其實就重疊了

#### S1309 · [01:05:38–01:05:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3938s)

然後它再去

#### S1310 · [01:05:40–01:05:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3940s)

修正

#### S1311 · [01:05:42–01:05:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3942s)

所以我也不確定說它整個

#### S1312 · [01:05:44–01:05:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3944s)

做出來的感覺是如何

#### S1313 · [01:05:46–01:05:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3946s)

因為我也沒測試過

#### S1314 · [01:05:48–01:05:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3948s)

所以就稍微

#### S1315 · [01:05:50–01:05:54](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3950s)

等一下它

#### S1316 · [01:05:54–01:05:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3954s)

在這邊你如果打

#### S1317 · [01:05:56–01:05:58](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3956s)

一般你如果

#### S1318 · [01:05:58–01:06:00](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3958s)

打斜線

#### S1319 · [01:06:00–01:06:02](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3960s)

你就可以

#### S1320 · [01:06:02–01:06:04](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3962s)

找到你

#### S1321 · [01:06:04–01:06:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3964s)

原本安裝的skill

#### S1322 · [01:06:06–01:06:08](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3966s)

它會用這種符號來

#### S1323 · [01:06:08–01:06:10](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3968s)

做表示

#### S1324 · [01:06:10–01:06:12](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3970s)

當然你也可以去建造自己的skill

#### S1325 · [01:06:12–01:06:14](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3972s)

你可以用skill creator

#### S1326 · [01:06:14–01:06:16](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3974s)

然後去說明說你想要

#### S1327 · [01:06:16–01:06:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3976s)

做什麼樣的skill

#### S1328 · [01:06:18–01:06:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3978s)

所以它好了

#### S1329 · [01:06:33–01:06:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3993s)

好像沒有比較好

#### S1330 · [01:06:37–01:06:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3997s)

但這個就承襲了它

#### S1331 · [01:06:39–01:06:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=3999s)

剛剛的

#### S1332 · [01:06:41–01:06:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4001s)

風格

#### S1333 · [01:06:43–01:06:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4003s)

單色系單色調

#### S1334 · [01:06:45–01:06:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4005s)

的風格

#### S1335 · [01:06:47–01:06:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4007s)

所以這個可以

#### S1336 · [01:06:49–01:06:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4009s)

各位可以

#### S1337 · [01:06:51–01:06:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4011s)

有興趣也可以自己去玩看看

#### S1338 · [01:06:53–01:06:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4013s)

剛才有說你可以用skill creator

#### S1339 · [01:06:55–01:06:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4015s)

去做自己的skill

#### S1340 · [01:06:57–01:06:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4017s)

skill creator這個東西

#### S1341 · [01:06:59–01:07:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4019s)

就是

#### S1342 · [01:07:01–01:07:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4021s)

萬物都可以變成skill

#### S1343 · [01:07:03–01:07:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4023s)

最簡單的例子

#### S1344 · [01:07:05–01:07:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4025s)

可以拿

#### S1345 · [01:07:09–01:07:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4029s)

我今天

#### S1346 · [01:07:11–01:07:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4031s)

可能發在臉書上的一篇文章

#### S1347 · [01:07:13–01:07:18](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4033s)

先進入到我的頁面

#### S1348 · [01:07:18–01:07:22](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4038s)

我今天看的一篇文章

#### S1349 · [01:07:22–01:07:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4042s)

它主要是在說

#### S1350 · [01:07:24–01:07:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4044s)

卡內基美農

#### S1351 · [01:07:29–01:07:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4049s)

大學跟微軟

#### S1352 · [01:07:31–01:07:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4051s)

去合作

#### S1353 · [01:07:33–01:07:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4053s)

它主要是想要去培育

#### S1354 · [01:07:35–01:07:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4055s)

新人的工程師

#### S1355 · [01:07:37–01:07:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4057s)

所以我這邊舉了一個

#### S1356 · [01:07:39–01:07:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4059s)

很簡單的

#### S1357 · [01:07:41–01:07:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4061s)

例子

#### S1358 · [01:07:43–01:07:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4063s)

過去我們在繪製一個

#### S1359 · [01:07:45–01:07:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4065s)

科學圖表的過程當中

#### S1360 · [01:07:47–01:07:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4067s)

我們會需要先了解資料的格式

#### S1361 · [01:07:49–01:07:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4069s)

上網去

#### S1362 · [01:07:51–01:07:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4071s)

搜尋程式之後

#### S1363 · [01:07:53–01:07:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4073s)

再改成自己的版本

#### S1364 · [01:07:55–01:07:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4075s)

進入成果之後

#### S1365 · [01:07:57–01:07:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4077s)

你開始會逐漸的去優化

#### S1366 · [01:07:59–01:08:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4079s)

整個的圖表

#### S1367 · [01:08:01–01:08:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4081s)

可是AI時代來臨

#### S1368 · [01:08:03–01:08:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4083s)

整個流程就會變成是提示紙

#### S1369 · [01:08:05–01:08:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4085s)

直接變成是一個漂亮的圖表

#### S1370 · [01:08:07–01:08:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4087s)

但是從這邊到這邊

#### S1371 · [01:08:09–01:08:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4089s)

你會喪失著

#### S1372 · [01:08:11–01:08:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4091s)

就是怎麼做工具

#### S1373 · [01:08:13–01:08:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4093s)

的那個過程

#### S1374 · [01:08:15–01:08:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4095s)

以及你會有點喪失了

#### S1375 · [01:08:17–01:08:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4097s)

從美的這個過程

#### S1376 · [01:08:19–01:08:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4099s)

所以你看這個只是一個

#### S1377 · [01:08:21–01:08:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4101s)

很簡單的概念而已

#### S1378 · [01:08:23–01:08:34](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4103s)

你可以去閱讀一下

#### S1379 · [01:08:34–01:08:36](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4114s)

下面的文字

#### S1380 · [01:08:36–01:08:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4116s)

我是一個AI的

#### S1381 · [01:08:38–01:08:40](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4118s)

副學者

#### S1382 · [01:08:40–01:08:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4120s)

你可以想辦法把這個文字

#### S1383 · [01:08:42–01:08:44](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4122s)

變成是一個很

#### S1384 · [01:08:44–01:08:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4124s)

簡單skill的描述嗎

#### S1385 · [01:08:46–01:08:48](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4126s)

我要把整個

#### S1386 · [01:08:48–01:08:50](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4128s)

敘述丟進codex

#### S1387 · [01:08:50–01:08:52](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4130s)

做成是一個適合使用者

#### S1388 · [01:08:52–01:08:56](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4132s)

使用的skill

#### S1389 · [01:08:56–01:09:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4136s)

好開最底就好

#### S1390 · [01:09:01–01:09:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4141s)

你看開始公圍了

#### S1391 · [01:09:03–01:09:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4143s)

這種屁話就不要聽了

#### S1392 · [01:09:05–01:09:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4145s)

你看就是

#### S1393 · [01:09:07–01:09:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4147s)

我要把這個修掉

#### S1394 · [01:09:09–01:09:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4149s)

我的AI最近越來越會講這種

#### S1395 · [01:09:11–01:09:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4151s)

奇怪的屁話

#### S1396 · [01:09:13–01:09:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4153s)

所以它這個也沒有不好

#### S1397 · [01:09:15–01:09:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4155s)

你看就是

#### S1398 · [01:09:17–01:09:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4157s)

幫使用者完成任務

#### S1399 · [01:09:19–01:09:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4159s)

所以任務開始之前

#### S1400 · [01:09:21–01:09:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4161s)

使用者提出任務的時候

#### S1401 · [01:09:23–01:09:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4163s)

會先用簡單的語言描述

#### S1402 · [01:09:27–01:09:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4167s)

任務執行過程當中

#### S1403 · [01:09:29–01:09:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4169s)

邊做邊教

#### S1404 · [01:09:31–01:09:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4171s)

任務完成後教使用者如何去

#### S1405 · [01:09:33–01:09:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4173s)

驗證

#### S1406 · [01:09:35–01:09:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4175s)

這些內容確實也是那篇文章

#### S1407 · [01:09:37–01:09:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4177s)

所提供的內容

#### S1408 · [01:09:39–01:09:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4179s)

因為當產出一個結果

#### S1409 · [01:09:41–01:09:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4181s)

之後你要怎麼樣去做驗證

#### S1410 · [01:09:43–01:09:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4183s)

你要如何去培養

#### S1411 · [01:09:45–01:09:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4185s)

整個的判斷力

#### S1412 · [01:09:49–01:09:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4189s)

你看

#### S1413 · [01:09:51–01:09:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4191s)

很多

#### S1414 · [01:09:53–01:09:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4193s)

所以這種東西

#### S1415 · [01:09:55–01:09:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4195s)

你可以把它複製

#### S1416 · [01:09:57–01:09:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4197s)

然後你就丟到codex裡面

#### S1417 · [01:09:59–01:10:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4199s)

然後貼上用skill creator

#### S1418 · [01:10:01–01:10:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4201s)

所以全部的內容

#### S1419 · [01:10:03–01:10:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4203s)

變成是一個AI mentor

#### S1420 · [01:10:05–01:10:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4205s)

的模式

#### S1421 · [01:10:07–01:10:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4207s)

你可以有陪跑模式

#### S1422 · [01:10:09–01:10:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4209s)

學習模式跟快速的

#### S1423 · [01:10:11–01:10:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4211s)

模式

#### S1424 · [01:10:13–01:10:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4213s)

當然就是skill做完之後

#### S1425 · [01:10:15–01:10:17](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4215s)

你需要不斷的去

#### S1426 · [01:10:17–01:10:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4217s)

疊帶修正

#### S1427 · [01:10:19–01:10:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4219s)

因為第一個版本一定

#### S1428 · [01:10:21–01:10:23](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4221s)

通常會有很多很多的問題

#### S1429 · [01:10:23–01:10:25](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4223s)

所以在AI時代下

#### S1430 · [01:10:25–01:10:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4225s)

最重要的其實是

#### S1431 · [01:10:27–01:10:29](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4227s)

你要知道你的問題在哪裡

#### S1432 · [01:10:29–01:10:31](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4229s)

那你如何把你的問題

#### S1433 · [01:10:31–01:10:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4231s)

想辦法

#### S1434 · [01:10:33–01:10:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4233s)

描述的清楚

#### S1435 · [01:10:35–01:10:37](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4235s)

等到真正可以開始

#### S1436 · [01:10:37–01:10:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4237s)

做的時候你又要

#### S1437 · [01:10:39–01:10:41](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4239s)

知道說哪裡

#### S1438 · [01:10:41–01:10:43](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4241s)

會有問題

#### S1439 · [01:10:43–01:10:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4243s)

所以回過最一開始

#### S1440 · [01:10:45–01:10:47](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4245s)

我們常說的就是

#### S1441 · [01:10:47–01:10:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4247s)

所有的東西最難

#### S1442 · [01:10:49–01:10:51](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4249s)

就是在於觀察

#### S1443 · [01:10:51–01:10:53](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4251s)

你要很清楚的知道你現在

#### S1444 · [01:10:53–01:10:55](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4253s)

的每一個狀態

#### S1445 · [01:10:55–01:10:57](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4255s)

到底代表了什麼樣的意思

#### S1446 · [01:10:57–01:10:59](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4257s)

所以今天

#### S1447 · [01:10:59–01:11:01](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4259s)

大致上就到這邊為止

#### S1448 · [01:11:01–01:11:03](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4261s)

那我會再把

#### S1449 · [01:11:03–01:11:05](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4263s)

PDF跟筆記

#### S1450 · [01:11:05–01:11:07](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4265s)

放上網路

#### S1451 · [01:11:07–01:11:09](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4267s)

所以應該

#### S1452 · [01:11:09–01:11:11](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4269s)

應該沒有問題

#### S1453 · [01:11:11–01:11:13](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4271s)

就到這邊囉

#### S1454 · [01:11:13–01:11:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=4273s)

掰掰


## 開場局部重辨識補充（R 編號）

截取原音訊 09:50–10:50，以相同 faster-whisper medium、中文設定重辨識；以下時間加回 590 秒後對應原片。R01–R10 補入正文開場來源；R11–R15 與原 S0031 起重疊，只在此完整保留。原始全片辨識兩檔未改寫。

#### R01 · [10:04–10:06](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=604s) · 604.96–606.24 秒

嗨 各位

#### R02 · [10:13–10:15](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=613s) · 613.14–615.14 秒

好 我們可以開始了

#### R03 · [10:16–10:19](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=616s) · 616.64–619.14 秒

如果就是各位

#### R04 · [10:19–10:21](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=619s) · 619.14–621.82 秒

禮拜三晚上有空的話呢

#### R05 · [10:21–10:24](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=621s) · 621.82–624.32 秒

就可以來參加就是

#### R06 · [10:24–10:27](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=624s) · 624.32–627.52 秒

那個實體的Meetup的活動

#### R07 · [10:27–10:30](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=627s) · 627.52–630.90 秒

那這禮拜的活動有邀請到一位

#### R08 · [10:30–10:33](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=630s) · 630.90–633.10 秒

視覺圖像的紀錄師

#### R09 · [10:33–10:35](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=633s) · 633.10–635.86 秒

他應該大概是全台灣

#### R10 · [10:36–10:38](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=636s) · 636.06–638.06 秒

唯一一個還唯二的

#### R11 · [10:38–10:39](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=638s) · 638.06–639.58 秒

的圖像紀錄師

#### R12 · [10:39–10:42](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=639s) · 639.58–642.58 秒

他專門在記錄整個

#### R13 · [10:42–10:45](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=642s) · 642.58–645.06 秒

就是可能是研討會的過程

#### R14 · [10:45–10:46](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=645s) · 645.06–646.66 秒

或是演講的過程

#### R15 · [10:46–10:49](https://www.youtube.com/watch?v=GmBZMaWsAqM&t=646s) · 646.66–649.94 秒

那他把整個重點給視覺化
