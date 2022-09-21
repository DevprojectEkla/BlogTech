from crypto.crypt_message import Key, encrypt_message
from django.db import models
from django import forms
from Blog.settings import AUTH_USER_MODEL
from cryptography.fernet import Fernet
from cryptography.exceptions import InvalidKey
default_key = Key('secret.key').key


class CryptoNet(models.Model):
    slug = models.SlugField(max_length=128) 
    user = models.ForeignKey(AUTH_USER_MODEL,on_delete=models.CASCADE)
    message = models.TextField(max_length=255, blank=False)
    key = models.CharField(max_length=255,default=default_key)
    keyFile = models.FileField(upload_to='keyfiles', blank=True, null=True)
    
    def crypter_message(self, key):
        encrypted_msg = encrypt_message(self.message, key)
        return encrypted_msg
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
