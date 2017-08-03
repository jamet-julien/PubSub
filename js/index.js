PubSub.on('home', function(){
    console.log('home');
});


var oSub1 = PubSub.on('home.start', function(){
    console.log('start#1');
});

var oSub2 = PubSub.on('home.start', function(){
    console.log('start#2');
});

PubSub.on('home.delete', function(){
    console.log('delete');
    oSub1.off();
});
