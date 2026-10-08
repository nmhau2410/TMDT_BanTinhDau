package com.tinhdau.backend.service;

import com.tinhdau.backend.dto.RegisterRequest;
import com.tinhdau.backend.entity.Role;
import com.tinhdau.backend.entity.User;
import com.tinhdau.backend.repository.RoleRepository;
import com.tinhdau.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
@Service
public class AuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final OtpService otpService;
    public AuthService(UserRepository userRepository, RoleRepository roleRepository, OtpService otpService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.otpService = otpService;
    }
    @Transactional
    public String registerUser(RegisterRequest request) {
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            if (user.getEmailVerified()) {
                throw new RuntimeException("Email is already registered and verified.");
            }
        } else {
            User newUser = new User();
            newUser.setEmail(request.getEmail());
            newUser.setPassword(request.getPassword());
            newUser.setPasswordHash(request.getPassword());
            newUser.setFullName(request.getFullName());
            newUser.setPhone(request.getPhone());
            newUser.setStatus("PENDING");
            newUser.setEmailVerified(false);
            String roleName = request.getRoleName() != null ? request.getRoleName() : "CUSTOMER";
            Role role = roleRepository.findByName(roleName).orElseThrow(() -> new RuntimeException("Role not found"));
            newUser.setRole(role);
            userRepository.save(newUser);
        }
        otpService.generateAndSendOtp(request.getEmail());
        return "OTP sent successfully to " + request.getEmail();
    }
    @Transactional
    public String verifyOtp(String email, String otp) {
        boolean isValid = otpService.verifyOtp(email, otp);
        if (!isValid) {
            throw new RuntimeException("Invalid or expired OTP");
        }
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        user.setEmailVerified(true);
        user.setStatus("ACTIVE");
        userRepository.save(user);
        return "Email verified and account activated successfully";
    }
}
