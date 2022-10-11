package com.spiosys.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.spiosys.factory.StudentServiceFactory;
import com.spiosys.service.StudentService;


public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		String sid = request.getParameter("sid");
		String sname = request.getParameter("sname");
		String saddr = request.getParameter("saddr");

		StudentService stdService = StudentServiceFactory.getStudentService();
		String status = stdService.update(sid, sname, saddr);
		
		out.println("<html>");
		out.println("<body>");
		out.println("<h2 style='color: red;' align='center'>Durga Software Solutions</h2>");
		out.println("<h3 style='color: blue' align='center'>Student Updation Status</h3>");
		out.println("<h1 style='color: red;' align='center'>");
		
		if(status.equals("success")) {
		
			out.println("Student Updation Success");
		}else {
			
			out.println("Student Updation Failure");
		}
		out.println("</h1>");
		out.println("<h3 align='center'><a href='./updateform.html'>|Update Form|</a></h3>");	
	}
}
