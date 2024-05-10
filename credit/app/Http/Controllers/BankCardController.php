<?php

namespace App\Http\Controllers;

use App\Models\BankCard;
use Illuminate\Http\Request;

class BankCardController extends Controller
{
  public function index()
   {
       $cards = BankCard::all();
       return response()->json($cards);
   }

   public function store(Request $request)
   {
       $validatedData = $request->validate([
           'cardNumber' => 'required|digits:16|unique:bank_cards,number',
           'expirationDateMM' => 'required',
           'expirationDateYY' => 'required',
           'cvv' => 'required|digits:3',
       ]);
       $validatedData['number'] = $request->cardNumber;
       $validatedData['expiry_date_month'] = $request->expirationDateMM;
       $validatedData['expiry_date_year'] = $request->expirationDateYY;
       $validatedData['cvv'] = $request->cvv;

       $card = BankCard::create($validatedData);

       return response()->json($card, 201);
   }

   public function show(BankCard $card)
   {
       return response()->json($card);
   }

   public function update(Request $request, BankCard $card)
   {
       $validatedData = $request->validate([
           'cardNumber' => 'required|digits:16|unique:bank_cards,number,' . $card->id,
           'expirationDateMM' => 'required',
           'expirationDateYY' => 'required',
           'cvv' => 'required|digits:3',
       ]);

       $validatedData['number'] = $request->cardNumber;
       $validatedData['expiry_date_month'] = $request->expirationDateMM;
       $validatedData['expiry_date_year'] = $request->expirationDateYY;
       $validatedData['cvv'] = $request->cvv;
       
       $card->update($validatedData);

       return response()->json($card);
   }

   public function destroy(BankCard $card)
   {
       $card->delete();

       return response()->json(null, 204);
   }
}
