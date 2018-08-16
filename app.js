var Twitter = require('twitter');
var config = require('./config.js');
var ArrayList = require('arraylist');

var T = new Twitter(config);

var friendsList = new ArrayList();
var followersList = new ArrayList();

var count = 0;

//Friends list
T.get('friends/ids',function(err,data,response){
    if(!err)
    {        
        for(let i=0;i<data.ids.length;i++)
            friendsList.add(data.ids[i]);         
        
        if(followersList.size() > 0)
        {
            friendsList = friendsList.difference(followersList); 
            console.log(friendsList);  
            //console.log("In Friends section: " + friendsList.size());
            for(let i=0; i<friendsList.size(); i++)
            {
                var userId = {user_id:friendsList[i]};
                T.post('friendships/destroy',userId,function(err,data,response){
                    if(!err)
                    {
                        T.get('users/lookup',userId,function(err,data,response)
                        {
                            if(!err)
                                console.log(data.name + " (@"+data.screen_name+")" + " has been unfollowed.");
                            else
                                console.log(err);                                
                        })
                        count++;
                    }
                    else
                        console.log(err);
                })
                console.log(count + " accounts were unfollowed.");
            }
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
            for(let i=0; i<friendsList.size(); i++)
            {
                var userId = {user_id:friendsList[i]};
                T.post('friendships/destroy',userId,function(err,data,response){
                    if(!err)
                    {
                        T.get('users/lookup',userId,function(err,data,response)
                        {
                            if(!err)
                                console.log(data.name + " (@"+data.screen_name+")" + " has been unfollowed.");
                            else
                                console.log(err);                                
                        })
                        count++;
                    }
                    else
                        console.log(err);
                })
                console.log(count + " accounts were unfollowed.");
            }
        }        
    }
    else
    {
    console.log(err);
    }
})

//T.post()