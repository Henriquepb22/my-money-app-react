const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/;

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({
        errors
    });
};

module.exports = {
    async login(req, res, next) {
        const email = req.body.email || "";
        const password = req.body.password || "";

        User.findOne({ email }, (err, user) => {
            if (err) {
                return sendErrorsFromDB(res, err);
            } else if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ ...user }, process.env.SECRET, {
                    expiresIn: "1 day"
                });
                const { name, email } = user;
                res.json({
                    name,
                    email,
                    token
                });
            } else {
                return res.status(400).send({
                    errors: ["Usuário/Senha inválidos"]
                });
            }
        });
    },

    async validateToken(req, res, next) {
        const token = req.body.token || "";

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    valid: err
                });
            } else {
                next();
            }
        });
    },

    async signup(req, res, next) {
        const name = req.body.name || "";
        const email = req.body.email || "";
        const password = req.body.password || "";
        const confirmPassword = req.body.confirmPassword || "";

        if (!email.match(emailRegex)) {
            return res.status(400).send({
                errors: ["O e-mail informado está inválido."]
            });
        }
        if (!password.match(passwordRegex)) {
            return res.status(400).send({
                errors: [
                    "Senha precisa ter uma letra maiúscula, uma letra minúscula, um número e um caractere especial(@#$%) e tamanho entre 6-12."
                ]
            });
        }

        const salt = bcrypt.genSaltSync();
        const passwordHash = bcrypt.hashSync(password, salt);
        if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
            return res.status(400).send({
                errors: ["Senhas não conferem."]
            });
        }

        await User.findOne({ email }, (err, user) => {
            if (err) {
                return sendErrorsFromDB(res, err);
            } else if (user) {
                return res.status(400).send({
                    errors: ["Usuário já cadastrado."]
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password: passwordHash
                });
                newUser.save((err, user) => {
                    if (err) {
                        return sendErrorsFromDB(res, err);
                    } else {
                        const token = jwt.sign(
                            { ...user },
                            process.env.SECRET,
                            {
                                expiresIn: "1 day"
                            }
                        );
                        return res.json({
                            name,
                            email,
                            token
                        });
                    }
                });
            }
        });
    }
};
