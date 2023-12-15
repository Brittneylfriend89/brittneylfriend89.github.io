<?php



/*

|--------------------------------------------------------------------------

| Web Routes

|--------------------------------------------------------------------------

|

| Here is where you can register web routes for your application. These

| routes are loaded by the RouteServiceProvider within a group which

| contains the "web" middleware group. Now create something great!

|

*/



use App\Entities\User;

use App\Entities\Payment;

use App\Entities\Setting;

use App\Entities\Employee;

use App\Entities\Appointment;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;

// Route::any('/','Front\AppointmentController@landing')->name('landing');

Route::get('/', function () {
    $categories = \App\Entities\Category::with('services')->get();

    $services = \App\Entities\Service::with('categories')->paginate(9);

    $employees = \App\Entities\Employee::where('role_id',3)->where('status',1)->paginate(6);

    if(Auth::check()) {

        $latestNotifications = DB::table('notification')->where('user_id',Auth::user()->id)->limit(3)->orderBy('id','desc')->get();

        $site = DB::table('site_configs')->first();

        $custom = DB::table('settings')->first();

        return view('theme.home',compact('latestNotifications','site','custom','categories','services','employees'))->with(['pagetitle' => 'landing']);

    }

    $site = DB::table('site_configs')->first();

    $custom = DB::table('settings')->first();

    return view('theme.home',compact('site','custom','categories','services','employees'))->with(['pagetitle' => 'landing']);

})->name('welcome');



Route::get('/home', function() {

    return view('theme.home');

})->name('theme');

/* all module route */

Route::middleware(['auth', 'xss'])->group(function () {

    Route::resource('users','UserController');

    Route::resource('categories','CategoryController');

    Route::resource('customers','CustomerController');

    Route::resource('employees','EmployeeController');

    Route::resource('services','ServiceController');

    Route::resource('working-hours','WorkingHourController');

    Route::resource('appointments','AppointmentController');

});



/* settings route */

Route::middleware(['xss', 'auth'])->group(function () {

    Route::get('setting','SettingController@index')->name('setting');

    Route::post('setting/update/{id}','SettingController@update')->name('setting.update');

    Route::get('setting/payment','SettingController@payment')->name('setting.payment');

    Route::get('site/setting','SettingController@site')->name('setting.site');

    Route::post('site/setting/update/{id}','SettingController@siteUpdate')->name('setting.siteUpdate');

    Route::any('employee/complete/register','EmployeeController@completeRegister')->name('completeRegister');

    Route::post('contact/admin','Front\ServiceController@contact')->name('contact.email');

    Route::get('setting/notification', 'SettingController@notificationSetting')->name('notificationSetting');

    Route::post('sms-notification/config/update','SettingController@smsConfigUpdate')->name('sms.notification.update');
});



/* payment route */

Route::middleware(['auth', 'xss'])->group(function () {

    Route::get('payment/list','PaymentController@index')->name('paymentlist');

    Route::get('payment/view/{id}','PaymentController@show')->name('paymentview');

    Route::any('pay/{id}','PaymentController@pay')->name('pay');

    Route::get('employee/payment/list','PaymentController@employeepayment')->name('employee-paymentlist');

    Route::get('services/{id}/employee','ServiceController@employee')->name('service.employee');

    Route::get('employee/{id}/appointment','EmployeeController@appointment')->name('employees.appointment');

    Route::post('appointments/emp','AppointmentController@emp')->name('emp');

    Route::post('appointment/payment/maximum-time-expire','Front\AppointmentController@paymentTimeExpire')->name('maximum.time.expire');

});





/* status route */

Route::middleware(['auth', 'xss'])->group(function () {

    Route::post('/employee/status','EmployeeController@status')->name('status');

    Route::post('employees/categoryservice','EmployeeController@categoryservice')->name('categoryservice');

    Route::patch('users/updatePassword/{id}','UserController@updatePassword')->name('updatePassword');

    Route::patch('users/social-profile/{id}','UserController@updateSocialProfile')->name('users.social');

    // Route::get('/calender', function(Request $request) {
        
    // });

    Route::delete('/remove/google/calendar/{id}', 'GoogleCalendarController@removegoogle')->name('removegoogle');
    // Route::get('/calendar', 'CalendarController@googleCalendarEventSync')->name('GoogleCalendarEventSync');
});

/* customer login route */

Route::prefix('customer')->middleware(['auth','xss'])->group(function () {

    Route::get('/appointment/{id}','AppointmentController@customerview')->middleware('auth')->name('customer-appointment');

    Route::post('/appointments','AppointmentController@customerAppointment')->middleware('auth')->name('customer.appointments');

    Route::get('/profile/{id}','UserController@profile')->middleware('auth')->name('customer-profile');

    Route::match(['get','post'],'/{id}/appointment','CustomerController@appointment')->middleware('auth')->name('customers.appointment');

    Route::get('/notification/{id?}','NotificationController@index')->middleware('auth')->name('notification');

    Route::any('/mark/notification','NotificationController@markNotification')->middleware('auth')->name('customer-notification');

});



Route::middleware(['auth', 'xss'])->group(function () {

    /* filter route */ 

    Route::any('payment/filter','PaymentController@filter')->name('payment-filter');

    /*notification route */

    Route::get('admin/notification/{id?}','NotificationController@notification')->name('admin-notification');
    Route::get('/send/email/calendar/{id}', 'GoogleCalendarController@SendEmailGoogleCalenderLink')->name('SendEmailGoogleCalenderLink');
});





/* front side route */

Route::prefix('appointment')->middleware('xss')->group(function () {

    Route::post('/approval/{id}','AppointmentController@approval')->name('approval');

    Route::post('/cancel/{id}','AppointmentController@cancel')->name('cancel');

    Route::post('/complete/{id}','AppointmentController@complete')->name('complete');

    Route::any('/filter','AppointmentController@filter')->name('appointment-filter');

    Route::post('/create','Front\AppointmentController@create')->name('appointment.create');

    Route::get('/book','Front\AppointmentController@index')->name('appointment.book');

    Route::get('/thank-you','Front\PaymentController@index')->name('success');

    Route::get('/reminder/mail','Front\AppointmentController@remider')->name('remider');

});



Route::prefix('get')->middleware('xss')->group(function () {

    Route::get('/appointment','Front\AppointmentController@appointment')->name('getAppointment');

    Route::post('/service','Front\ServiceController@categories')->name('service');

    Route::post('/services','Front\ServiceController@services')->name('getService');

    Route::post('/employees','Front\ServiceController@employees')->name('getEmployee');

    Route::post('/another/employees','Front\ServiceController@anotherEmployee')->name('getAnotheremployee');

    Route::post('/intent','Front\PaymentController@intent')->name('intent');

});



Route::prefix('proceeds')->middleware('xss')->group(function () {

    Route::post('/paypal','Front\PaymentController@proceed')->name('proceed');

    Route::post('/razorpay/success','Front\PaymentController@razorpay')->name('razorpay');

});



Route::any('/timeslots','Front\ServiceController@getTimeSlot')->name('getTimeSlot');

Route::any('/slots','Front\ServiceController@getSlots')->name('getSlot');

// Route::any('/','Front\ServiceController@TestMail')->name('TestMail');

Route::get('dashboard', function (){

    $custom = Setting::first();

    if(\Illuminate\Support\Facades\Auth::user()->role_id == 1)

        $appointments = \App\Entities\Appointment::where('admin_id', \Illuminate\Support\Facades\Auth::user()->id)->get();

    else if(\Illuminate\Support\Facades\Auth::user()->role_id == 2 ) {

        $appointments = \App\Entities\Appointment::where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->get();

        $latestNotifications = DB::table('notification')->where('user_id',Auth::user()->id)->limit(3)->orderBy('id','desc')->get();

        return view('customer-dashboard', compact('appointments','latestNotifications','custom')); 

    }       

    else if(\Illuminate\Support\Facades\Auth::user()->role_id == 3 )

        $appointments = \App\Entities\Appointment::where('employee_id', \Illuminate\Support\Facades\Auth::user()->id)->get();

        

    else {

        $appointments = array();

    }

    $user = User::where('parent_user_id',Auth::user()->id)->where('role_id',2)->get()->count();

    $employee = Employee::where('parent_user_id',Auth::user()->id)->where('role_id', 3)->get()->count();

    $payment = Payment::get()->count();

    $todayAppointment = Appointment::where('date',date('Y-m-d'))->get()->count();

    return view('dashboard', compact('appointments','user','employee','payment','todayAppointment','custom'));

})->name('dashboard')->middleware(['auth','xss']);





Route::post('register','Auth\RegisterController@store')->name('register')->middleware('xss');

Route::post('/login','Auth\LoginController@login')->name('login')->middleware('xss');

Route::get('/signup','Auth\RegisterController@signup')->name('signup')->middleware('xss');

Route::post('/logout','Auth\LoginController@logout')->name('logout')->middleware(['auth','xss']);

Route::post('/forgot/password', 'Auth\LoginController@forgotPassword')->name('password.forgot');

Route::post('/reset/password/{token}', 'Auth\LoginController@resetPassword')->name('password.reset');

Route::get('/{id}/appointment/payment/success','Front\PaymentController@stripeSuccess')->middleware('xss');

Route::post('payment','Front\PaymentController@afterPayment')->name('payment')->middleware('xss');



Route::post('users/email/check','Front\ServiceController@checkEmailExist')->name('check.user.email')->middleware('xss');

Route::any('change/langauge/{lang}', 'SettingController@changeLangauge')->name('chang.locale')->middleware('xss');

Route::post('verify/mail', 'SettingController@verifySmtp')->name('verifyMail')->middleware('xss');

Route::post('verify/sms', 'NotificationController@verifySms')->name('verifySms')->middleware('xss');
/* abort 404 */

Route::any('/page/unauthorized',function() {

   abort(404);
})->name('unauthorized')->middleware('xss');

Route::get('/calendar', 'GoogleCalendarController@googleCalendarEventSync')->name('GoogleCalendarEventSync');
