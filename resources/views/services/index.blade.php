@extends('layouts.app')
@section('head')
    @include('includes.head',['title'=> trans('Services')])
@endsection
@section('content')
    @include('includes.message-block')
    <div class="row p-2">
        <div class="col-sm-12 col-mobile">
            <div class="board-box">
                <div class="board-title">
                    <h2>{{ __('List of all services') }} <a href="{{ route('services.create') }}" class="add-new-employee"><span
                                    class="fa fa-plus pull-c-right"></span></a></h2>  
                </div>
    
                <div class="table-style">
                    <div class="table-responsive">
                        <table class="table table-hover data-table" id="service-table">
                            <thead>
                            <tr>
                                <th>{{ __('SR No.') }}</th>
                                <th>{{ucfirst($custom->custom_field_service)}} {{ __('Name') }}</th>
                                @if($custom->categories == 1)
                                <th>{{ucfirst($custom->custom_field_category)}}</th>
                                @endif
                                <th>{{ucfirst($custom->custom_field_service)}} {{ __('Fee') }}</th>
                                <th>{{ __('Description') }}</th>
                                <th>{{ __('Duration') }}</th>
                                <th>{{ __('Cancel Before') }}</th>
                                <th>{{ __('Service Image') }}</th>
                                <th class="t-right">{{ __('Action') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($services as $service)
                                <tr>
                                    <th>{{  $rowIndex++ }}</th>
                                    <td>{{ ucfirst($service->name) }}</td>
                                    @if($custom->categories == 1)
                                    <td>{{ (ucfirst(isset($service->categories))) ? ucfirst($service->categories->name) : '-'}}</td>
                                    @endif
                                    <td>{{ $custom->currency_icon }}{{ $service->price }}</td>
                                    <td>{{ $service->description }}</td>
                                    <td>{{ Helper::timeformat($service->duration) }}</td>
                                    <td>{{ Helper::timeformat($service->cancel_before) }}</td>
                                    @if(!empty($service->image))
                                        <td><img src="{{ asset('img/services/'.$service->image) }}" height="auto" width="50px" alt="{{ __('Service Image') }}"></td>
                                    @else
                                        <td><img src="{{asset('rbtheme/img/placeholder.jpeg')}}" height="auto" width="50px" alt="{{ __('Service Image') }}"></td>
                                    @endif
    
                                    <td class="t-right">
                                        <a class="btn btn-default btn-lg" href="{{ route('services.show',$service->id) }}">
                                            <span class="glyphicon glyphicon-eye-open"></span>
                                        </a>
                                        <a class="btn btn-default btn-lg" href="{{ route('services.edit',$service->id) }}">
                                            <span class="glyphicon glyphicon-edit"></span>
                                        </a>
                                        <a class="btn btn-default btn-lg" title="{{ __('employee') }}" href="{{route('service.employee',$service->id)}}">
                                            <span class="glyphicon glyphicon-user"></span>
                                        </a> 
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection