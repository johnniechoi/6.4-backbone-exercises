var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/view');
var model = require('./models/model');


var contactCollection = new model.ContactCollection();

var addContact = new view.AddContact({collection: contactCollection});
$('.app').html(addContact.render().el);



// contactCollection.fetch().then(function(){
//   contactCollection.each(function(model){
//     model.destroy();
//   });

contactCollection.fetch().then(function(){
  // contactCollection.get('58091cfbc6b534000308d3f6').destroy();

});
