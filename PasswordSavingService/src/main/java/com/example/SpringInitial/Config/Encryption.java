package com.example.SpringInitial.Config;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;

public class Encryption
{

    private static final String ALGORITHM = "AES/CBC/PKCS5Padding";
    private static final String SECRET_KEY_ALGORITHM = "PBKDF2WithHmacSHA256";
    private static final int ITERATIONS = 65536;
    private static final int KEY_SIZE = 256;



    public static String[] getDecryptedSecretsArray(String password) throws Exception
    {
        String encryptedString[]= {"jTs+bfzFp/rjtGOrfb3xaHdebe4GA+2/oovPcb2OYAaz3L7dJU06kcPLXc7rUo8sq/5Me5AO96CPYGXRGd4aoQowe6BFRHR5PV5Lvz90l/WandIM3NQfUpLw5H6oX39HMpfaQJDuGvvArmwQy7kOmCOwGyLp/uVr9nkYh3xTKU0=",
            "a+SSzqnEGzd+cFm+7ZrmM5qPHViic0KqsWUsnAMEnLcY2pjAJiAPz2cPnH4p31ZIih3cz8ZVvXFVBkT2iSI7YV3D2J6ro7Jn/p/dbKoSe7WhjXSmQqzGpsv2dVj4LrnpyOcI/mTvuACILOZSXCWj6+iQjiucJ8hKuvx6oRBDJcLgnu3E/+L5w4xvCT/tBAcUJeHULoIv2McqvCa+Th8H+GvnKsXj4bw5flos9SrnnQ6LpdWUjYm9UU+j3u/kAd3tzwaLPD5oAPm6M6aSn4EuKpQEZe6Cn6GCahWi5ePIAhO5Ti6aaAJ/0W8j0HWsxlnfB2GSvI5J9yRyAAOlRbAFww==",
            "BvrjWnZW5FNXSvi1w5Ri01hhnbcSFeXSPgG5FW5dO1C0Wr/pszbDsmKMHgEfXfMvC2vVYtROgeY7Xn3Ca3IW+uxtuOgIIDXvo2B/1wfKU5k=",
            "DN4EEBnuZkgR5VE7vDKb651wGK3fH7OTD5kJUDNqCBcuSFm97TplXAoEnAd6oDv9er35j+PvJ57M96f3ZcqqJVpqqasumsNEbaSzxee1k/M="};


        for (int i = 0; i < encryptedString.length; i++)
        {
            encryptedString[i]=decrypt(encryptedString[i],password);

        }
        return encryptedString;
    }




    public static String encrypt(String plaintext, String password) throws Exception
    {
        // Generate a random IV (Initialization Vector)
        byte[] iv = new byte[16];
        // You should use a cryptographically secure random number generator
        // to generate the IV, but this is for demonstration purposes only.

        // Create SecretKey from password using PBKDF2
        SecretKey secretKey = generateSecretKey(password);

        // Create and initialize the cipher
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, new IvParameterSpec(iv));

        // Encrypt the plaintext
        byte[] encryptedBytes = cipher.doFinal(plaintext.getBytes("UTF-8"));

        // Encode the encrypted data as a Base64 string
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public static String decrypt(String ciphertext, String password) throws Exception
    {
        // Decode the Base64 encoded ciphertext
        byte[] encryptedBytes = Base64.getDecoder().decode(ciphertext);

        // Generate a random IV (Initialization Vector)
        byte[] iv = new byte[16];
        // You should use a cryptographically secure random number generator
        // to generate the IV, but this is for demonstration purposes only.

        // Create SecretKey from password using PBKDF2
        SecretKey secretKey = generateSecretKey(password);

        // Create and initialize the cipher
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, secretKey, new IvParameterSpec(iv));

        // Decrypt the ciphertext
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);

        // Convert the decrypted bytes to a String
        return new String(decryptedBytes, "UTF-8");
    }

    private static SecretKey generateSecretKey(String password) throws Exception
    {

        SecretKeyFactory factory = SecretKeyFactory.getInstance(SECRET_KEY_ALGORITHM);
        KeySpec spec = new PBEKeySpec(password.toCharArray(), new byte[16], ITERATIONS, KEY_SIZE);
        SecretKey secretKey = new SecretKeySpec(factory.generateSecret(spec).getEncoded(), "AES");
        return secretKey;
    }

    public static void main(String abs) throws Exception
    {
        String []  plainArray={

        };

        ArrayList<String> encryptedStrings=new ArrayList<>();
        for(String str:plainArray)
        {
            String encryptedString=encrypt(str,"");
            encryptedStrings.add(encryptedString);
        }
        System.out.println("Encrypted String Array is "+ encryptedStrings);

    }


}
