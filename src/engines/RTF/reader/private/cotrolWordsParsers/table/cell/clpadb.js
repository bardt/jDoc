jDoc.Engines.RTF.prototype.controlWordsParsers.clpadb = function () {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param;

    parseParams.styles.cells.dimensionCSSRules.paddingBottom = {
        value: param / 20,
        units: "pt"
    };

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};