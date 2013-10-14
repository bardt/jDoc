module.exports = function () {
    return {
        rtf: {
            reader: {
                options: {
                    namespace: 'jDoc.engines.RTF.prototype',
                    mainFilePath: 'src/engines/RTF/main.js',
                    complexProperties: [
                        {
                            name: "_controlWordsParsers",
                            src: ['src/engines/RTF/reader/private/_controlWordsParsers/**/*.js']
                        }
                    ]
                },
                src: [
                    'src/engines/RTF/reader/private/*.js',
                    'src/engines/RTF/reader/public/*.js'
                ],
                dest: 'src/build/rtf.js'
            },
            writer: {}
        }
    };
};