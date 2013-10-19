jDoc.engines.RTF.prototype._controlWordsParsers.margrsxn = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param,
        i;

    if (!parseParams.pageData.dimensionCSSRules.paddingRight) {
        parseParams.pageData.dimensionCSSRules.paddingRight = {
            value: param / 20,
            units: "pt"
        };
        for (i = parseResult.pages.length - 1; i >= 0; i--) {
            parseResult.pages[i].dimensionCSSRules.paddingRight = parseParams.pageData.dimensionCSSRules.paddingRight;
        }

    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};