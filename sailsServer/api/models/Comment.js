/**
 * Comment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'comments',
    attributes: {
        user_id: {
            type: 'STRING',
            required: true
        },
        item_id: {
            type: 'STRING',
            required: true
        },
        content: {
            type: 'TEXT',
            required: true
        },
    }
};
