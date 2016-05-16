<?php

$settings = array(
  'driver'    => 'mysql',
  'host'      => '127.0.0.1',
  'database'  => 'abril',
  'username'  => 'root',
  'password'  => 'shell',
  'charset'   => 'utf8',
  'collation' => 'utf8_unicode_ci',
  'prefix'    => ''
);

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection( $settings );
$capsule->bootEloquent();
