<?php

namespace App\Repositories\Interfaces;

use App\Entities\User;

interface IUserRepository
{
    public function __construct();

    public function get();

    public function getById($id);

    public function insert(User $user);

    public function delete($id);

}