"use client";

import { useState } from "react";

const sections = [
  ["⌂", "الرئيسية"],
  ["✧", "المساعد الذكي"],
  ["♙", "الشخصيات"],
  ["◈", "السيناريوهات"],
  ["▤", "محادثاتي"],
];

const characters = [
  { icon: "🌙", name: "ليان", type: "صديقة افتراضية", desc: "شخصية اجتماعية وعفوية" },
  { icon: "✨", name: "سارة", type: "شخصية رومانسية", desc: "حوار دافئ وشخصية مميزة" },
  { icon: "🧠", name: "أطلس", type: "مساعد معرفي", desc: "للنقاش والتعلم والتحليل" },
];

export default function Home() {
  const [active, setActive] = useState("الرئيسية");
  const [message, setMessage] = useState("");

  return (
    <main className="app-shell" dir="rtl">
      <aside className="sidebar">
        <div className="brand">✦ NOVA <span>AI</span></div>
        <button className="new-chat" onClick={() => setActive("المساعد الذكي")}>＋ محادثة جديدة</button>
        <nav>
          {sections.map(([icon, name]) => (
            <button key={name} className={active === name ? "nav-item selected" : "nav-item"} onClick={() => setActive(name)}>
              <span>{icon}</span>{name}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">ذكاء يتحدث بلغتك</div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div className="mobile-brand">✦ NOVA AI</div>
          <span className="online"><i /> المنصة متاحة</span>
          <button className="profile">👤</button>
        </header>

        <div className="content">
          <div className="welcome">
            <span className="eyebrow">✦ عالم جديد من الذكاء الاصطناعي</span>
            <h1>مرحباً بك في <span>NOVA AI</span></h1>
            <p>مساحتك الخاصة للتفكير، الإبداع، الحوار واكتشاف عوالم جديدة.</p>
          </div>

          <div className="section-heading">
            <div><h2>ابدأ رحلتك</h2><p>ماذا تريد أن تفعل اليوم؟</p></div>
          </div>

          <div className="action-grid">
            <button className="action-card featured" onClick={() => setActive("المساعد الذكي")}>
              <span className="card-icon">✧</span>
              <strong>المساعد الذكي</strong>
              <small>اسأل، ناقش، تعلّم وابتكر</small>
              <span className="card-arrow">←</span>
            </button>
            <button className="action-card" onClick={() => setActive("الشخصيات")}>
              <span className="card-icon">♙</span>
              <strong>اكتشف الشخصيات</strong>
              <small>تحدث مع شخصيات متنوعة</small>
              <span className="card-arrow">←</span>
            </button>
            <button className="action-card" onClick={() => setActive("السيناريوهات")}>
              <span className="card-icon">◈</span>
              <strong>السيناريوهات</strong>
              <small>اصنع قصتك الخاصة</small>
              <span className="card-arrow">←</span>
            </button>
            <button className="action-card" onClick={() => setActive("الشخصيات")}>
              <span className="card-icon">＋</span>
              <strong>أنشئ شخصيتك</strong>
              <small>صمم شخصية بأسلوبك</small>
              <span className="card-arrow">←</span>
            </button>
          </div>

          <div className="section-heading character-heading">
            <div><h2>شخصيات مميزة</h2><p>اكتشف عوالم وشخصيات جديدة</p></div>
            <button onClick={() => setActive("الشخصيات")}>عرض الكل ←</button>
          </div>

          <div className="character-grid">
            {characters.map((character) => (
              <article className="character-card" key={character.name}>
                <div className="avatar">{character.icon}</div>
                <div className="character-info">
                  <span>{character.type}</span>
                  <h3>{character.name}</h3>
                  <p>{character.desc}</p>
                </div>
                <button onClick={() => setActive("الشخصيات")}>اكتشف الشخصية ←</button>
              </article>
            ))}
          </div>

          <div className="quick-chat">
            <div><strong>لديك فكرة؟ ابدأ الحديث</strong><p>مساحتك مفتوحة للأسئلة والأفكار.</p></div>
            <div className="chat-input">
              <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="اكتب ما يدور في بالك..." />
              <button onClick={() => setActive("المساعد الذكي")} aria-label="إرسال">↑</button>
            </div>
            <small>واجهة تجريبية — سيتم ربط المحادثات بمحرك الذكاء الاصطناعي في المرحلة القادمة.</small>
          </div>
        </div>

        <footer>NOVA AI © 2026 · Your AI. Your World. Your Way.</footer>
      </section>

      <nav className="mobile-nav">
        {sections.map(([icon, name]) => (
          <button key={name} className={active === name ? "active" : ""} onClick={() => setActive(name)}>
            <span>{icon}</span><small>{name}</small>
          </button>
        ))}
      </nav>
    </main>
  );
}
