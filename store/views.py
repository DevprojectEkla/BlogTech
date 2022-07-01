from django.urls import reverse

from store.models import Product, Cart, Order
from django.shortcuts import render, get_object_or_404, redirect


def base(request):
    return render(request, 'store/base.html')


def index(request):
    products = Product.objects.all()
    return render(request, 'store/index.html', context={"products": products})


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'store/detail.html', context={"product": product})


def add_to_cart(request, slug):
    user = request.user
    product = get_object_or_404(Product, slug=slug)
    new_cart, _ = Cart.objects.get_or_create(user=user)
    order, created = Order.objects.get_or_create(user=user, ordered=False, product=product)
    if created:
        new_cart.orders.add(order)
        new_cart.save()
    else:
        order.quantity += 1
        order.save()
    return redirect(reverse("product", kwargs={"slug": slug}))


def cart(request):
    new_cart = get_object_or_404(Cart, user=request.user)

    return render(request, 'store/cart.html', context={"orders": new_cart.orders.all()})


def delete_cart(request):
    new_cart = request.user.cart
    if new_cart:
        # ou symbole walerus :=   " if cart:= request.user.cart:
        new_cart.delete()

    return redirect('index')
