package sbnz.dto;

import sbnz.domain.User;

public class UserCreateDTO {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private String city;
    private String country;
    private Integer phoneNumber;
    private String profession;
    private String companyInformation;
    public UserCreateDTO() {

    }
    public UserCreateDTO(User user) {
        this(user.getFirstName(), user.getLastName(), user.getEmail(), user.getCity(),
                user.getCountry(), user.getProfession());
    }
    public UserCreateDTO(String firstName, String lastName, String email, String city, String country,
                         String profession) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.country = country;
        this.profession = profession;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCompanyInformation() {
        return companyInformation;
    }

    public void setCompanyInformation(String companyInformation) {
        this.companyInformation = companyInformation;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
}
