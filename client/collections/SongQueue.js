// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({
  initialize: function(){
    this.on('add', function(song){
      if(this.length < 2){
        this.playFirst(song);
      }
    });
  },

  playFirst: function(){

  }
});
