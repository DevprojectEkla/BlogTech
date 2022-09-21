from django.shortcuts import render
from django.views.generic import CreateView, TemplateView 
from django.shortcuts import redirect, render
from crypto.models import CryptoNet, Key



def cryptMsg(request):
    if request.method == "POST":
        print("post request here")
        user = request.user
        message = request.POST.get('message')
        genkey = request.POST.get('genkey')
        keyfile = request.POST.get('keyfile')
        if genkey:
            print("genkey pressed")
            key = CryptoNet.generateKey()
            test = CryptoNet.checkKey(key)
        elif keyfile:
            print(f'using a keyfile:{keyfile}')
            key = Key(keyfile).key
            print('checking key in backend server')
            try:
                test = CryptoNet.checkKey(key)
                if test:
                    print(f'valid Fernet key loaded from {keyfile}')
                else:
                    raise Exception
            except Exception:
                print(f"couldn't load a valid key from your keyfile.\n Please check the content of the file or try to use an auto generate key from our webpage.")
                context = {"key": f"INVALID KEY (value = {key}) Extracted From file:{keyfile}"}
                return render(request, 'crypto/crypt_fail.html',context)
        else:
            key = request.POST.get('key_input').split(':')[1].encode()
            test = CryptoNet.checkKey(key)
            print(key, test)

        if test and (message!="" and message!="ce champ ne doit pas être vide ou contenir ce message d'erreur"):
            crypt_result = crypt_op(user,message,key)
            encrypted_msg = crypt_result[0]
            context = crypt_result[1]
            print(f"something posted:{message}, encrypted_msg:{encrypted_msg}")
            return render(request,'crypto/crypt_ok.html', context)
        # elif not test:
        #     print('invalid Fernet Key. Please insert a valid key')
        #     context = {"key": "INVALID KEY"}
        #     return render(request, 'crypto/crypto.html', context)
        elif message == "" or message == "ce champ ne doit pas être vide ou contenir ce message d'erreur":
            print('Warning: empty message. To save database not empty str allowed')
            message = "ce champ ne doit pas être vide ou contenir ce message d'erreur"
            context = {"message":message,
                    "key":key.decode()}
            return render(request, 'crypto/crypto.html', context)
    else:
        print('nothing posted !! ??')
        crypto = CryptoNet()
        context = { "key":crypto.generateKey().decode(),
                "genkey": "" 
                }
        return render(request, 'crypto/crypto.html',context)


def crypt_op(user, message, key):
    
    cryptMSG = CryptoNet()
    cryptMSG.key = key
    encrypted_msg = cryptMSG.crypter_message(key)
    cryptMSG.user = user
    cryptMSG.slug = len(CryptoNet.objects.all()) + 1
    cryptMSG.message = message
    cryptMSG.save()
    context = { "message": message,
                    "encrypted_msg":encrypted_msg,
                    "user": user,
                    "id":cryptMSG.slug,
                    "key":cryptMSG.key
                    }
    return encrypted_msg, context 


class CryptoViewOk(TemplateView):
    template_name = 'crypto/crypt_ok.html'

class CryptoViewFail(TemplateView):
    template_name = 'crypto/crypt_fail.html'

