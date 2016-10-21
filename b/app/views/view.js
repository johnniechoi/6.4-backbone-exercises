var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../templates/add_form.hbs');


var AddContact = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addForm'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  addForm: function(e){
    console.log('addForm called');
    e.preventDefault();

    var firstName = $('#firstInput').val();
    var lastName = $('#lastInput').val();
    var address = $('#addressInput').val();
    var phone = $('#phoneInput').val();

    this.collection.create({
      name: firstName,
      lastName: lastName,
      address: address,
      phone: phone
    });

    // console.log(this.collection.fetch());
  }
});

module.exports = {
  AddContact: AddContact
}
