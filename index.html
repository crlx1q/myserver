<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Terminal</title>
    <!-- Подключаем пиксельный шрифт для лого и моноширинный для текста -->
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #050505;
            --text-main: #a3a3a3;
            --text-bright: #ffffff;
            --accent: #a855f7; /* Фиолетовый акцент как на скрине */
            --online: #4ade80; /* Зеленый для статуса */
            --offline: #f87171;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'JetBrains Mono', monospace;
            background-color: var(--bg-color);
            color: var(--text-main);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            position: relative;
            font-size: 14px;
        }

        /* ASCII фон */
        canvas#bg-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.15;
            pointer-events: none;
        }

        .container {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 40px;
        }

        /* Шапка навигации */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-bottom: 15px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
        }

        .header-left span {
            color: var(--accent);
        }

        .header-right {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-main);
            text-decoration: none;
            margin-left: 20px;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--text-bright);
        }

        .shell-btn {
            border: 1px solid var(--text-main);
            background: transparent;
            color: var(--text-main);
            padding: 5px 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            cursor: pointer;
            border-radius: 4px;
            transition: all 0.2s;
        }

        .shell-btn:hover {
            border-color: var(--text-bright);
            color: var(--text-bright);
        }

        /* Центральный контент */
        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        /* Пиксельный Логотип */
        .logo-title {
            font-family: 'VT323', monospace;
            font-size: 12rem;
            color: var(--text-bright);
            line-height: 1;
            margin-bottom: 40px;
            text-shadow: 
                4px 4px 0 rgba(255,255,255,0.1),
                -2px -2px 0 rgba(0,0,0,0.8);
            letter-spacing: 5px;
            position: relative;
        }

        /* Терминальный вывод */
        .terminal-block {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            max-width: 600px;
        }

        .term-line {
            display: flex;
            align-items: center;
            letter-spacing: 1px;
        }

        .term-prefix {
            color: #555;
            margin-right: 15px;
        }

        .term-key {
            color: var(--text-main);
            width: 100px;
        }

        .term-val {
            color: var(--text-bright);
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .status-online {
            color: var(--online);
            text-shadow: 0 0 10px rgba(74, 222, 128, 0.4);
            animation: pulse 2s infinite;
        }

        .status-offline {
            color: var(--offline);
        }

        .time-block {
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .time-block span {
            color: var(--accent);
            font-weight: bold;
        }

        /* Нижний текст */
        .footer-desc {
            margin-top: 60px;
            text-align: center;
            font-size: 16px;
            line-height: 1.5;
            color: var(--text-main);
        }

        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
        }

        @media (max-width: 768px) {
            .logo-title { font-size: 6rem; }
            .header-right { display: none; }
            .term-line { flex-direction: column; align-items: flex-start; gap: 5px;}
        }
    </style>
</head>
<body>

    <!-- Канвас для ASCII фона -->
    <canvas id="bg-canvas"></canvas>

    <div class="container">
        <!-- Навигация как на скрине -->
        <header>
            <div class="header-left">
                C SERVER.APP(* <span>-></span> сейчас в работе: основной узел
            </div>
            <div class="header-right">
                <div class="nav-links">
                    <a href="#">ПРОЕКТЫ</a>
                    <a href="#">ЗАМЕТКИ</a>
                    <a href="#">ДОСКА</a>
                    <a href="#">КОНТАКТЫ</a>
                </div>
                <button class="shell-btn">> SHELL <span style="font-size:10px; color:#555">ctrl k</span></button>
            </div>
        </header>

        <main>
            <!-- Пиксельный заголовок -->
            <h1 class="logo-title">CRLX1Q</h1>

            <!-- Терминальный блок со статусом -->
            <div class="terminal-block">
                <div class="term-line">
                    <span class="term-prefix">></span>
                    <span class="term-key">STATUS:</span>
                    <span class="term-val" id="server-status">CONNECTING...</span>
                </div>
                <div class="term-line">
                    <span class="term-prefix">></span>
                    <span class="term-key">UPTIME:</span>
                    <span class="term-val" id="server-uptime">
                        <div class="time-block"><span>--</span> мес</div>
                        <div class="time-block"><span>--</span> дн</div>
                        <div class="time-block"><span>--</span> ч</div>
                        <div class="time-block"><span>--</span> мин</div>
                        <div class="time-block"><span>--</span> сек</div>
                    </span>
                </div>
                <div class="term-line">
                    <span class="term-prefix">></span>
                    <span class="term-key">ACTIVE:</span>
                    <span class="term-val"><span style="color:var(--accent)">■</span> ИГРЫ И БД</span>
                </div>
            </div>

            <!-- Текст внизу -->
            <div class="footer-desc">
                Создаю масштабируемую архитектуру,<br>
                нейросети и эстетичные интерфейсы.
            </div>
        </main>
    </div>

    <script>
        // --- 1. Анимация фона (ASCII Pattern) ---
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        const chars = ['+', '-', '0', '1', '#', '*', '\\', '/', '>', '<', ':', '.'];
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawBg();
        }

        function drawBg() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = '14px JetBrains Mono';
            ctx.fillStyle = '#333';
            
            const cols = Math.floor(canvas.width / 20);
            const rows = Math.floor(canvas.height / 20);
            
            for(let i = 0; i < cols; i++) {
                for(let j = 0; j < rows; j++) {
                    // Рисуем символ с вероятностью 10%
                    if(Math.random() > 0.9) {
                        const char = chars[Math.floor(Math.random() * chars.length)];
                        ctx.fillText(char, i * 20, j * 20);
                    }
                }
            }
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        // Перерисовываем фон медленно для эффекта помех
        setInterval(drawBg, 2000);


        // --- 2. Логика работы с сервером (Настоящий Uptime) ---
        let serverStartTimestamp = null;
        const statusEl = document.getElementById('server-status');
        const uptimeEl = document.getElementById('server-uptime');

        // Функция форматирования с нулями
        const pad = (num) => num.toString().padStart(2, '0');

        // Отрисовка времени
        function renderUptime(uptimeMs) {
            const seconds = Math.floor((uptimeMs / 1000) % 60);
            const minutes = Math.floor((uptimeMs / (1000 * 60)) % 60);
            const hours = Math.floor((uptimeMs / (1000 * 60 * 60)) % 24);
            const days = Math.floor((uptimeMs / (1000 * 60 * 60 * 24)) % 30);
            const months = Math.floor(uptimeMs / (1000 * 60 * 60 * 24 * 30));

            uptimeEl.innerHTML = `
                <div class="time-block"><span>${months}</span> мес</div>
                <div class="time-block"><span>${days}</span> дн</div>
                <div class="time-block"><span>${pad(hours)}</span> ч</div>
                <div class="time-block"><span>${pad(minutes)}</span> мин</div>
                <div class="time-block"><span>${pad(seconds)}</span> сек</div>
            `;
        }

        // Запрос к нашему бэкенду
        async function fetchServerStatus() {
            try {
                // Запрашиваем данные с того же хоста
                const response = await fetch('/api/status');
                if (!response.ok) throw new Error('Network error');
                
                const data = await response.json();
                
                // Сервер ответил
                statusEl.textContent = data.status;
                statusEl.className = 'term-val status-online';
                
                // Запоминаем когда сервер был запущен
                serverStartTimestamp = data.startTime;

            } catch (error) {
                // Если сервер выключен или недоступен
                statusEl.textContent = 'OFFLINE (CONNECTION FAILED)';
                statusEl.className = 'term-val status-offline';
                serverStartTimestamp = null;
                uptimeEl.innerHTML = '<span style="color: #f87171">SERVER DOWN</span>';
            }
        }

        // Локальный таймер, который тикает каждую секунду
        setInterval(() => {
            if (serverStartTimestamp) {
                const currentUptimeMs = Date.now() - serverStartTimestamp;
                renderUptime(currentUptimeMs);
            }
        }, 1000);

        // Пингуем сервер раз в 10 секунд
        fetchServerStatus();
        setInterval(fetchServerStatus, 10000);

    </script>
</body>
</html>
