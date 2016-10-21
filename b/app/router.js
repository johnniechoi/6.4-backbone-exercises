var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/view');
var model = require('./models/model');


var contactCollection = new model.ContactCollection();
console.log(contactCollection);

var addContact = new view.AddContact({collection: contactCollection});
$('.app').html(addContact.render().el);

console.log(addContact);

// contactCollection.fetch().then(function(){
//   contactCollection.each(function(model){
//     model.destroy();
//   });

contactCollection.fetch();
// contactCollection.fetch().then(function(){
//   contactCollection.get('58091cfbc6b534000308d3f6').destroy();
// });
