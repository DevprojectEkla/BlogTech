from django.shortcuts import render, redirect, render
from django.views.generic import CreateView, TemplateView 
from django.template import Template, Context
from Blog.settings import MEDIA_ROOT, MEDIA_URL
from crypto.models import CryptoNet, Key
from cryptography.exceptions import InvalidSignature
from cryptography.fernet import InvalidToken
from pathlib import Path

btn_copy = """
 <!-- The button used to copy the text -->
            <button class= "" id="btn_copy" data-bs-toggle="tooltip" title="paste to clipboard" data-bs-placement="right"  class="mb-1 p-1" type="button" action="onclick"><svg id="copyico" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon d-inline-block">
    <path fill="cyan" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill="cyan" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg><svg id="okico" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-inline-block d-sm-none">
    <path fill="cyan" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg></button>

<script type="text/javascript"></script>
"""

template_decrypt = """    
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary bg bg-cyan-900 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  {{btn_title}}
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content bg bg-primary">
      <div class="modal-header">
        <h5 class="modal-title text-cyan-100" id="exampleModalLabel">Clé de décryptage</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     <div class="modal-body"> <input id="key_input" class="my-1 text-cyan-100" value="{{key}}">
      </input>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {{btn_copy}}
        <a download="{{filename}}" href="{{path}}">
        <button type="button" class="btn btn-primary">Save as a .key file</button>
        </a>
      </div>
    </div>
  </div>
</div>
"""

def cryptMsg(request):

    user = request.user
    if not user.is_authenticated:
        return redirect('login')
    if request.method == "POST":
        print("post request here")
        slug = len(CryptoNet.objects.all()) + 1
        message = request.POST.get('message')
        genkey = request.POST.get('genkey')
        keyfile = None
        decrypt_flag = request.POST.get('decrypt')
        if request.FILES:
            keyfile = request.FILES['keyfile']
            filename = str(keyfile)
            print("filename",filename)
            keypath = Path.cwd()/Path('media/keyfiles')/filename
            print(keypath)
        if genkey:
            print("genkey pressed")
            key = CryptoNet.generateKey()
            test = CryptoNet.checkKey(key)
        elif keyfile:
            key = keyfile.read()
            print(f'using a keyfile:{keyfile} containing key:{key}')
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
            if decrypt_flag:
                decrypt_result = decrypt_op(user, message, key, keyfile)
                decrypted_msg = decrypt_result[0]
                context = decrypt_result[1]
                print(f"something posted:{message}, decrypted_msg:{decrypted_msg}")
            else:
                crypt_result = crypt_op(user, message, key, keyfile)

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


def crypt_op(user, message, key, keyfile):
    cryptMSG = CryptoNet()
    cryptMSG.message = message
    slug = len(CryptoNet.objects.all()) + 1
    cryptMSG.slug = slug
    cryptMSG.user = user
    cryptMSG.key = key
    filename = f'key_{slug}.key'
    encrypted_msg = cryptMSG.crypter_message(key)
    if keyfile:
        cryptMSG.keyfile = keyfile
        path = MEDIA_URL + f'/keyfiles/{filename}'
    else:
        with open(MEDIA_ROOT/f'downloads/key_{slug}.key','wb') as k_file: 
            k_file.write(key)
            k_file.close()
            path = MEDIA_URL + f'/downloads/{filename}'
    cryptMSG.save()
    context = { "message": message,
                    "result_op":encrypted_msg.decode(),
                    "result_title": "Le Message a bien été crypté",
                    "user": user,
                    "id":cryptMSG.slug,
                    "msg_key":Template(template_decrypt).render(Context(
                        {
                        "btn_copy": Template(btn_copy).render(Context({})),
                        "btn_title": "Voir la clé de cryptage utilisée",
                        "key":key.decode(),
                        "filename": filename,
                        "path":path
                        })),  # f"clé de cryptage à conserver : {key.decode()}",
                    "key":key,
                    "f_decrypt":False
                    }
    return encrypted_msg, context 

def decrypt_op(user, message, key, keyfile):
    cryptMSG = CryptoNet()
    cryptMSG.message = message
    cryptMSG.slug = len(CryptoNet.objects.all()) + 1
    cryptMSG.user = user
    cryptMSG.key = key
    decrypted_msg = cryptMSG.decrypter_message(key)
    if keyfile:
        cryptMSG.keyfile = keyfile
    cryptMSG.message = message
    cryptMSG.save()
    if type(decrypted_msg)== tuple:
        context = { "message": message,
                    "result_op":f'Exception {decrypted_msg}',
                    "result_title": "Le Message n'a pas pu être décrypté",
                    "user": user,
                    "id":cryptMSG.slug,
                    "msg_key": f"Clé de décryptage à vérifier : {key.decode()}",
                    "f_decrypt": True
                    }
    else:
        context =  { "message": message,
                    "result_title": "Le Message a bien été décrypté",
                    "result_op":decrypted_msg,
                    "msg_key": Template(template_decrypt).render(Context(
                        {
                        "btn_copy": Template(btn_copy).render(Context({})),
                        "btn_title": "Voir la clé de décryptage",
                        "key":key.decode(),
                        })), # f"Clé utilisé pour le décryptage : {key.decode()}",
                    "user": user,
                    "id":cryptMSG.slug,
                    "key":cryptMSG.key,
                    "f_decrypt": True
                    }

    
    return decrypted_msg, context 



class CryptoViewOk(TemplateView):
    template_name = 'crypto/crypt_ok.html'

class CryptoViewFail(TemplateView):
    template_name = 'crypto/crypt_fail.html'

