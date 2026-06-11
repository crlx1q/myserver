// Встроенные модули Node.js (не нужно ничего устанавливать через npm)
const http = require('http');
const fs = require('fs');
const path = require('path');

// Фиксируем реальное время запуска сервера (в миллисекундах)
const SERVER_START_TIME = Date.now();

const server = http.createServer((req, res) => {
    // API эндпоинт для получения статуса
    if (req.url === '/api/status') {
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            // Разрешаем CORS на всякий случай
            'Access-Control-Allow-Origin': '*' 
        });
        res.end(JSON.stringify({
            status: 'ONLINE',
            startTime: SERVER_START_TIME,
            serverTime: Date.now()
        }));
        return;
    }

    // Отдача файла index.html
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            }
        });
        return;
    }

    // Если файл не найден
    res.writeHead(404);
    res.end('Not found');
});

const PORT = 8080; // Можете изменить порт на нужный

server.listen(PORT, () => {
    console.log(`[>>] Сервер успешно запущен!`);
    console.log(`[>>] Откройте в браузере: http://localhost:${PORT}`);
    console.log(`[>>] Время старта зафиксировано. Идет отсчет аптайма...`);
});
