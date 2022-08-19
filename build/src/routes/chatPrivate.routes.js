"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/chatPrivate')
    .get((req, res) => {
    return res.sendFile('/home/data/programacion/node/sockets/firstProject/cli/roomPrivate.html');
})
    .post(() => {
});
exports.default = router;
