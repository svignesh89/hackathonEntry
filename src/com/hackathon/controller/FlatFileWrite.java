package com.hackathon.controller;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Servlet implementation class FlatFileWrite
 */
@WebServlet("/FlatFileWrite")
public class FlatFileWrite extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FlatFileWrite() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String oldPlanId = request.getParameter("oldPlanId");
		String newPlanId = request.getParameter("newPlanId");
		System.out.println("new plan id --> " + newPlanId);
		JSONObject jsonResponse = new JSONObject();
		try {
			JSONArray data = new JSONArray();
			JSONObject jsonObj = new JSONObject();
			String content = "This is the content to write into file";
			Random ran = new Random();
			int rnum = 100000 + ran.nextInt(900000);
			//System.out.println("Get Contex path --- " + request.getServletContext().getRealPath("user.dir"));
			File file = new File(rnum+".txt");
//			File file = new File("D:/Flatfile/"+rnum+".txt");
			// if file doesnt exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			FileWriter fw = new FileWriter(file.getAbsoluteFile());
			BufferedWriter bw = new BufferedWriter(fw);
			if(newPlanId.equalsIgnoreCase("7652")) {
				bw.write("Old Plan ID - " + oldPlanId);
				bw.newLine();
				
				bw.write("New Plan ID - " + newPlanId);
				bw.newLine();
				
				bw.write("Failed reason - Plan selected is not compatible");
				bw.newLine();
				
				bw.write("Failed description - The plan selected was not compatible with the customer's device");
				bw.newLine();
			} else if(newPlanId.equalsIgnoreCase("2132")) {
				bw.write("Old Plan ID - " + oldPlanId);
				bw.newLine();
				
				bw.write("New Plan ID - " + newPlanId);
				bw.newLine();
				
				bw.write("Failed reason - Plan selected cannot be availed now");
				bw.newLine();
				
				bw.write("Failed description - The new plan selected should not be availed in last three months. User has already opted for this plan in last three months. ");
				bw.newLine();
			}
			
			bw.close();
			try {
				System.out.println("OPIN-===- " + rnum);
				
				jsonObj.put("OPIN", rnum);
				data.put(jsonObj);
				jsonResponse.put("data", data);
				//response.getWriter().print(jsonResponse);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println("Done");

		} catch (IOException e) {
			e.printStackTrace();
		}
		
		response.getWriter().print(jsonResponse.toString());
	}

}
