const {environment} = require('@rails/webpacker')
//const customConfig = require('./custom')
const webpack = require('webpack')

environment.plugins.append('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        bootstrapmaterialdesign:'bootstrap-material-design/dist/js/bootstrap-material-design'
       
    })
)
//environment.config.merge(customConfig)
module.exports = environment
