"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryFormat = queryFormat;
function queryFormat(query) {
    let queryJson = {};
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete query[el]);
    if (query) {
        let queryObject = JSON.stringify(query);
        queryObject = queryObject.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        queryJson = JSON.parse(queryObject);
    }
    return queryJson;
}
//# sourceMappingURL=formatQuery.js.map