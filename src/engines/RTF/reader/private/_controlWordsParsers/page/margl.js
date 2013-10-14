jDoc.engines.RTF.prototype._controlWordsParsers.margl = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param,
        i;

    parseParams.pageData.dimensionCSSRules.paddingLeft = {
        value: param / 20,
        units: "pt"
    };
    for (i = parseResult.pages.length - 1; i >= 0; i--) {
        parseResult.pages[i].dimensionCSSRules.paddingLeft = parseParams.pageData.dimensionCSSRules.paddingLeft;
    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};