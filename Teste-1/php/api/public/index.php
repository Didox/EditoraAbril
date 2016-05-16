<?php

define('_APP', dirname(__FILE__));

require '../vendor/autoload.php';

require_once _APP.'/config/Database.php';
require_once _APP.'/controllers/ClienteController.php';
require_once _APP.'/controllers/ProdutoController.php';
require_once _APP.'/controllers/PedidoController.php';

$app = new \Slim\Slim();
$app->add(new \CorsSlim\CorsSlim());

$app->get('/', function () use ($app) {
    $app->redirect('/app/');
});

$app->get('/clientes', 'ClienteController:getClientes');
$app->get('/clientes/:id', 'ClienteController:getCliente');
$app->post('/clientes', 'ClienteController:addCliente');
$app->delete('/clientes/:id', 'ClienteController:delCliente');
$app->put('/clientes/:id', 'ClienteController:updateCliente');

$app->get('/produtos', 'ProdutoController:getProdutos');
$app->get('/produtos/:id', 'ProdutoController:getProduto');
$app->post('/produtos', 'ProdutoController:addProduto');
$app->delete('/produtos/:id', 'ProdutoController:delProduto');
$app->put('/produtos/:id', 'ProdutoController:updateProduto');

$app->get('/pedidos', 'PedidoController:getPedidos');
$app->get('/pedidos/:idCliente/:idProduto', 'PedidoController:getPedido');
$app->post('/pedidos', 'PedidoController:addPedido');
$app->delete('/pedidos/:id', 'PedidoController:delPedido');
$app->put('/pedidos', 'PedidoController:updatePedido');

$app->run();
