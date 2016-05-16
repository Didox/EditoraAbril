<?php

class Cliente extends Illuminate\Database\Eloquent\Model
{
    protected $table = 'cliente';
    public $timestamps = false;

    public function Pedidos()
    {
        return $this->hasMany('Pedido');
    }
}

class Produto extends Illuminate\Database\Eloquent\Model
{
    protected $table = 'produto';
    public $timestamps = false;

    public function Pedidos()
    {
        return $this->hasMany('Pedido');
    }
}

class Pedido extends Illuminate\Database\Eloquent\Model
{
    protected $table = 'pedido';
    public $timestamps = false;

    public function Cliente()
    {
        return $this->belongsTo('Cliente');
    }

    public function Produto()
    {
        return $this->belongsTo('Produto');
    }
}
