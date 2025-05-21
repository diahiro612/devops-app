const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Aplikasi berjalan di dalam container Docker!\n");
}).listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});