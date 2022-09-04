from crypto.crypt_message import Key, encrypt_message
from django.db import models
from django import forms


default_key = Key('secret.key').generateKey()


class CryptoNet(models.Model):
    name = models.CharField(max_length=255)
    message = models.TextField()
    key = models.CharField(max_length=255,default=default_key)
    
    def crypter_message(self):
        key = Key('secret.key').generateKey()
        encrypted_msg = encrypt_message(self.message, key)
        return encrypted_msg
    
    def __str__(self):
        return f'Key{self.key},name:{self.name}'
