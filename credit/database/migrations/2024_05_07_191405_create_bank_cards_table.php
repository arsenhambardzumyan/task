<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('bank_cards', function (Blueprint $table) {
         $table->id();
         $table->string('number', 16);
         $table->string('expiry_date_month',10);
         $table->string('expiry_date_year',10);
         $table->string('cvv', 3);
         $table->timestamps();
     });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bank_cards');
    }
};
