var $ = require('jquery');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute: '_id'
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/legitblog'
});

module.exports = {
  Post: Post,
  PostCollection: PostCollection
}
