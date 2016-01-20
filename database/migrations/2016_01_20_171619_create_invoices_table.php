<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('customer_id')->unsigned();
            $table->integer('sale_user_id')->unsigned();
            $table->integer('invoice_state')->unsigned();
            $table->boolean('invoice_status');
            $table->float('payment_total');
            $table->float('payment_discount');
            $table->float('payment_net');
            $table->integer('payment_type')->unsigned();
            $table->boolean('payment_status');
            $table->integer('transfer_id')->unsigned();
            $table->boolean('buy_at_store');
            $table->integer('ship_address_id')->unsigned();
            $table->text('note');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
