var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./models/model');
var view = require('./view/blogview');

var blogCollection = new model.BlogCollection();

var postBlogToServer = new view.blogServerPost({collection: blogCollection}) ;
postBlogToServer.setElement($('.app')[0]);
