package sbnz.model.builder;

import sbnz.model.Customer;

/**
 *
 * @author esteban
 */
public class CustomerBuilder {
    
    private final Customer instance;
    private static Long customerIdGenerator = 0L;
    public CustomerBuilder() {
        instance = new Customer();
        instance.setCustomerId(customerIdGenerator++);
    }
    
    public CustomerBuilder withId(Long id){
        instance.setCustomerId(id);
        return this;
    }
    
    public CustomerBuilder withName(String name){
        instance.setName(name);
        return this;
    }
    
    public CustomerBuilder withAge(int age){
        instance.setAge(age);
        return this;
    }
    
    public CustomerBuilder withCategory(Customer.Category category){
        instance.setCategory(category);
        return this;
    }
    
    public CustomerBuilder withEmail(String email){
        instance.setEmail(email);
        return this;
    }
    
    public Customer build(){
        return instance;
    }

    public CustomerBuilder end() {
        return this;
    }
    
}
