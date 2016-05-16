<?php

require_once _APP.'/models/Mapping.php';

class pedidoController
{
    public function __construct()
    {
    }

    public function getPedidos()
    {
        $app = \Slim\Slim::getInstance();

        try {
          $app->response()->headers->set('Content-Type', 'application/json');
            $Pedidos = Pedido::with('Cliente', 'Produto')->get();
            if (empty($Pedidos)) {
                $app->response()->setStatus(404);
            }
            echo json_encode(array('pedidos' => $Pedidos));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo $e;
        }
    }

    public function getpedido($idCliente, $idProduto)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $app->response()->setStatus(200);
            $pedido = Pedido::where('cliente_id', $idCliente)->where('id_produto', $idProduto);

            if ($pedido == null) {
                $app->response()->setStatus(404);
            }

            echo json_encode(array('pedido' => $pedido));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function addpedido()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $new = new Pedido();
            $new->cliente_id = $form->cliente_id;
            $new->produto_id = $form->produto_id;
            $new->save();

            $app->response()->setStatus(201);
            echo json_encode(array('pedido' => $new));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function delpedido($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $pedido = Pedido::find($id);
            $pedido->delete();

            $app->response->setStatus(204);
            echo json_encode(array('pedido' => $pedido));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function updatepedido()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $pedido = Pedido::where('cliente_id', $form->cliente_id)->where('id_produto', $form->id_produto);
            $pedido->cliente_id = $form->cliente_id;
            $pedido->produto_id = $form->produto_id;
            $pedido->save();

            $app->response()->setStatus(201);
            echo json_encode(array('pedido' => $pedido));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }
}
