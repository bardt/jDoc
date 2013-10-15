/**
 *
 * @param params
 * @returns {*}
 * @private
 */
jDoc.engines.RTF.prototype._initImage = function (params) {
    params = params || {};

    var data = params.data,
        image = {
            options: {
                isImage: true
            },
            properties: data && data.properties ? jDoc.clone(data.properties) : {},
            attributes: data && data.attributes ? jDoc.clone(data.attributes) : {},
            css: data && data.css ? jDoc.clone(data.css) : {},
            dimensionCSSRules: data && data.dimensionCSSRules ? jDoc.clone(data.dimensionCSSRules) : {}
        };

    return image;
};