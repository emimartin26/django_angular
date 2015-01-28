from rest_framework.permissions import BasePermission, SAFE_METHODS



class IsOwnerOrReadOnly(BasePermission):
    """
    Permisos personalizados
    """

    def has_object_permission(self, request, view, obj):
        print request.user
        '''
        Retorna true si el usuario es el creador del tweet.
        '''
        if request.method in SAFE_METHODS:
            return True

        # Si el metodo es "PUT" o "PATH" o "DELETE", se verifica que quien este realizando la peticion sea
        # el creador de dicho objeto
        return obj.user == request.user
