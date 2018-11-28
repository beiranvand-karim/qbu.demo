package backend.service;

import backend.model.Person;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backend.repository.PersonRepository;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person create(Person person) {
        return personRepository.save(person);
    }

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person findByFirstName(String firstName) {
        return personRepository.findByFirstName(firstName);
    }

    public Person findById(ObjectId id) {
        return personRepository.findById(id);
    }

    public Person update(String firstName, String lastName, int age) {
        Person p = personRepository.findByFirstName(firstName);
        p.setLastName(lastName);
        p.setAge(age);
        return personRepository.save(p);
    }

    public void deleteAll(){
        personRepository.deleteAll();
    }

    public String deleteById(ObjectId id) {
        return personRepository.deleteById(id);
    }

    public Person updateById(ObjectId id, Person person) {
        Person p = personRepository.findById(id);
        p.setFirstName(person.getFirstName());
        p.setLastName(person.getLastName());
        p.setAge(person.getAge());
        return personRepository.save(p);
    }

    public void delete(String firstName) {
        Person p = personRepository.findByFirstName(firstName);
        personRepository.delete(p);
    }
}
