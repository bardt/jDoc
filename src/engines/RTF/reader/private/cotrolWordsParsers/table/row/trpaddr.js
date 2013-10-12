jDoc.Engines.RTF.prototype.controlWordsParsers.trpaddr = function () {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param;

    if (param > 0) {
        parseParams.styles.rows.dimensionCSSRules.paddingRight = {
            value: param / 20,
            units: "pt"
        };
    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};