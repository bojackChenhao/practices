/**
 * 
 */
package com.example.springbootapi.common;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang.StringUtils;

/**
 * 签名工具类
 * @desc: common-util
 * @author: xhcheng4@iflytek.com
 * @createTime: 2017年9月18日 上午11:16:00
 * @history:
 * @version: v1.0
 */
public class SignUtil {
	
	private static final char[] HEX_DIGITS = {'0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};

    private static final String encodingAlgorithm="MD5";

    private static String characterEncoding;
    
    /**
     * Takes the raw bytes from the digest and formats them correct.
     * 
     * @param bytes the raw bytes from the digest.
     * @return the formatted bytes.
     */
    private static String getFormattedText(byte[] bytes) {
        final StringBuilder buf = new StringBuilder(bytes.length * 2);
        for (int j = 0; j < bytes.length; j++) {
            buf.append(HEX_DIGITS[(bytes[j] >> 4) & 0x0f]);
            buf.append(HEX_DIGITS[bytes[j] & 0x0f]);
        }
        return buf.toString();
    }

    /**
     * md5签名
     * @author: xhcheng4@iflytek.com
     * @createTime: 2017年10月1日 下午2:20:00
     * @history:
     * @param password
     * @return String
     */
    public static String md5Encode(final String password) {
        if (password == null) {
            return null;
        }
        try {
            MessageDigest messageDigest = MessageDigest
                .getInstance(encodingAlgorithm);

            if (!StringUtils.isEmpty(characterEncoding)) {
                messageDigest.update(password.getBytes(characterEncoding));
            } else {
                messageDigest.update(password.getBytes());
            }
            final byte[] digest = messageDigest.digest();
            return getFormattedText(digest);
        } catch (final NoSuchAlgorithmException e) {
            throw new SecurityException(e);
        } catch (final UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }
	
	/**
	 * AES加密
	 * @param content
	 * @param key
	 * @return
	 * @throws InvalidKeyException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws UnsupportedEncodingException
	 * @throws InvalidAlgorithmParameterException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 */
	public static String encryptAES(String content, String key)
			throws InvalidKeyException, NoSuchAlgorithmException,
			NoSuchPaddingException, UnsupportedEncodingException,
			InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		byte[] byteContent = content.getBytes("UTF-8");
		// 注意，为了能与 iOS 统一
		// 这里的 key 不可以使用 KeyGenerator、SecureRandom、SecretKey 生成
		byte[] enCodeFormat = key.getBytes();
		SecretKeySpec secretKeySpec = new SecretKeySpec(enCodeFormat, "AES");
		byte[] initParam = key.getBytes();
		IvParameterSpec ivParameterSpec = new IvParameterSpec(initParam);
		// 指定加密的算法、工作模式和填充方式
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
		byte[] encryptedBytes = cipher.doFinal(byteContent);
		// 同样对加密后数据进行 base64 编码
		Base64 base64 = new Base64();
		return base64.encodeAsString(encryptedBytes);
	}

	/**
	 * AES解密
	 * @param content
	 * @param key
	 * @return
	 * @throws InvalidKeyException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws InvalidAlgorithmParameterException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws IOException
	 */
	public static String decryptAES(String content, String key)
			throws InvalidKeyException, NoSuchAlgorithmException,
			NoSuchPaddingException, InvalidAlgorithmParameterException,
			IllegalBlockSizeException, BadPaddingException, IOException {
		// base64 解码
		Base64 base64 = new Base64();
		byte[] encryptedBytes =base64.decode(content);
		byte[] enCodeFormat = key.getBytes();
		SecretKeySpec secretKey = new SecretKeySpec(enCodeFormat, "AES");
		byte[] initParam = key.getBytes();
		IvParameterSpec ivParameterSpec = new IvParameterSpec(initParam);
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, secretKey, ivParameterSpec);
		byte[] result = cipher.doFinal(encryptedBytes);
		return new String(result, "UTF-8");
	}
	
	/**
	 * 生成数据
	 * @author: rhzhao
	 * @createTime: 2017年9月22日 上午10:26:02
	 * @history:
	 * @param params void
	 */
	public static String produceData(Map<String, String> params){
		StringBuilder data = new StringBuilder();
		Collection<String> keyset= params.keySet();  
		List<String> list = new ArrayList<String>(keyset);
		Collections.sort(list);
		for (int i = 0; i < list.size(); i++) { 
			data.append(list.get(i) + "=" + params.get(list.get(i)));
			if(i != list.size()-1){
				data.append("&");
			}
		}
		String p= null;
		try {
			p = URLEncoder.encode(data.toString(), "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.out.println(p);
		return p;
	}

	public static void main(String[] args) throws NoSuchPaddingException, BadPaddingException, InvalidAlgorithmParameterException, NoSuchAlgorithmException, IllegalBlockSizeException, IOException, InvalidKeyException {
		
		/**
		 * 统一认证中心分配应用的appCode和appSercert
		 * appCode:xxxx
		 * appSercert:xxxx
		 */
		
		String appCode = "test";
		String appSercert = "1234567890123456";
		
		/**
		 * 签名方法中：
		 * head：
		 * 	1、time参数如下获取
		 * 	2、appCode申请提供
		 *  3、sign如下生成	 
		 */
		
		String time = (new SimpleDateFormat("yyyyMMddHHmmss")).format(new Date());
		Map<String, String> params = new HashMap<String, String>();
		params.put("time","20171231230000");
		params.put("appCode",appCode);
		params.put("username","vv8888");
		params.put("pwd","qwe123");
		String data = produceData(params);
		String encryptData = encryptAES(data, appSercert);
		String sign = md5Encode(encryptData);
		System.out.println("sign:" + sign);
	}
}
