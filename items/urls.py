from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from items import views

router = routers.DefaultRouter()
router.register(r'items', views.ItemView, 'items')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs", include_docs_urls(title="Items API"))
]
