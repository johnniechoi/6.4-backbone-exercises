var $ = require('jquery');
var Backbone = require('backbone');


var blogServerPost = Backbone.View.extend({
  events: {
    'click .submit': 'addBlog'
  },
  addBlog: function(e){
    e.preventDefault();

  console.log('is this working?');
    var title = $('#titleInput').val();
    var blogPost = $('#postInput').val();

    this.collection.create({
      title: title,
      blogPost: blogPost
    });

  },
});


module.exports = {
  blogServerPost: blogServerPost
}
