<?php

define('DOING_AJAX', false);
define('DS', DIRECTORY_SEPARATOR);

require_once( dirname(__FILE__) . DS . '..' . DS . '..' . DS . '..' . DS . 'wp-load.php' );
if (!isset($_REQUEST['action']) || trim($_REQUEST['action']) == '') {
    die('-1');
}
@header('Content-Type: text/html; charset=utf8');
include_once( dirname(__FILE__) . DS . 'mailigen-widget.php' );
send_nosniff_header();

if (has_action('wp_ajax_' . $_REQUEST['action'])) {
    do_action('wp_ajax_' . $_REQUEST['action']);
    exit;
}
status_header(404);
?>