/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
    link: [
        /** <link> tags for favicons **/
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/p.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/p.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/p.png' },

        /** <link> tags for a Web App Manifest **/
        // { rel: 'manifest', href: '/assets/manifest.json' },
        { rel: 'stylesheet', href: 'assets/plugins/font-awesome-4.6.1/css/font-awesome.css' }
    ],
    meta: [
        { name: 'msapplication-TileColor', content: '#00bcd4' },
        { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
        { name: 'theme-color', content: '#00bcd4' }
    ]
};