from crypto.crypt_message import Key, encrypt_message
from django.db import models
from django import forms
from Blog.settings import AUTH_USER_MODEL
from cryptography.fernet import Fernet
default_key = Key('secret.key').generateKey()


class CryptoNet(models.Model):
    slug = models.SlugField(max_length=128) 
    user = models.ForeignKey(AUTH_USER_MODEL,on_delete=models.CASCADE)
    message = models.TextField(max_length=255, blank=False)
    key = models.CharField(max_length=255,default=default_key)
    
    def crypter_message(self):
        key = Key('secret.key').generateKey()
        encrypted_msg = encrypt_message(self.message, key)
        return encrypted_msg
    @staticmethod
    def checkKey(key):
        try:
            print('trying key as Fernet key')
            fernet_key = Fernet(key)
            test = fernet_key.encrypt('test'.encode())
            return key
        except:
            print('error checkKey: not a FernetKey')
            return False
        
    
    def __str__(self):
        return f'id:{self.slug},user:{self.user},key:{self.key}'
