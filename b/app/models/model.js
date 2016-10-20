var $ = require('jquery');
var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  idAttribute: '_id'
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/legitblog'
});

module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
}
