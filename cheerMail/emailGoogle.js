var mailer = require('nodemailer');
var cheerio = require('cheerio'); 
var request = require('request');

var transporter = mailer.createTransport({
				host:'smtp.gmail.com',
				port: 465,
				secure: true,
				auth:{
								user:'maximilianmoore44@gmail.com',
								pass:'Jackson1234'
				}
});

var mailOptions = {
				from: '"Max Moore" <maximilianmoore44@gmail.com>',
				to: 'maximilianmoore44@gmail.com',
				subject: 'hello',
				text: 'hello world',
				html: '<p>hello world</p>'
};

transporter.sendMail(mailOptions);


var getData =  request("https://news.ycombinator.com", (error, response, html) =>{
				if(!error && response.statusCode == 200){
				var $ = cheerio.load(html);
								$('*').each(function(i, element){
								console.log($(this).text());
				});
				}
});
