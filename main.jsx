@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@300;400&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --gold: #9a7c3f;
  --gold-light: #e8dfc8;
  --gold-pale: #f5f0e6;
  --ink: #1a1814;
  --ink-muted: #5a5448;
  --ink-faint: #9a9488;
  --surface: #fffdf8;
  --bg: #f7f5f0;
  --border: #e0d8c8;
  --sat: env(safe-area-inset-top, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
}

html, body, #root {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: var(--bg);
}

body {
  font-family: 'Lora', serif;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  overscroll-behavior: none;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--gold-light); border-radius: 2px; }

textarea, input, button { font-family: inherit; }
textarea { resize: none; }
textarea:focus, input:focus { outline: none; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.15; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
