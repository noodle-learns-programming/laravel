@extends('layouts.semantic')

@section('content')
	<h1 class="ui header">This is product page</h1>
	{!! Form::open(array('url' => 'product/create', 'class' => 'ui form' )) !!}
		<div class="field">
			<label>Name</label>
			{!! Form::text('name') !!}
		</div>
		<div class="field">
			<label>Description</label>
			{!! Form::textarea('description', '', array('rows' => 2)) !!}
		</div>
		<button class="ui button" type="submit">Submit</button>
	{!! Form::close() !!}
@endsection
