import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

// "Middleware" that hits before hitting the routes. 
app.use(cors());

/*This middleware tells Express:
“When you get a request with JSON in the body, automatically parse it into req.body.”*/
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
