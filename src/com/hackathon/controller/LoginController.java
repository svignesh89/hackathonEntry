/*package com.hackathon.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.hackathon.dao.LoginDAO;
import com.hackathon.model.LoginBean;
import com.mysql.jdbc.log.Log;

*//**
 * Servlet implementation class LoginController
 *//*
@WebServlet("/LoginController")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    *//**
     * @see HttpServlet#HttpServlet()
     *//*
    public LoginController() {
        super();
        // TODO Auto-generated constructor stub
    }

	*//**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 *//*
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		JSONArray data = new JSONArray();
		try {
			JSONObject jsonResponse = new JSONObject();
			LoginDAO loginList = new LoginDAO();
			List<LoginBean> login = loginList.getLoginList(userName, password);
			for(LoginBean loginBean: login) {
				JSONObject Login = new JSONObject();
				Login.put("userName", loginBean.getUserName())
				.put("password", loginBean.getPassword());
				data.put(Login);
			}
			if(login.size()>=1)
				jsonResponse.put("success", "true");
			else
				jsonResponse.put("success", "false");
			jsonResponse.put("total", login.size());
			jsonResponse.put("data", data);
			((ServletResponse) jsonResponse).setContentType("application/json");
			response.getWriter().print(jsonResponse.toString());
		} catch(Exception e) {
			e.printStackTrace();
			response.getWriter().print(e.getMessage());
		}
	}

	*//**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 *//*
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
*/