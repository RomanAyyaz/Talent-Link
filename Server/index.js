const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const cookieParser = require('cookie-parser');
const socketIo = require('socket.io');
const Message = require('./Models/MessageSchema/MessageSchema');

// Initialize
require('./Database/db');
require('./Listeners/userListeners');
require('./Workers/cronWatcher');


const app = express();
const port = process.env.PORT || 8000;
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Allow all for now (secure later)
  },
});

// Middleware
app.use('/public', express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// API Routes
const UserRoute = require('./Routes/User/UserRoute');
const CourseRoute = require('./Routes/Course/Course');
const JobRoute = require('./Routes/Job/Job');
const QuizRoute = require('./Routes/Quiz/Quiz');
const CompanyRoutes = require('./Routes/Company/CompanyRoutes');
const CopilotRoute = require('./Routes/JobCopilot/JobCopilot');


app.use('/user', UserRoute);
app.use('/course', CourseRoute);
app.use('/company', CompanyRoutes);
app.use('/job', JobRoute);
app.use('/quiz', QuizRoute);
app.use('/jobCopilot',CopilotRoute)

// ✅ Real-time Socket.IO logic
io.on('connection', (socket) => {
    // console.log('A user connected');
  
    socket.on('sendMessage', async (data) => {
      const { senderType, senderId, receiverType, receiverId, message } = data;
  
      try {
        const newMessage = new Message({
          senderType,
          senderId,
          receiverType,
          receiverId,
          message,
        });
  
        await newMessage.save();
  
        io.emit('receiveMessage', newMessage);
      } catch (error) {
        console.error('Message save failed:', error);
      }
    });
  
    socket.on('disconnect', () => {
      // console.log('A user disconnected');
    });
  });
  

// Start Server
server.listen(port, () => {
  console.log(`Listening at port number ${port}`);
});
