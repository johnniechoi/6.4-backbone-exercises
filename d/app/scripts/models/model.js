var $ = require('jquery');
var Backbone = require('backbone');

var Bookmark = Backbone.Model.extend({
  idAttribute: '_id'
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/legitblog'
});

module.exports = {
  Bookmark: Bookmark,
  BookmarkCollection: BookmarkCollection
}
