<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:clients',
            'email' => 'required|unique:clients|email',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Название организации - обязательно',
            'name.unique' => 'Компания с таким именем уже существует',
        ];
    }
}
