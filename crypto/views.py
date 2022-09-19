from django.shortcuts import render
from django.views.generic import CreateView, TemplateView 
from django.shortcuts import redirect, render
from crypto.models import CryptoNet



def cryptMsg(request):
    if request.method == "POST":
        print("post request here")
        message = request.POST.get('message')
        key = request.POST.get('key_input').split(':')[1].encode()
        test = CryptoNet.checkKey(key)
        print(key, CryptoNet.checkKey(key))
        
        if test and (message!="" and message!="ce champ ne doit pas être vide ou contenir ce message d'erreur"):
            cryptMSG = CryptoNet()
            cryptMSG.key = key
            encrypted_msg = cryptMSG.crypter_message()
            user = request.user
            cryptMSG.user = user
            cryptMSG.slug = len(CryptoNet.objects.all()) + 1
            cryptMSG.message = message
            cryptMSG.save()
            context = { "message": message,
                    "encrypted_msg":encrypted_msg,
                    "user": request.user,
                    "id":cryptMSG.slug,
                    "key":cryptMSG.key
                    }
            
            print(f"something posted:{message}, encrypted_msg:{encrypted_msg}")
            return render(request,'crypto/crypt_ok.html', context)
        elif not test:
            print('invalid Fernet Key. Please insert a valid key')
            context = {"key": "INVALID KEY"}
            return render(request, 'crypto/crypto.html', context)
        elif message == "" or message == "ce champ ne doit pas être vide ou contenir ce message d'erreur":
            print('Warning: empty message. To save database not empty str allowed')
            message = "ce champ ne doit pas être vide ou contenir ce message d'erreur"
            context = {"message":message,
                    "key":key.decode()}
            return render(request, 'crypto/crypto.html', context)
    else:
        print('nothing posted !! ??')
        crypto = CryptoNet()
        context = { "key":crypto.key.decode()
                }
        return render(request, 'crypto/crypto.html',context)
            
class CryptoView(TemplateView):
    template_name = 'crypto/crypt_ok.html'

