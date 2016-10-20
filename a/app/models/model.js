// console.log('from models.js: ', 'holla');

var $ = require('jquery');
var Backbone = require('backbone');

var Blog = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/legitblog'
});


module.exports = {
  Blog: Blog,
  BlogCollection: BlogCollection,
}
