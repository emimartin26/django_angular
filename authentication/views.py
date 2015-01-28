from rest_framework import status
from rest_framework.response import Response
from rest_framework_jwt.views import ObtainJSONWebToken
from .serializers import UserSerializer


def jwt_response_token_user(token, user=None):
    return {
        'token': token,
        'user': UserSerializer(user).data
    }



class ObtainJWT(ObtainJSONWebToken):

    def post(self, request):
        serializer = self.serializer_class(data=request.DATA)

        if serializer.is_valid():
            user = serializer.object.get('user') or request.user
            token = serializer.object.get('token')
            response_data = jwt_response_token_user(token, user)
            return Response(response_data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



