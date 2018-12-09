package backend.security;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;


public class Authority implements GrantedAuthority, Serializable {
    private static final long serialVerionUID = 101200L;
    private final String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
