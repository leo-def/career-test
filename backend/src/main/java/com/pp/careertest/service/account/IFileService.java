package com.pp.careertest.service.account;

import org.springframework.web.multipart.MultipartFile;

public interface IFileService {
    String write(String baseFolder, MultipartFile multipartFile);
    String write(String baseFolder, String fileName, MultipartFile multipartFile);
    String update(String url, String baseFolder, MultipartFile multipartFile);
    String update(String url, String baseFolder, String fileName, MultipartFile multipartFile);
    boolean delete(String url);
}
