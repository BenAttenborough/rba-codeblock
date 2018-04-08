<?php
/**
 * Plugin Name: Gutenberg - Code block
 * Plugin URI: https://github.com/BenAttenborough/rba-codeblock
 * Description: Gutenberg block for displaying syntax highlighted snippets to blog posts.
 * Text Domain: rba-codeblock
 * Domain Path: /languages
 * Author: Ben Attenborough
 * Author URI: https://twitter.com/webdesignerben
 * Version: 0.1.0
 * License: ISC
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package rba-codeblock
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Enqueue JS and CSS
include( plugin_dir_path( __FILE__ ) . 'lib/enqueue-scripts.php');
// Register meta boxes
include( plugin_dir_path( __FILE__ ) . 'lib/meta-boxes.php');
// Block Templates
include( plugin_dir_path( __FILE__ ) . 'lib/block-templates.php');