<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('Appointment email') }}</title>
</head>
<body>
        <div style="font-family:'Roboto,RobotoDraft,Helvetica,Arial,sans-serif',Arial,sans-serif;background:#e5e5e5;margin:0">
            <div style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;background:#e5e5e5;margin:0;padding:50px 15px">
                <table style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:700px;width:100%;margin:auto;border-top:4px solid #ffa700;border-spacing:0;background:#fff"> 
                    <tbody>
                         <tr>
                            <td style="padding:15px 20px 0 20px;background:#fff">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:5px 0;font-size:16px;font-weight:bold;color:#1e2538;line-height:22px">{{ $title }}</h2>
                                            </td>
                                            <td>
                                                <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:500;font-size:14px;line-height:18px;text-align:center;color:#60b158;margin:0;background:#f1fff0;border:1px solid #60b158;border-radius:3px;width:100px;padding:5px;margin-left:auto">{{ __('Created') }}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        @if(isset($employee))
                        <tr>
                            <td style="padding:10px 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:10px">
                                    <tbody><tr>
                                        <td>
                                            <h2 style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:bold;color:#1e2538;line-height:22px">
                                            {{ __('Created by') }}: <u></u>
                                            @auth
                                            {{ auth()->user()->first_name.' '.auth()->user()->last_name}}
                                            @else
                                            {{ $customer->first_name.' '.$customer->last_name}}
                                            @endauth
                                            <u></u></h2>
                                                
                                        </td>
                                        <td style="text-align:right">
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:500;color:#73788b;line-height:16px;max-width:160px">{{ date('D, d m Y h:i:s A')}}</span>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @endif
                        <tr>
                            <td style="padding:5px 20px 0">
                                <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-weight:600;font-size:14px;line-height:18px;color:#1e2538;margin-bottom:15px">{{ __('Hi') }} {{ $customer->first_name.' '.$customer->last_name}},</p>
                                <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-weight:500;font-size:14px;line-height:18px;color:#73788b">
                                {{ __('Your Appointment is Created for')}} {{date('d F Y', strtotime($appointment->date))}}.</p>
                            </td>
                        </tr>
                        @if(isset($employee))
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Employee Name')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{ $employee->first_name.' '.$employee->last_name}}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Email Address')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{ $employee->email }}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @endif
                        @if(isset($customer))
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Customer Name')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{ $customer->first_name.' '.$customer->last_name}}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Email Address')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{$customer->email}}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @endif
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Appointment Date')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{date('d F Y', strtotime($appointment->date))}}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Appointment Time')}}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{ date('h:i:s A',strtotime($appointment->start_time)).' - '.date('h:i:s A',strtotime($appointment->finish_time))}}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Appointment Detail') }}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:20px">
                                                {{ $appointment->comments }}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @if($appointment->status == 'approved')
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#007aff;line-height:20px;margin-bottom:5px">
                                                {{ __('Appointment Status') }}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#03a301;line-height:20px">
                                                {{ ucfirst($appointment->status) }}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @endif
                        @if($appointment->status == 'pending')
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:16px;font-weight:bold;color:#ffe100;line-height:20px;margin-bottom:5px">
                                                {{ __('Appointment Status') }}:
                                            <span style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#fafa03;line-height:20px">
                                                {{ ucfirst($appointment->status) }}
                                            </span></p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        @endif
                        <tr>
                            <td style="text-align:center;padding:20px 20px 0 20px">
                                <a href="{{ route('welcome') }}" style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;background:#007aff;padding:12px 30px;color:#ffffff;font-size:14px;font-weight:700;letter-spacing:0.5px;line-height:16px;border-radius:3px;text-decoration:none;display:inline-block" target="_blank">{{ __('View Details') }}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;border-bottom:1px solid #ebecf2;padding-bottom:15px">
                                    <tbody><tr>
                                        <td>
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:500;color:#73788b;line-height:16px;text-align:center">
                                                {{ __('if button is not working click here')}} <a href="{{ route('welcome') }}" style="margin:0;color:#007aff;font-size:14px;font-weight:500;line-height:16px;display:inline-block" target="_blank">{{ __('Login here') }}</a>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:15px 20px 0 20px">
                                <table style="width:100%;margin:auto;padding-bottom:15px">
                                    <tbody><tr>
                                        <td style="padding:0;text-align:center">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-style:italic;font-weight:normal;font-size:14px;line-height:18px;color:#1e2538;margin:0">{{ __('Please do not reply to this email. You are receiving this email because')}}<br>{{ __('you have created an account at')}} <a href="{{ route('welcome') }}" style="margin:0;color:#007aff;font-size:14px;font-weight:500;line-height:16px;display:inline-block;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif" target="_blank">{{ __('Appointment Booking System') }}</a>.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:15px 0 0 0">
                                            <p style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:normal;color:#73788b;line-height:16px;text-align:center">{{ __('Copyright © 2022') }} <a href="https://zluck.com/" style="font-family: inherit;text-decoration: none;font-size: 14px;color: #73788b;font-weight: 700;" target="_blank">{{ __('Zluck Solutions') }}</a>. {{ __('All rights reserved') }}.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:15px 0 0 0">
                                            <table style="width:100%;margin:auto;max-width:250px">
                                                <tbody><tr>
                                                    <td style="padding:0">
                                                    <a style="display:block"><img alt="{{ __('google') }}" height="20px" width="auto" title="{{ __('google') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/google.png')}}" /></a>
                                                    </td>
                                                    <td style="padding:0">
                                                    <a style="display:block"><img alt="{{ __('gmail') }}"  height="25px" width="auto" title="{{ __('gmail') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/gmail.jpg')}}" /></a>
                                                    </td>
                                                    <td style="padding:0">
                                                    <a style="display:block"><img alt="{{ __('instagram') }}"  height="25px" width="auto" title="{{ __('instagram') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/instgram.jpg')}}" /></a>
                                                    </td>
                                                    <td style="padding:0">
                                                        <a style="display:block"><img alt="{{ __('linkedin') }}"  height="25px" width="auto" title="{{ __('linkedin') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/linkedin.jpg')}}" /></a>
                                                    </td>
                                                    <td style="padding:0">
                                                    <a style="display:block"><img alt="{{ __('facebook') }}" height="25px" width="auto" title="{{ __('facebook') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/facebook.png')}}" /></a>
                                                    </td>
                                                    <td style="padding:0">
                                                    <a style="display:block"><img alt="{{ __('twitter') }}"  height="25px" width="auto" title="{{ __('twitter') }}" style="display:block;margin:auto" src="{{asset('rbtheme/img/twitter.jpg')}}" /></a>
                                                    </td>
                                                </tr>
                                                
                                            </tbody></table>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                            
                        </tr>
                    </tbody>
                    </table>
  
</body>
</html>