import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// route
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
  credentials: true,
};

app.get('/', (req, res) => {
  res.send('server working');
});

//database connection
// 'strictQuery' 옵션은 쿼리 동작에 대한 엄격 모드(strict mode)를 제어합니다
// Mongoose가 스키마에서 정의하지 않은 필드를 포함하는 쿼리를 허용
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database Connected');
  } catch (error) {
    console.log('MongoDB database connection failed');
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

app.use('api/vi/auth', authRoute);
app.use('api/vi/tours', tourRoute);
app.use('api/vi/users', userRoute);

app.listen(port, () => {
  connect();
  console.log('server listening on port', port);
});
