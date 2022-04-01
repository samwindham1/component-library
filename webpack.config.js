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
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@theme': path.resolve(__dirname, 'src/theme/')
        }
    },
    externals: ['react', 'react-dom', 'styled-components']
};
