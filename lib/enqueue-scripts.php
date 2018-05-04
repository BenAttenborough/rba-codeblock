<?php

/**
 * Enqueue block editor only JavaScript and CSS
 */
function rba_code_block_editor_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $blockPath = '../assets/js/editor.blocks.js';
    $editorStylePath = '../assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'rba-code-block-blocks-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue optional editor only styles
    wp_enqueue_style(
        'rba-code-block-blocks-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}
// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', 'rba_code_block_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function rba_code_block_scripts()
{
    $defaultTheme = 'material.css';

    // Make paths variables so we don't write em twice ;)
    $blockPath = '../assets/js/frontend.blocks.js';
    $codemirrorPath = '../assets/js/codemirror/lib/codemirror.js';
    $codemirrorXMLPath = '../assets/js/codemirror/mode/xml/xml.js';
    $codemirrorHTMLPath = '../assets/js/codemirror/mode/htmlmixed/htmlmixed.js';
    $codemirrorJSPath = '../assets/js/codemirror/mode/javascript/javascript.js';
    $codemirrorCSSPath = '../assets/js/codemirror/mode/css/css.js';
    $appPath = '../assets/js/app.js';
    $stylePath = '../assets/css/blocks.style.css';
    $codemirrorStylePath = '../assets/css/codemirror.css';
    $codemirrorDefaultThemeStylePath = '../assets/css/theme/' . $defaultTheme;

    if( !is_admin() ) {
        // Enqueue the bundled block JS file
        wp_enqueue_script(
            'rba-code-block-blocks-frontend',
            plugins_url( $blockPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $blockPath )
        );

        // Enqueue codemirror js on front end
        wp_enqueue_script(
            'rba-code-block-codemirror',
            plugins_url( $codemirrorPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorPath )
        );

        // Enqueue codemirror html mode on front end
        wp_enqueue_script(
            'rba-code-block-codemirrorXML',
            plugins_url( $codemirrorXMLPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorXMLPath )
        );
        // Enqueue codemirror html mode on front end
        wp_enqueue_script(
            'rba-code-block-codemirrorHTML',
            plugins_url( $codemirrorHTMLPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorHTMLPath )
        );

        // Enqueue codemirror js mode on front end
        wp_enqueue_script(
            'rba-code-block-codemirrorJS',
            plugins_url( $codemirrorJSPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorJSPath )
        );

        // Enqueue codemirror css mode on front end
        wp_enqueue_script(
            'rba-code-block-codemirrorCSS',
            plugins_url( $codemirrorCSSPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorCSSPath )
        );
        // Enqueue app js on front end
        wp_enqueue_script(
            'rba-code-block-app',
            plugins_url( $appPath, __FILE__ ),
            [ 'jquery' ],
            filemtime( plugin_dir_path(__FILE__) . $appPath )
        );
    }

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'rba-code-block-blocks',
        plugins_url($stylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );

    // Enqueue codemirror styles on front and backend
    if( !is_admin() ) {
        wp_enqueue_style(
            'rba-code-block-codemirror-styles',
            plugins_url($codemirrorStylePath, __FILE__),
            [ 'wp-blocks' ],
            filemtime(plugin_dir_path(__FILE__) . $codemirrorStylePath )
        );
        wp_enqueue_style(
            'rba-code-block-codemirror-eclipse-styles',
            plugins_url($codemirrorDefaultThemeStylePath, __FILE__),
            [ 'wp-blocks' ],
            filemtime(plugin_dir_path(__FILE__) . $codemirrorDefaultThemeStylePath )
        );
    }


}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'rba_code_block_scripts');
