/**
 *
 * @param params
 * @returns {*}
 * @private
 */
jDoc.Engines.OXML.prototype._getMediaFromRelation = function (params) {
    var media,
        relation = this._getRelation(params);

    if (relation && params.documentData.media && params.documentData.media["word/" + relation.target]) {
        media = params.documentData.media["word/" + relation.target];
    }

    return media;
};