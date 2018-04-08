<?php

/**
 * Enqueue block editor only JavaScript and CSS
 */
function jsforwpblocks_editor_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $blockPath = '../assets/js/editor.blocks.js';
    $editorStylePath = '../assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'jsforwp-blocks-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue optional editor only styles
    wp_enqueue_style(
        'jsforwp-blocks-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}
// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', 'jsforwpblocks_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function jsforwpblocks_scripts()
{
    // Make paths variables so we don't write em twice ;)
    $blockPath = '../assets/js/frontend.blocks.js';
    $prismPath = '../assets/js/prism.js';
    $codemirrorPath = '../assets/js/codemirror/lib/codemirror.js';
    $codemirrorHTMLPath = '../assets/js/codemirror/mode/htmlmixed/htmlmixed.js';
    $codemirrorJSPath = '../assets/js/codemirror/mode/javascript/javascript.js';
    $testPath = '../assets/js/test.js';
    $stylePath = '../assets/css/blocks.style.css';
    $prismStylePath = '../assets/css/prism.css';
    $codemirrorStylePath = '../assets/css/codemirror.css';

    if( !is_admin() ) {
        // Enqueue the bundled block JS file
        wp_enqueue_script(
            'jsforwp-blocks-frontend',
            plugins_url( $blockPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $blockPath )
        );
        // Enqueue prism js on front end
        wp_enqueue_script(
            'jsforwp-prism',
            plugins_url( $prismPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $prismPath )
        );
        // Enqueue codemirror js on front end
        wp_enqueue_script(
            'jsforwp-codemirror',
            plugins_url( $codemirrorPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorPath )
        );

        // Enqueue codemirror html js on front end
        wp_enqueue_script(
            'jsforwp-codemirrorHTML',
            plugins_url( $codemirrorHTMLPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorHTMLPath )
        );

        // Enqueue codemirror html js on front end
        wp_enqueue_script(
            'jsforwp-codemirrorJS',
            plugins_url( $codemirrorJSPath, __FILE__ ),
            [],
            filemtime( plugin_dir_path(__FILE__) . $codemirrorJSPath )
        );
        // Enqueue test js on front end
        wp_enqueue_script(
            'jsforwp-test',
            plugins_url( $testPath, __FILE__ ),
            [ 'jquery' ],
            filemtime( plugin_dir_path(__FILE__) . $testPath )
        );
    }

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'jsforwp-blocks',
        plugins_url($stylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );

    // Enqueue prism styles on front and backend
    wp_enqueue_style(
        'jsforwp-prism',
        plugins_url($prismStylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime(plugin_dir_path(__FILE__) . $prismStylePath )
    );

    // Enqueue codemirror styles on front and backend
    if( !is_admin() ) {
        wp_enqueue_style(
            'jsforwp-codemirror-styles',
            plugins_url($codemirrorStylePath, __FILE__),
            [ 'wp-blocks' ],
            filemtime(plugin_dir_path(__FILE__) . $codemirrorStylePath )
        );
    }


}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'jsforwpblocks_scripts');
