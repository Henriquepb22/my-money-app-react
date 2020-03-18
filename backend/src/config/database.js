const mongoose = require("mongoose");

// Conectando ao banco de dados
module.exports = mongoose.connect("mongodb://localhost:27017/mymoney", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Alterando as mensagens padrão de erro do mongoose
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'.";
