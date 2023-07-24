from django.db import models


# Create your models here.
class Items(models.Model):
    id = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=50, blank=True, null=True)
    id_padre = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "items"

    def __str__(self):
        return self.nombre
