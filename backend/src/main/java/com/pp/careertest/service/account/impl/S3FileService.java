package com.pp.careertest.service.account.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pp.careertest.service.account.IFileService;

@Service
public class S3FileService implements IFileService{

	@Override
	public String write(String baseFolder, MultipartFile multipartFile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String write(String baseFolder, String fileName, MultipartFile multipartFile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update(String url, String baseFolder, MultipartFile multipartFile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update(String url, String baseFolder, String fileName, MultipartFile multipartFile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(String url) {
		// TODO Auto-generated method stub
		return false;
	}

}
