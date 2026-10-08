package com.tinhdau.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;
    @Column(nullable = false, unique = true, length = 150)
    private String email;
    @Column(name = "password_hash", nullable = false, length = 255)
    private String passwordHash;
    @Column(name = "password", nullable = false, length = 255)
    private String password;
    @Column(name = "full_name", nullable = false, length = 150)
    private String fullName;
    @Column(length = 30)
    private String phone;
    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;
    @Column(length = 20)
    private String status = "PENDING";
    @Column(name = "email_verified")
    private Boolean emailVerified = false;
    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(name = "enabled")
    private Boolean enabled = true;
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();
    @PreUpdate
    public void setUpdatedAt() {
        this.updatedAt = LocalDateTime.now();
    }
}
