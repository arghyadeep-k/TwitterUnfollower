var Twitter = require('twitter');
var config = require('./config.js');
var ArrayList = require('arraylist');

var T = new Twitter(config);

var friendsList = new ArrayList();
var followersList = new ArrayList();
var unfollowersList = new ArrayList();

//Obtaining friends list
T.get('friends/ids',function(err,data,response){
    if(!err)
    {
        console.log(data.ids.length);
        //Insert code
        for(let i=0;i<data.ids.length;i++)
            friendsList.add(data.ids[i]); 
        console.log(friendsList.size());        
    }
    else
    {
    console.log(err);
    }
})

//Obtaining followers list
T.get('followers/ids',function(err,data,response){
    if(!err)
    {
        console.log(data.ids.length);
        //Insert code
        for(let i=0;i<data.ids.length;i++)
            followersList.add(data.ids[i]); 
        console.log("a" + followersList.size());
    }
    else
    {
    console.log(err);
    }
})

unfollowersList.add(followersList.difference(friendsList))

//let unfollowersList = followersList.filter(x => !friendsList.includes(x))

console.log(unfollowersList.size());        
