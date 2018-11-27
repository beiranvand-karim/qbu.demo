package backend.controller;

import backend.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import backend.service.PersonService;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("/person")
    public String create(@RequestBody Person person) {
        Person p = personService.create(person);
        return p.toString();
    }

    @GetMapping("/get")
    public Person getPerson(@RequestParam String firstName){
        return personService.findByFirstName(firstName);
    }

    @GetMapping("/person")
    public List<Person> getAll(){
        return personService.getAll();
    }

    @PutMapping("/person")
    public String update(@RequestParam String firstName, @RequestParam String lastName, @RequestParam int age){
        Person p = personService.update(firstName, lastName, age);
        return p.toString();
    }

    @DeleteMapping("/delete")
    public String delete(@RequestParam String firstName){
        personService.delete(firstName);
        return "deleted " + firstName;
    }

    @DeleteMapping("/person")
    public String deleteAll() {
        personService.deleteAll();
        return "deleted all records";
    }

}
