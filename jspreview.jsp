//jsp review


//JSP directives
<%@ page ... %>	Defines page-dependent attributes, such as scripting language, error page, and buffering requirements.
<%@ include ... %>	Includes a file during the translation phase.
<%@ taglib ... %>	Declares a tag library, containing custom actions, used in the page

//actions
<jsp:action_name attribute="value" />

//implicit objects
Object	Description

request		This is the HttpServletRequest object associated with the request.
response	This is the HttpServletResponse object associated with the response to the client.
out			This is the PrintWriter object used to send output to the client.
session		This is the HttpSession object associated with the request.
application	This is the ServletContext object associated with application context.
config		This is the ServletConfig object associated with the page.
pageContext	This encapsulates use of server-specific features like higher performance JspWriters.
page		This is simply a synonym for this, and is used to call the methods defined by the translated servlet class.
Exception	The Exception object allows the exception data to be accessed by designated JSP.


//Out object

out.print(dataType dt)		Print a data type value
out.println(dataType dt)	Print a data type value then terminate the line with new line character.
out.flush()					Flush the stream.