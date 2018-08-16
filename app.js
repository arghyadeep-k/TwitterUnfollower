var Twitter = require('twitter');
var config = require('./config.js');
var ArrayList = require('arraylist');

var T = new Twitter(config);

var friendsList = new ArrayList();
var followersList = new ArrayList();

//Friends list
T.get('friends/ids',function(err,data,response){
    if(!err)
    {        
        for(let i=0;i<data.ids.length;i++)
            friendsList.add(data.ids[i]);         
        
        if(followersList.size() > 0)
        {
            friendsList = friendsList.difference(followersList);  
            //console.log("In Friends section: " + friendsList.size());
        }
    }
    else
    {
    console.log(err);
    }
})

//Followers list
T.get('followers/ids',function(err,data,response){
    if(!err)
    {        
        for(let i=0;i<data.ids.length;i++)
            followersList.add(data.ids[i]);         
        
        if(friendsList.size() > 0)
        {
            friendsList = friendsList.difference(followersList);     
            //console.log("In Followers section: " + friendsList.size());
        }
    }
    else
    {
    console.log(err);
    }
})


