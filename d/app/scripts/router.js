var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/view');
var model = require('./models/model');


var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index',
    'post/': 'getBookmark'
  },
  initialize: function(){
    this.collection = new model.BookmarkCollection();
    this.collection.fetch();
    // console.log(this.collection);
  },
  index: function(){
    var bookmarkListing = new view.BookmarkList({collection: this.collection});
    $('.app').append(bookmarkListing.render().el)
  // console.log('collection:', this.collection);
}
});

var router = new AppRouter();

module.exports = {
  router: router
};
