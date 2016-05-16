<?php

require_once _APP.'/models/Mapping.php';

class ClienteController
{
    public function __construct()
    {
    }

    public function getClientes()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $clientes = Cliente::with('Pedidos')->get();
            if (empty($clientes)) {
                $app->response()->setStatus(404);
            }
            echo json_encode(array('clientes' => $clientes));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function getCliente($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $app->response()->setStatus(200);
            $cliente = Cliente::with('Pedidos')->find($id);

            if ($cliente == null) {
                $app->response()->setStatus(404);
            }

            echo json_encode(array('cliente' => $cliente));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function addCliente()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $new = new Cliente();
            $new->nome = $form->nome;
            $new->email = $form->email;
            $new->telefone = $form->telefone;
            $new->save();

            $app->response()->setStatus(201);
            echo json_encode(array('cliente' => $new));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function delCliente($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $cliente = Cliente::find($id);
            $cliente->delete();

            $app->response->setStatus(204);
            echo json_encode(array('cliente' => $cliente));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function updateCliente($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $cliente = Cliente::find($id);
            $cliente->nome = $form->nome;
            $cliente->email = $form->email;
            $cliente->telefone = $form->telefone;
            $cliente->save();

            $app->response()->setStatus(201);
            echo json_encode(array('cliente' => $cliente));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }
}
