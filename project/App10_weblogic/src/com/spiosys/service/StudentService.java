package com.spiosys.service;

import com.spiosys.to.Student;

public interface StudentService {
	
	public Student getStudent(String sid);
	public String update(String sid, String sname, String saddr);
}
