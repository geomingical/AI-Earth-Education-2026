// One entry per released week. Each week folder uses the same layout:
// Material/WeekNN/index.html (notes), slides.pdf, transcript.md, assets/.
// After editing this list, bump ?v= on courses.js in index.html so browsers load the new list at once.
window.AI_EARTH_COURSES = [
  {
    week: 1,
    title: "課程前言與 AI 入門",
    description: "為什麼現在要學 AI、文字如何經過 Transformer 模型產生回答，以及使用 AI 時如何保持判斷與查證。",
    notes: "Material/Week01/index.html",
    pdf: "Material/Week01/slides.pdf",
    video: "https://www.youtube.com/watch?v=Bhn8PmeW1xs&t=505s"
  },
  {
    week: 2,
    title: "GPT 的發展與推理模型",
    description: "從 GPT-1 到 GPT-3，看規模、資料與任務放在哪裡如何一起改變；再從 Chain-of-Thought 走到推理模型，理解一段寫得很完整的推理，為什麼仍需要查核。",
    notes: "Material/Week02/index.html",
    pdf: "Material/Week02/slides.pdf",
    video: "https://www.youtube.com/watch?v=u2-M1ab8RGE&t=368s"
  }
];
