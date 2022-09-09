"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
}
exports.NotFoundError = NotFoundError;
NotFoundError.model = (modelName, fieldName, value) => new NotFoundError(`${modelName} is not found. ${fieldName}: ${value}`);
