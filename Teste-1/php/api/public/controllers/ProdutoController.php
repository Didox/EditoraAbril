<?php

require_once _APP.'/models/Mapping.php';

class ProdutoController
{
    public function __construct()
    {
    }

    public function getProdutos()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $produtos = Produto::all();
            if (empty($produtos)) {
                $app->response()->setStatus(404);
            }
            echo json_encode(array('produtos' => $produtos));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function getProduto($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $app->response()->setStatus(200);
            $produto = Produto::find($id);

            if ($produto == null) {
                $app->response()->setStatus(404);
            }

            echo json_encode(array('produto' => $produto));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function addProduto()
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $new = new Produto();
            $new->nome = $form->nome;
            $new->descricao = $form->descricao;
            $new->preco = $form->preco;
            $new->save();

            $app->response()->setStatus(201);
            echo json_encode(array('produto' => $new));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function delProduto($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');

        try {
            $produto = Produto::find($id);
            $produto->delete();

            $app->response->setStatus(204);
            echo json_encode(array('produto' => $produto));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }

    public function updateProduto($id)
    {
        $app = \Slim\Slim::getInstance();
        $app->response()->headers->set('Content-Type', 'application/json');
        $request = $app->request();

        try {
            $form = json_decode($request->getBody());

            $produto = Produto::find($id);
            $produto->nome = $form->nome;
            $produto->descricao = $form->descricao;
            $produto->preco = $form->preco;
            $produto->save();

            $app->response()->setStatus(201);
            echo json_encode(array('produto' => $produto));
        } catch (Exception $e) {
            $app->response()->setStatus(400);
            echo json_encode(array('exception' => $e));
        }
    }
}
