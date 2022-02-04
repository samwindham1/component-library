const path = require('path');

// Transform styled-components
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'es5',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: 'component-library',
            type: 'umd'
        },
        chunkFormat: 'module'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: ['react', 'react-dom', 'styled-components']
};
