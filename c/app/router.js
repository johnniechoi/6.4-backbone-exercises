var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/view');
var model = require('./models/model');

// var postCollection = new model.PostCollection();
//
//     console.log(postCollection);
//
// var addList = new view.titleList({collection: postCollection});
// $('#titleList').html(addList.render().el);

var blogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id': 'getPost'
  },

  initialize: function(){
    this.collection = new model.PostCollection();
    this.collection.fetch();
  },

  index: function() {
    var addList = new view.titleList({collection: this.collection});
    $('#titleList').html(addList.el);
    // console.log(this.collection.models
  },

  getPost: function(id){
    var self = this;
    var post = this.collection.get(id);
    // console.log(post);
    if(!post){
      this.collection.fetch().then(function(){
        self.getPost(id);
    });
    // return;
    }

    var blogPostDetail = new view.PostDetail({model: post});
    $('#postList').html(blogPostDetail.render().el);

    // console.log(post);
  }

});

var router = new blogRouter();


// postCollection.fetch();

module.export = {
  blogRouter: blogRouter
}
