<?php
/**
 * Plugin Name: Gutenberg - Code block
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Enqueue JS and CSS
include( plugin_dir_path( __FILE__ ) . 'lib/enqueue-scripts.php');
// Register meta boxes
include( plugin_dir_path( __FILE__ ) . 'lib/meta-boxes.php');
// Block Templates
include( plugin_dir_path( __FILE__ ) . 'lib/block-templates.php');

// Dynamic Blocks
include( plugin_dir_path( __FILE__ ) . 'blocks/12-dynamic/index.php');
