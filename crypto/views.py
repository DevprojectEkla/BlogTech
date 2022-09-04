from django.shortcuts import render
from django.views.generic import CreateView 
from django.shortcuts import redirect, render
from crypto.models import CryptoNet



def cryptMsg(request):
    if request.method == "POST":
        print("post request here")
        message = request.POST.get('message')
        cryptMSG = CryptoNet()
        cryptMSG.message = message
        encrypted_msg = cryptMSG.crypter_message()
        cryptMSG.save()

            
        print(f"something posted:{message}, encrypted_msg:{encrypted_msg}")
        return redirect('main')
    else:
        print('nothing posted !! ??')
        return render(request, 'crypto/crypto.html')
            

