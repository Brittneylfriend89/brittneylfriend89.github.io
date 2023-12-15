<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_configs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('site_title');
            $table->text('about_company');
            $table->text('address');
            $table->text('email');
            $table->text('phone');
            $table->string('facebook');
            $table->string('twitter');
            $table->string('linkedin');
            $table->string('instagram');
            $table->string('logo')->nullable();
            $table->string('favicon')->nullable();
            $table->string('location')->nullable();
            $table->timestamps();
        });

        DB::table('site_configs')->insert([
            'site_title' => "Ready Book",
            'address' =>'103, Dattani Trade Centre, Chandavarkar Road, Borivali (West), Gujarat, 400092',
            'email' =>'booking@gmail.com',
            'phone' => '+19876543210',
            'facebook' =>'https://www.facebook.com/',
            'twitter' =>'https://www.twitter.com/',
            'linkedin' =>'https://in.linkedin.com/',
            'instagram' =>'https://www.instagram.com/',
            'location' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264374652!2d72.75225623680046!3d21.15934583219656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1670587319456!5m2!1sen!2sin',
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s')
         ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_configs');
        
    }
}
