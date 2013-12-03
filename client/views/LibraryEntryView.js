// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<button class="up"><img width="20" src="http://i.imgur.com/nFn8U6a.png"></img></button><button class="down"><img width="20" src="http://www.3h.ca/blog/wp-content/uploads/2013/01/downvote-copy.png"></img></button><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click td': function() {
      this.model.enqueue();
    },
    'click .up': function() {
      this.model.upvote();
    },
    'click .down': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes)).append('<span> Votes: ' + this.model.vote + '</span>');
  }

});
