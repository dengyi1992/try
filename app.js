var express = require('express'),
	app = express();
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
server.listen(3000);
app.get('/',function(req,res){
	res.sendfile(__dirname +'/index.html');
});

io.sockets.on('connection',function(socket){
	socket.on('send message',function(data){
		// io.sockets.emit('new message',
		// 	data);
	socket.broadcast.emit('new message', {
      username: "dy",
      messagetitle: data.messaget,
      messagecontent: data.messagec,
      message: data.messaget,	
      promotionlink: data.promotionl
      // url: "https://www.baidu.com/"
      // imgUrl:"http://121.42.146.103/dg4s/Public/static/public/img/index/logo_1.png"
    });
	});

	// socket.on("private", function(data) {
 //        io.sockets.sockets[data.to].emit("private", { from: "dy", to: data.to, messagetitle: data.messaget,
 //      messagecontent: data.messagec,
 //      message: data.messaget,	
 //      promotionlink: data.promotionl });
 //        socket.emit("private", { from: "dy", to: data.to, messagetitle: data.messaget,
 //      messagecontent: data.messagec,
 //      message: data.messaget,	
 //      promotionlink: data.promotionl});
 //    });
});