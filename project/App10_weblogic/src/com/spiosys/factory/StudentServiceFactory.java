package com.spiosys.factory;

import com.spiosys.service.StudentService;
import com.spiosys.service.StudentServiceImpl;

public class StudentServiceFactory {

	private static StudentService stdService;

	static {

		stdService = new StudentServiceImpl();
	}

	public static StudentService getStudentService() {
		
		return stdService;
	}
}
