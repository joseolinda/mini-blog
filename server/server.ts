import express, { Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = 3001;

// Configuração do socket.io
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

app.use(express.json());

app.get('/posts', (req: Request, res: Response) => {
    // Simule uma resposta com posts fictícios
    res.json([{ id: 1, content: "Hello, world!" }]);
});

serverHttp.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));