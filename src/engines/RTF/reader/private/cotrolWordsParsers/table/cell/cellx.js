jDoc.Engines.RTF.prototype.controlWordsParsers.cellx = function () {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        count,
        param = options.param,
        currentRowIndex,
        table = parseParams.table,
        row = table ? table.body.rows[table.body.rows.length - 1] : null;

    row = row || this._initRow();

    table = this._checkTable({
        table: table,
        row: row,
        parseParams: parseParams,
        parentElementsList: page.elements,
        parentElementsIndex: parseParams.currentElementIndex,
        data: parseParams.currentTextElementParent
    });

    count = table.body.rows.length;
    currentRowIndex = count ? count - 1 : 0;

    table.options.cellsWidth[currentRowIndex] = table.options.cellsWidth[currentRowIndex] || [];
    table.options.cellsWidth[currentRowIndex].push({
        value: param / 20,
        units: "pt"
    });

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};