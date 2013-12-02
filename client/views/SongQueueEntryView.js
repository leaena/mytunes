// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<span>(<%= artist %>)</span><span><%= title %></span>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
