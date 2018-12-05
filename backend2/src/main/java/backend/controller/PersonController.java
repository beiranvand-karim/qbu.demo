package backend.controller;

import backend.model.Person;
import org.bson.types.ObjectId;
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

    @GetMapping("/person/{id}")
    public Person getPerson(@PathVariable ObjectId id){
        return personService.findById(id);
    }

    @GetMapping("/person")
    public List<Person> getAll(){
        return personService.getAll();
    }

    @PutMapping("/person/{id}")
    public String update(@PathVariable ObjectId id, @RequestBody Person person){
        Person p = personService.updateById(id, person);
        return p.toString();
    }

    @DeleteMapping("/person/{id}")
    public String delete(@PathVariable ObjectId id){
        personService.deleteById(id);
        return "deleted " + id;
    }

    @DeleteMapping("/person")
    public String deleteAll() {
        personService.deleteAll();
        return "deleted all records";
    }

}
