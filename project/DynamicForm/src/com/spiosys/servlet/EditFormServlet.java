package com.spiosys.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.spiosys.factory.StudentServiceFactory;
import com.spiosys.service.StudentService;
import com.spiosys.to.Student;


public class EditFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		String sid = request.getParameter("sid");

		StudentService stdService = StudentServiceFactory.getStudentService();
		Student std = stdService.getStudent(sid);

		if(std == null) {
			out.println("<html>");
			out.println("<body>");
			out.println("<h2 style='color: red;' align='center'>Durga Software Solutions</h2>");
			out.println("<h3 style='color: blue' align='center'>Student Updation Status</h3>");
			out.println("<h1 style='color: red;' align='center'>Student Not Existed</h1>");
			out.println("<h3 align='center'><a href='./updateform.html'>|Update Form|</a></h3>'");
			out.println("</body></html>"); 
		}else {
			out.println("<html>");
			out.println("<body>");
			out.println("<h2 style='color: red;' align='center'>Durga Software Solutions</h2>");
			out.println("<h3 style='color: blue' align='center'>Student Edit Form</h3>");
			out.println("<form method='POST' action='./update'>");
			out.println("<center>");
			out.println("<table>");
			out.println("<tr><td>Student Id</td><td>"+sid+"</td></tr>");
			out.println("<input type='hidden' name='sid' value='"+sid+"'/>");
			out.println("<tr><td>Student Name</td><td><input type='text' name='sname' value='"+std.getSname()+"'/></td></tr>");
			out.println("<tr><td>Student Address</td><td><input type='text' name='saddr' value='"+std.getSaddr()+"'/></td></tr>");
			out.println("<tr><td><input type='submit' value='Update'/></td></tr>");
			out.println("</table></center></form></body></html>");
		}
	}

}
