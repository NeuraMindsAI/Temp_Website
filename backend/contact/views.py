from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.core.mail import send_mail

@api_view(['POST'])
def submit_contact_form(request):
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save the data
        contact_message = serializer.save()

        # Extract the saved data
        name = contact_message.name
        email = contact_message.email
        message = contact_message.message

        # Send email notification
        send_mail(
            "New Contact Form Submission",
            f"Name: {name}\nEmail: {email}\nMessage: {message}",
            "neuramindsai@gmail.com",  # Sender Email (Update this in Django settings)
            ["neuramindsai@gmail.com"],  # Admin Email (Replace with your email)
            fail_silently=False,
        )

        return Response({"message": "Your message has been sent successfully!"}, status=201)
    
    return Response(serializer.errors, status=400)
