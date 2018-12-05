package backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(NoOpPasswordEncoder.getInstance())
                .withUser("ajay")
                .password("test")
                .roles("USER")
                .and()
                .withUser("demo")
                .password("test2")
                .roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeRequests()
                .antMatchers("**/hello").hasRole("USER")
                .anyRequest()
                .fullyAuthenticated()
                .and()
                .httpBasic();
        httpSecurity
                .csrf()
                .disable();
    }
}
