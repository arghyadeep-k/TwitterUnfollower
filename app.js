var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

//var list = new ArrayList();

//Obtaining friends list
T.get('friends/ids',function(err,data,response){
    if(!err)
    {
        console.log(data.ids.length);
        //Insert code
        for(let i=0;i<data.ids.length;i++)
            //list.add(data.users[i].name);
            console.log(data.ids[i]);
    }
    else
    {
    console.log(err);
    }
})

//Obtaining following list
// T.get('friends/list',function(err,data,response){
//     if(!err)
//     {
//         console.log(data.users.length);
//         //Insert code
//         for(let i=0;i<data.users.length;i++)
//             list.add(data.users[i].name);
//             //console.log(data.users[i].name);
//     }
//     else
//     {
//     console.log(err);
//     }
// })