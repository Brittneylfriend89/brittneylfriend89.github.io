@extends('layouts.app')
@section('head')
    @include('includes.head',['title'=> trans('View Employee')])
@endsection
@section('content')
    <div class="mb-3 padding-space">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 offset-md-3 col-md-6">
                    @include('includes.message-block')
                    <div class="panel panel-default panel-custom">
                        <div class="panel-heading panel-custom-heading">
                            <div class="btn-position">
                                <h3 class="panel-title">{{ __('View Employee') }}: {{ ucfirst($employee->first_name).' '. ucfirst($employee->last_name) }}</h3>
                                {{ Form::open(['method' => 'DELETE','id' => 'deleteItem','route' => ['employees.destroy', $employee->id]]) }}
                                <button type="button" class="btn btn-default btn-delete btn-lg btn-padding btn-color">
                                <span class="glyphicon glyphicon-trash btn-delete-color"></span>
                                {{ Form::close() }}
                            </div>
                        </div>
                        <div class="panel-body">
                            <form action="{{ route('employees.store') }}" method="post" autocomplete="off">
                                {{ csrf_field() }}
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="first_name" class="form-label">{{ __('First Name') }}: </label>
                                                    <input type="text" class="form-control custom-control" id="first_name" value="{{ $employee->first_name }}" name="first_name" readonly>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="last_name" class="form-label">{{ __('Last Name') }}: </label>
                                                    <input type="text" class="form-control custom-control" id="last_name" value="{{ $employee->last_name }}" name="last_name" readonly>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="email" class="form-label">{{ __('Email') }}: </label>
                                                    <input type="email" class="form-control custom-control" id="email" value="{{ $employee->email }}" name="email" readonly>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="phone" class="form-label">{{ __('Phone') }}: </label>
                                                    <input type="tel" class="form-control custom-control intlTelInput" id="phone" value="{{ $employee->phone }}" name="phone" readonly>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="start_time" class="form-label">{{ __('Start time') }}: </label>
                                                    <div class='input-group'>
                                                        <input type="time" class="form-control custom-control" id="start_time" value="{{ $workingHour->start_time }}" name="start_time" readonly>
                                                        <span class="input-group-text">
                                                            <span class="glyphicon glyphicon-time"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="finish_time" class="form-label">{{ __('Finish time') }}: </label>
                                                    <div class='input-group'>
                                                        <input type="time" class="form-control custom-control" id="finish_time" value="{{ $workingHour->finish_time }}" name="finish_time" readonly>
                                                        <span class="input-group-text">
                                                            <span class="glyphicon glyphicon-time"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="rest_time" class="form-label">{{ __('Padding time') }}: </label>
                                                    <div class='input-group'>
                                                        <input type='text' class="form-control custom-control" name="rest_time" value="{{ $workingHour->rest_time }}" readonly/>
                                                        <span class="input-group-text">
                                                            <span class="glyphicon glyphicon-time"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="break_start_time" class="form-label">{{ __('Break Start Time') }}: </label>
                                                    <div class='input-group'>
                                                        <input type="time" class="form-control custom-control" id="break_start_time" value="{{ $workingHour->break_start_time }}" name="break_start_time" readonly>
                                                        <span class="input-group-text">
                                                            <span class="glyphicon glyphicon-time"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="break_end_time" class="form-label">{{ __('Break End Time') }}:</label>
                                                    <div class='input-group'>
                                                        <input type="time" class="form-control custom-control" id="break_end_time" value="{{ $workingHour->break_end_time }}" name="break_end_time" readonly>
                                                        <span class="input-group-text">
                                                            <span class="glyphicon glyphicon-time"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label for="break_end_time" class="form-label">{{ __('Working Days') }}: </label>
                                                    @php $days = array(__('Sunday'),__('Monday'),__('Tuesday'),__('Wednesday'),__('Thursday'),__('Friday'),__('Saturday'))@endphp
                                                    @php $workingDays = !empty($workingHour->days) ? json_decode($workingHour->days) : NULL @endphp
                                                    @foreach($days as $key => $day)
                                                        <li class="list-group-item" required>
                                                            {{ $day }}
                                                            <div class="material-switch pull-right">
                                                                <input value="{{ $key }}" name="days[]" type="checkbox" 
                                                                @if(!empty($workingDays)) @if(in_array($key, $workingDays)) {{"checked"}} @endif @endif disabled>
                                                                <label for="{{ $key }}" class="label-success"></label>
                                                            </div>
                                                        </li>
                                                    @endforeach    
                                                    @error('working_day')
                                                    <span class=" error-message">{{ $message }}</span>
                                                    @enderror
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                        @if($custom->categories == 1)
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="mb-3">
                                                        @if($employeeServices[0]->category_id != 0)
                                                            <label class="form-label">{{ __('Categories') }}:</label>
                                                        @endif
                                                        
                                                        @foreach($categories as $category)
                                                        <li class="list-group-item">
                                                            {{ $category->name }}
                                                            <div class="material-switch pull-right">
                                                                <input value="{{ $category->id }}" name="category_id[]" type="checkbox" 
                                                                @foreach ($employeeServices as $categoryservice)
                                                                {{ ($categoryservice->category_id == $category->id) ? "checked": "" }}   @endforeach disabled>
                                                                <label for="{{ $category->id }}" class="label-success"></label>
                                                            </div>
                                                        </li>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @endif
    
    
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="mb-3" id="service_id">
                                                        <label class="form-label">{{ __('Services') }}:</label>
                                                        @foreach ($employeeServices as $categoryservice)
                                                        <li class="list-group-item">
                                                        {{ $categoryservice->service->name }}
                                                        <div class="material-switch pull-right">
                                                            <input value="{{ $categoryservice->service->id }}" name="service_id[]" type="checkbox" checked disabled>
                                                            <label for="service" class="label-success"></label>
                                                        </div>
                                                    </li>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <hr>
                                    <a href="{{ route('employees.index') }}" class="back-button"><h4><i class="fa fa-arrow-left" aria-hidden="true"></i> {{ __('Back') }}</h4></a>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
