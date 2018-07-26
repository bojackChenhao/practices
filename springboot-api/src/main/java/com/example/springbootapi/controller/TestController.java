package com.example.springbootapi.controller;

import com.example.springbootapi.common.SignUtil;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;


@Controller
public class TestController {
    @GetMapping(value="/login")
    public String login(){
        return "login";
    }
    @PostMapping(value="/login")
    public String idAuthentication(HttpServletRequest request) throws InvalidKeyException, NoSuchAlgorithmException,
            NoSuchPaddingException, UnsupportedEncodingException,
            InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
        String username = request.getParameter("username");
        String username1 = java.net.URLEncoder.encode(username, "UTF-8");
        String password = request.getParameter("password");
        String password1 = java.net.URLEncoder.encode(password, "UTF-8");
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");//设置日期格式
        String date = df.format(new Date());// new Date()为获取当前系统时间，也可使用当前时间戳
        CloseableHttpClient httpClient = HttpClients.createDefault();
        String entityStr = null;
        String sign = null;
        String appCode = "test_123";
        String appCode1 = java.net.URLEncoder.encode(appCode, "UTF-8");
        String appSecret = "1234567890123456";
//        sign = "appCode="+appCode+"&time="+date;
        sign = "appCode="+appCode1+"&time="+date+"&pwd="+password1+"&username="+username;
        CloseableHttpResponse response = null;
        String sign1 = SignUtil.encryptAES(sign,appSecret);
        String sign2 = SignUtil.md5Encode(sign1);
        try {
            // 创建POST请求对象
            HttpPost httpPost = new HttpPost("http://61.190.70.197:8800/uccp-service/login/person/loginByUsernameAndPwd");
            /*
             * 添加请求参数
             */
            // 创建请求参数
            List<NameValuePair> list = new LinkedList<>();
            BasicNameValuePair param1 = new BasicNameValuePair("username", username);
            BasicNameValuePair param2 = new BasicNameValuePair("pwd", password);
            list.add(param1);
            list.add(param2);
            // 使用URL实体转换工具
            UrlEncodedFormEntity entityParam = new UrlEncodedFormEntity(list, "UTF-8");
            httpPost.setEntity(entityParam);
            /*
             * 添加请求头信息
             */
            // 请求头添加时间戳
            httpPost.addHeader("time", date);
            // 请求头添加appCode
            httpPost.addHeader("appCode", appCode);
            // 请求头添加签名
            httpPost.addHeader("sign", sign2);

            // 执行请求
            response = httpClient.execute(httpPost);
            // 获得响应的实体对象
            HttpEntity entity = response.getEntity();
            // 使用Apache提供的工具类进行转换成字符串
            entityStr = EntityUtils.toString(entity, "UTF-8");

            // System.out.println(Arrays.toString(response.getAllHeaders()));

        } catch (ClientProtocolException e) {
            System.err.println("Http协议出现问题");
            e.printStackTrace();
        } catch (ParseException e) {
            System.err.println("解析错误");
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("IO异常");
            e.printStackTrace();
        } finally {
            // 释放连接
            if (null != response) {
                try {
                    response.close();
                    httpClient.close();
                } catch (IOException e) {
                    System.err.println("释放连接出错");
                    e.printStackTrace();
                }
            }
        }

        // 打印响应内容
        System.out.println(entityStr);
        return "home";
    }
}