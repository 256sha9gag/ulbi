import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import {  BuildPaths } from './types/config';

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];
}