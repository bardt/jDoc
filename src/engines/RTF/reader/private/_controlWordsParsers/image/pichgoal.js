jDoc.engines.RTF.prototype._controlWordsParsers.pichgoal = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param;

    if (param > 0) {
        parseParams.currentTextElementParent.dimensionCSSRules.height = {
            value: param / 20,
            units: "pt"
        };
    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};