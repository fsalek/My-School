package fslk.com.apisc.security;

import lombok.Data;

@Data
public class RegisterForm {
    private String username;
    private String password;
    private String repassword;

}
