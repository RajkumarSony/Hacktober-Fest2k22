/*------- Example on Forward Mech: -------*/

package com.apps.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/status=")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String userName = request.getParameter("uname");
		String password = request.getParameter("upwd");

		RequestDispatcher requestDispatcher = null;

		if(userName.equals("durga") && password.equals("durga")) {
			requestDispatcher = request.getRequestDispatcher("/success.html");
			requestDispatcher.forward(request, response);
		}else {
			requestDispatcher = request.getRequestDispatcher("failure.html");
			requestDispatcher.forward(request, response);
		}
	}
}
