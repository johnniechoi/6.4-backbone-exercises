var $ = require('jquery');
var Backbone = require('backbone');
var templateSide = require('../templates/template_side.hbs')
var templatePost = require('../templates/template_main_content.hbs')
var blogRouter = require('../router')

var titleList = Backbone.View.extend({
  tagName: 'div',
  template: templateSide,

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render)
  },
  render: function(blogPost){
  var context = blogPost.toJSON();
  this.$el.append(this.template(context));
  // console.log(this.collection.models);
  return this;
},
});

  var PostDetail = Backbone.View.extend({
    tagName: 'div',
    className: 'well',
    template: templatePost,
    initialize: function(){
      this.listenTo(this.model, 'changed', this.render)
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });


module.exports = {
  titleList: titleList,
  PostDetail: PostDetail
}
