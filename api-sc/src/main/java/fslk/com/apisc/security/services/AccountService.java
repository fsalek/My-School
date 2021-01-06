package fslk.com.apisc.security.services;



import fslk.com.apisc.security.auth.AppRole;
import fslk.com.apisc.security.auth.AppUser;

import java.util.List;

public interface AccountService {
    public AppUser saveUser(AppUser user);
    // public AppUser saveUser(String username, String password, String confirmedPassword);
    public AppRole saveRole(AppRole role);
    public void addRoleToUser(String username, String roleName);
    AppUser findUserByUsername(String username);
}
