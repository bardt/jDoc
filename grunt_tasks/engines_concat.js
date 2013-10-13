module.exports = function () {
    return {
        wcbff: {
            reader: {
                options: {
                    namespace: 'jDoc.Engines.WCBFF.prototype',
                    mainFilePath: 'src/engines/WCBFF/main.js'
                },
                src: [
                    'src/engines/WCBFF/reader/private/*.js',
                    'src/engines/WCBFF/reader/public/*.js'
                ],
                dest: 'src/build/wcbff.js'
            },
            writer: {}
        }
    };
};