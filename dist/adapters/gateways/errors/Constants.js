"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorType = exports.errorName = void 0;
exports.errorName = {
    UNAUTHORIZED: "UNAUTHORIZED",
};
exports.errorType = {
    UNAUTHORIZED: {
        message: "Authentication is needed to get requested response.",
        statusCode: 401,
    },
};
