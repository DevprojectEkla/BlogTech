import sys
from crypto.crypt_message import Key, encrypt_message, decrypt_message
from django.db import models
from django import forms
from Blog.settings import AUTH_USER_MODEL
from cryptography.fernet import Fernet, InvalidToken
from cryptography.exceptions import InvalidKey, InvalidSignature
default_key = Key('secret.key').key



class CryptoNet(models.Model):
    slug = models.SlugField(max_length=128) 
    user = models.ForeignKey(AUTH_USER_MODEL,on_delete=models.CASCADE)
    message = models.TextField(max_length=255, blank=False)
    key = models.CharField(max_length=255,default=default_key)
    keyfile = models.FileField(upload_to='keyfiles', blank=True, null=True)
    
    
    def crypter_message(self, key):
        encrypted_msg = encrypt_message(self.message, key)
        return encrypted_msg
    

    def decrypter_message(self, key):
        try:
            decrypt_msg = decrypt_message(self.message, key)
            return decrypt_msg.decode()
        except (InvalidSignature, InvalidToken) as exception:
            tb = sys.exc_info()[2]
            print(f'the excetion is {exception.with_traceback(tb),exception}')

            return exception, tb


    @staticmethod
    def generateKey():
        key = Fernet.generate_key()
        return key
    @staticmethod
    def checkKey(key):
        try:
            print('trying key as Fernet key')
            fernet_key = Fernet(key)
            test = fernet_key.encrypt('test'.encode())
            if test:
                print('key checked:\n\t[**] you are using a valid key [**]\n\tkey:{key}')
                return key
        except:
            print('error in backend checkKey:\nthe key you are trying to use is not a valid FernetKey')
            pass
        
    
    def __str__(self):
        return f'id:{self.slug},user:{self.user},key:{self.key}'
