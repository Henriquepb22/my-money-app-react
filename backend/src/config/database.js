const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/mymoney', {
  useNewUrlParser: true
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";