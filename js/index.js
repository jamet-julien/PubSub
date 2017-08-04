PubSub.on('home', function(){
    console.log('home');
});


var oSub1 = PubSub.on('home.start', function(){
    console.log('start#1');
});

var oSub2 = PubSub.on('home.start', function(){
    console.log('start#2');
});

PubSub.on('home.delete_1', function(){
    console.log('delete');
    oSub1.off();
});


PubSub.on('home.delete_2', function(){
    console.log('delete');
    oSub2.off();
});
