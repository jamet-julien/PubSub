(function(win){

  var Pubsub = function(){

      var _aEvent = [],
          _oPublic = {
              on   : _on,
              emit : _emit
          };

      /**
       * [on description]
       * @param  {[type]}   type [description]
       * @param  {Function} cb   [description]
       * @return {[type]}        [description]
       */
      function _on() {
          var args  = [].slice.call( arguments),
              sType = args.shift(),
              cb    = args.shift() || null,
              ctx   = args.shift() || win;

            if( cb === null){
              return false;
            }

           _aEvent['_on' + sType] = _aEvent['_on' + sType] || [];
           _aEvent['_on' + sType].push({ cb:cb, ctx:ctx});

           args = cb = ctx = null;

           return (function( i){
             return {
               off : function(){
                  _aEvent['_on' + sType][i] && delete _aEvent['_on' + sType][i];
               }
             }
           })( _aEvent['_on' + sType].length - 1);
       }

      /**
       * [emit description]
       * @param  {[type]} type [description]
       * @param  {[type]} args [description]
       * @return {[type]}      [description]
       */
      function _emit() {

        var args   = [].slice.call( arguments),
            sType  = args.shift(),
            aType  = sType.split( "/"),
            i      = 0,
            iLen   = aType.length,
            _type  = '';

        for(; i < iLen; i++){
          _type += aType[ i ];
          _aEvent['_on' + _type] && _aEvent['_on' + _type].forEach( (o) => {
             setTimeout( function(){
               o && o.cb.apply( o.ctx, args);
             }, 0);
           });
          _type += '/';
        }

        sType = args = aType = null;
        return true;
      }

      return _oPublic;
  };


  win.PubSub = Pubsub();

})(window)
