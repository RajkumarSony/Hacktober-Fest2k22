package com.spiosys.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import com.spiosys.factory.ConnectionFactory;
import com.spiosys.to.Student;

public class StudentServiceImpl implements StudentService {

	public Student getStudent(String sid) {

		Student std = null;

		try {
			Connection con = ConnectionFactory.getConnection();
			PreparedStatement pst = con.prepareStatement("select * from student where SID = ?");
			pst.setString(1, sid);
			ResultSet rs = pst.executeQuery();
			boolean b = rs.next();
			
			if(b == true) {
				std = new Student();
				std.setSid(rs.getString("SID"));
				std.setSname(rs.getString("SNAME"));
				std.setSaddr(rs.getString("SADDR"));
			}else {
				std = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return std;
	}
	public String update(String sid, String sname, String saddr) {
		
		String status = "";

		try {
			Connection con = ConnectionFactory.getConnection();
			PreparedStatement pst = con.prepareStatement("update student set SNAME = ? , SADDR = ? where SID = ?");
			pst.setString(1, sname);
			pst.setString(2, saddr);
			pst.setString(3, sid);
			int rowCount = pst.executeUpdate();
			
			if(rowCount == 1) {
			
				status = "success";
			}else {

				status = "failure";
			}
		} catch (Exception e) {
			
			status = "failure";
			e.printStackTrace();
		}
		return status;
	}
}