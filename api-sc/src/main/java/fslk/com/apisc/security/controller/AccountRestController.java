package fslk.com.apisc.security.controller;

import fslk.com.apisc.security.auth.AppUser;
import fslk.com.apisc.security.RegisterForm;
import fslk.com.apisc.security.services.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class AccountRestController {

    @Autowired
    private AccountServiceImpl accountService;

    @PostMapping(value = "/register")
    public AppUser register(@RequestBody RegisterForm userForm){
        if (!userForm.getPassword().equals(userForm.getRepassword())) throw new RuntimeException("You mast confirm your password");
        AppUser user = accountService.findUserByUsername(userForm.getUsername());
        if (user != null) throw new RuntimeException("this user already exists");
        AppUser appUser = new AppUser();
        appUser.setUsername(userForm.getUsername());
        appUser.setPassword(userForm.getPassword());
        accountService.saveUser(appUser);
        accountService.addRoleToUser(userForm.getUsername(), "USER");
        return appUser;
    }


}
