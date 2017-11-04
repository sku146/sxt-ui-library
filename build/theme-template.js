/* eslint-disable import/no-extraneous-dependencies */
import sysPath from 'path';
import RewriteImportPlugin from 'less-plugin-rewrite-import';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const ROOT_DIR = sysPath.resolve(`${process.cwd()}`);
const NODE_MODULES_DIR = sysPath.resolve(`${process.cwd()}`, 'node_modules');

export default ({
  entryPoint,
  outputPoint,
  themePoint,
  themeVariables,
  name,
}) => ({
  entry: entryPoint,
  output: {
    path: sysPath.resolve(`${process.cwd()}`, `${outputPoint}/${name}`),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [{
      test: /\.(less|config)$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            paths: [ROOT_DIR, NODE_MODULES_DIR],
            plugins: [
              new RewriteImportPlugin({
                paths: {
                  '../../theme.config': sysPath.resolve(`${process.cwd()}`, themePoint),
                },
              }),
            ],
          },
        }],
        fallback: 'style-loader',
      }),
    }, {
      test: /\.(eot|svg|ttf|TTF|woff|woff2)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]?[hash]',
        },
      }],
    }, {
      test: /\.(gif|jpg|jpe?g|png)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]?[hash]',
        },
      }],
    }],
  },
  plugins: [
    // this handles the bundled .css output file
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: sysPath.resolve(`${process.cwd()}`, themeVariables), to: 'variables.less',
      },
    ]),
  ],
});
