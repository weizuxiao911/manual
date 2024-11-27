# Less style module

## Config

```bash

# install less && less-loader
npm i less less-loader -S

# webpack config
npm run eject

# modify `config/webpack.config.js`, 

# First, insert less regex after sass, Line 74
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// less
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

# Then, set loader, after sass config, Line 565
{
    test: lessRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 3,
            sourceMap: isEnvProduction
                ? shouldUseSourceMap
                : isEnvDevelopment,
            modules: {
                mode: 'icss',
            },
        },
        'less-loader'
    ),
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 3,
            sourceMap: isEnvProduction
                ? shouldUseSourceMap
                : isEnvDevelopment,
            modules: {
                mode: 'local',
                getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        'less-loader'
    ),
},

```


## Usage

```bash

# rename index.css to index.less

# modify `import './index.css' to './index.less'`
import './index.less';

# start
npm start

```
