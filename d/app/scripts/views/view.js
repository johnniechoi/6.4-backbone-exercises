var $ = require('jquery');
var Backbone = require('backbone');
var urlTemplate = require('../../templates/url_template.hbs')

var BookmarkAddForm = Backbone.View.extend({
  events: {
    'submit': 'add'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
    console.log('hello');
  },
  add: function(e){
    e.preventDefault();

    var newBookmark = {
      url: $('#urlInput').val(),
      title: $('#titleInput').val(),
      tag: $('#tagInput').val()
    };

    this.collection.create(newBookmark);
  }
});

var BookmarkList = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group-item',
  initialize: function(){
    this.listenTo(this.model, 'changed', this.render)
  },
  render: function(url){
    var context = this.model.toJSON();
    this.$el.append(this.template(context).el);
    return this;
  }
});

module.exports = {
  BookmarkList: BookmarkList,
  BookmarkAddForm: BookmarkAddForm
}
