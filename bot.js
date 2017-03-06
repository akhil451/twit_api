// console.log("hjdja");

var Twit = require('twit');
var config=require('./config');
console.log(config);
var T = new Twit(config);




var stream =T.stream('user');

// stream.on('follow',followed);

// function followed(eventMsg){
// 	var name = eventMsg.source.name;
// 	var screenName=eventMsg.source.screen_name;
// 	console.log("Someone followed!");
// 	tweetIt('.@'+screenName+' Thanks for following me !! . ')
// }

//stream.on("tweet",myreply);

// function myreply(eventMsg){

	
// 	var replyto = eventMsg.in_reply_to_screen_name;
// 	var name = eventMsg.source.name;
//   var screenName=eventMsg.source.screen_name;
//  var r=Math.floor(Math.random()*100);
// 	console.log(replyto + ' ' + screenName);
// 		console.log(screenName);
// 	if(replyto == 'akhil451'){
// 		var newtweet="@"+screenName + r+ " Thank you for tweeting to me ! You Just made my day."
// 		tweetIt(newtweet);
// 	}

// }

var d = 1337 ;

setInterval(everyday,1000*60*60*24);
everyday(d);
function everyday(d){
	var tweettext = "@realDonaldTrump Still Has " + d + " days left.SAD!" ;
	d=d-1;
	tweetIt(tweettext);
}


function tweetIt(txt)
{

	var tweet=
	{ 
		status:txt 
	}

T.post('statuses/update',tweet,tweeted);

function tweeted (err, data, response) {
	if(err){
		console.log(err);
	}
	else console.log("It worked!!");

}



}



