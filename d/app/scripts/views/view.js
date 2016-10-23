var $ = require('jquery');
var Backbone = require('backbone');
var urlTemplate = require('../../templates/url_template.hbs');

var BookmarkAddForm = Backbone.View.extend({
  events: {
    'click .submit': 'add'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
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
  tagName: 'div',
  className: 'list-group-item',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderBookmarkItem);
  },
  render: function(){
    return this;
  },
  renderBookmarkItem: function(bookmark){
    var bookmarkItem = new BookmarkItemView({model: bookmark});
    this.$el.append(bookmarkItem.render().el);
    // console.log('hello');
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'div',
  template: urlTemplate,
  initialize: function(){
    this.listenTo(this.model, 'changed', this.render);
    // console.log(this.model);
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  BookmarkList: BookmarkList,
  BookmarkAddForm: BookmarkAddForm
};
