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
      function _on( type, cb) {
           _aEvent['_on' + type] = _aEvent['_on' + type] || [];
           _aEvent['_on' + type].push(cb);

           return (function( i){
             return {
               off : function(){
                 if( _aEvent['_on' + type][i]){
                    delete _aEvent['_on' + type][i];
                  }
               }
             }
           })( _aEvent['_on' + type].length - 1);
       }


      /**
       * [emit description]
       * @param  {[type]} type [description]
       * @param  {[type]} args [description]
       * @return {[type]}      [description]
       */
      function _emit(type, args) {

        var  aType = type.split("."), i = 0, iLen = aType.length, _type = '';
        for(; i < iLen; i++){
          _type += aType[ i ];
          _aEvent['_on' + _type] && _aEvent['_on' + _type].forEach( (cb) => { cb && cb(args) });
          _type += '.';
        }

        return true;
      }

      return _oPublic;
  };


  win.PubSub = Pubsub();

})(window)
