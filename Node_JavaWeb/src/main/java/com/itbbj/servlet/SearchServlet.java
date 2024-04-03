package com.itbbj.servlet;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/search")
public class SearchServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取请求方式 - GET
        System.out.println(request.getMethod());
        //获取请求URL地址 - http://localhost:8080/search
        System.out.println(request.getRequestURL());
        //获取请求主机 - localhost:8080
        System.out.println(request.getHeader("host"));
        //获取虚拟项目路径 -
        System.out.println(request.getContextPath());
        //获取请求访问映射 /search
        System.out.println(request.getServletPath());
        //获取请求参数 /search?username=jack
        String username = request.getParameter("username");
        System.out.println(username);

        //设置响应头信息 - 响应内容字符编码
        response.setHeader("content-type","text/html;charset=utf-8");
        PrintWriter printWriter = response.getWriter();
        //页面上写入相关字符
        printWriter.write("hello,"+username);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
