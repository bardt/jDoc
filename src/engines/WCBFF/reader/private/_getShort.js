/**
 *
 * @param options
 * @private
 */
jDoc.engines.WCBFF.prototype._getShort = function (options) {
    this._getSomeBytes({
        data: options.data,
        from: options.from,
        count: 2,
        fileBinaryReadData: options.fileBinaryReadData,
        success: options.success
    });
};