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

    @PostMapping("/create")
    public String create(@RequestBody String firstName, @RequestBody String lastName, @RequestBody int age) {
        Person p = personService.create(firstName, lastName, age);
        return p.toString();
    }

    @GetMapping("/get")
    public Person getPerson(@RequestParam String firstName){
        return personService.findByFirstName(firstName);
    }

    @GetMapping("/getAll")
    public List<Person> getAll(){
        return personService.getAll();
    }

    @PutMapping("/update")
    public String update(@RequestParam String firstName, @RequestParam String lastName, @RequestParam int age){
        Person p = personService.update(firstName, lastName, age);
        return p.toString();
    }

    @DeleteMapping("/delete")
    public String delete(@RequestParam String firstName){
        personService.delete(firstName);
        return "deleted " + firstName;
    }

    @DeleteMapping("/deleteAll")
    public String deleteAll() {
        personService.deleteAll();
        return "deleted all records";
    }

}
