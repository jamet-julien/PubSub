PubSub.on('home', function(){
    console.log('home');
});


PubSub.on('home.start', function(){
    console.log('start');
});


PubSub.on('home.start.one', function(){
    console.log('one');
});
