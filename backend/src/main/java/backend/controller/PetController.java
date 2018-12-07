package backend.controller;

import backend.model.Pet;
import backend.repository.PetRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/pet")
public class PetController {

    @Autowired
    PetRepository petRepository;

    @GetMapping
    public List<Pet> readAllPets() {
        return petRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pet readPet(@PathVariable() ObjectId id) {
        return petRepository.findById(id);
    }

    @PostMapping
    public Pet createPet(@Valid @RequestBody Pet pet) {
        return petRepository.save(pet);
    }

    @DeleteMapping("/{id}")
    public void deletePet(@PathVariable ObjectId id) {
        petRepository.delete(petRepository.findById(id));
    }

    @PutMapping("/{id")
    public void updatePet(@PathVariable ObjectId id, @Valid @RequestBody Pet pet) {
    }
}
