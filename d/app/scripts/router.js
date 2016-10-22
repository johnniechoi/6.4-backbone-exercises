var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/view')
var model = require('./models/model')


var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index'
  },
  initialize: function(){
    this.collection = new model.BookmarkCollection();
    this.collection.fetch();
  },

  render: function(){
  console.log('hello');
  var bookmarkList = new view.BookmarkList();
  $('.app').html(bookmarkList.render().el);
  console.log('hello');
  return this;
}
});

var router = new AppRouter();

module.exports = {
  router: router
}
