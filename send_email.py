#######################################################################################-W E L C O M E-#################################################################################

#Importing necesarry stuff
import ssl
import smtplib
from email.message import EmailMessage


#Connecting the server. You will need to have a gmail account, when it's done put his email as the 'email_sender' string. For the app password, follow those guidelines : https://support.google.com/accounts/answer/185833?hl=en
email_sender = 'tubevoteteam@gmail.com'
app_password = 'fmqd xgrv wyvz bpae'
#Note : You don't need to change anything of this.
context = ssl.create_default_context()
smtp = smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context)
smtp.login(email_sender, app_password)

#Here is the send_email function. 
def send_email(to: str, subject: str, body: str):
  email_receiver = to
  em = EmailMessage()
  em['from'] = email_sender
  em['to'] = to
  em['subject'] = subject
  em.set_content(body)
  smtp.sendmail(email_sender, email_receiver, em.as_string())


#Here I used input, but just put those variables to any string you want. Make sure to set 'to_email' variable to the string email of the person you want to contact.
to_email = input('Please enter the email of the person you want to contact:')
subject = input('Please enter the subject of the email:')
body = input('Please enter the content of the email:')

#You're already done. This function send the email!
send_email(to=to_email, subject=subject, body=body)