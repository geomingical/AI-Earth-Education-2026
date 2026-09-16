const list = document.getElementById("course-list");
const courses = window.AI_EARTH_COURSES;

if (Array.isArray(courses)) {
  for (const course of courses) {
    const card = document.createElement("article");
    card.className = "course";
    const meta = document.createElement("div");
    meta.className = "course-meta";
    const week = document.createElement("span");
    week.className = "week";
    week.textContent = `WEEK ${String(course.week).padStart(2, "0")}`;
    const available = document.createElement("span");
    available.className = "available";
    available.textContent = "已公開";
    meta.append(week, available);
    const title = document.createElement("h3");
    title.textContent = course.title;
    const description = document.createElement("p");
    description.textContent = course.description;
    const actions = document.createElement("div");
    actions.className = "actions";
    for (const [key, label] of [["notes", "閱讀筆記"], ["pdf", "PDF 簡報"], ["video", "課程影片"]]) {
      if (!course[key]) continue;
      const link = document.createElement("a");
      link.className = key === "notes" ? "button primary" : "button";
      link.href = course[key];
      link.textContent = label;
      link.setAttribute("aria-label", `第 ${course.week} 週：${label}`);
      actions.append(link);
    }
    card.append(meta, title, description, actions);
    list.append(card);
  }
  const message = document.getElementById("load-message");
  if (courses.length) message.hidden = true;
  else message.textContent = "教材整理中，完成後將在這裡公開。";
}
