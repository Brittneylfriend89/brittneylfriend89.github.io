<?php

namespace App\Observers;

use App\Entities\User;
use App\Helper\Helper;

class UserObserve
{
    /**
     * Handle the User "created" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {
        //
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        $remember_token = $user->remember_token;
        if(!empty($remember_token)) {
            $reset_password_link = route('password.reset', [$remember_token]);
            $data = array(
                'template' => '',
                'to' => $user->email,
                'name' => $user->first_name.' '.$user->last_name,
                'subject' => trans('Reset Password'),
                'reset_password_url' => $reset_password_link,
            );
            Helper::emailinformation($data);
        }
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the User "restored" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
