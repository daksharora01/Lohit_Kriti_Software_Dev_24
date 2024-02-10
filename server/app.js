require("dotenv").config();
const session = require("express-session");
const flash = require("connect-flash");
const msal = require("@azure/msal-node");
const connectDB = require("./connectdb.js");
var cors = require("cors");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const socket = require('socket.io');
const { spawn } = require('child_process');


const authRouter = require("./auth/auth.js");
const ProfileRoutes = require("./Routes/profileRoutes.js");
const discussionRoutes = require("./Routes/discussionRoutes.js");
const courseReviewRoutes = require("./Routes/courseReviewRoute.js");
const commentRoutes = require("./Routes/commentRoutes.js");
const postRoutes = require("./Routes/postRoutes.js");
const projectRoutes = require("./Routes/projectRoutes.js");
const messagesRoutes = require("./Routes/messagesRoute.js");
const techStackRoutes = require("./Routes/techStacksRoutes.js");
const groupRoutes = require("./Routes/groupRoutes.js");

var app = express();

var corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOptions));

// In-memory storage of logged-in users
// For demo purposes only, production apps should store
// this in a reliable storage
app.locals.users = {};

// MSAL config
const msalConfig = {
  auth: {
    clientId: process.env.OAUTH_CLIENT_ID,
    authority: process.env.OAUTH_AUTHORITY,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

// Create msal application object
app.locals.msalClient = new msal.ConfidentialClientApplication(msalConfig);

// Session middleware
// NOTE: Uses default in-memory session store, which is not
// suitable for production
app.use(
  session({
    secret: "your_secret_value_here",
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
  })
);

// Flash middleware
app.use(flash());

// Set up local vars for template layout
app.use(function (req, res, next) {
  // Read any flashed errors and save
  // in the response locals
  res.locals.error = req.flash("error_msg");

  // Check for simple error string and
  // convert to layout's expected format
  var errs = req.flash("error");
  for (var i in errs) {
    res.locals.error.push({ message: "An error occurred", debug: errs[i] });
  }

  // Check for an authenticated user and load
  // into response locals
  if (req.session.userId) {
    res.locals.user = app.locals.users[req.session.userId];
  }

  next();
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "auth/public")));

app.use("/profile", ProfileRoutes);
app.use("/auth", authRouter);
app.use("/discussion", discussionRoutes);
app.use("/coursereview", courseReviewRoutes);
app.use("/comment", commentRoutes);
app.use("/posts", postRoutes);
app.use("/projects", projectRoutes);
app.use("/messages", messagesRoutes);
app.use("/techstacks", techStackRoutes);
app.use("/groups", groupRoutes);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

connectDB();

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});

const io = socket(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true
  },
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
  global.chatSocket = socket;
  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on('send-msg', (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-receive', data.msg);
    }
  })
})




module.exports = app;
