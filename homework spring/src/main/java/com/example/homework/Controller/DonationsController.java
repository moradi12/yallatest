package com.example.homework.Controller;

import com.example.homework.Exceptions.DonationNotFoundException;
import com.example.homework.Service.DonationService;
import com.example.homework.beans.Donations;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/api/donations")
public class DonationsController {
    private final DonationService donationService;

    @PostMapping("/add")
    public String addDonation(@RequestBody Donations donations) {
        donationService.addDonation(donations);
        return "Donation added successfully!";
    }

    @GetMapping("/list")
    public List<Donations> getAllDonations() {
        return donationService.findAll();
    }

    @GetMapping("/name/{name}")
    public Donations getDonationByName(@PathVariable String name) {
        return donationService.findByName(name)
                .orElseThrow(() -> new DonationNotFoundException("Donation with name " + name + " not found"));
    }

    @GetMapping("/amount/less_than/{amount}")
    public List<Donations> getDonationsByAmountLessThan(@PathVariable double amount) {
        return donationService.getLessThan(amount);
    }

    @GetMapping("/amount/greater_than/{amount}")
    public List<Donations> getDonationsByAmountGreaterThan(@PathVariable double amount) {
        return donationService.getGreaterThan(amount);
    }

    @GetMapping("/{id}")
    public Donations getDonationById(@PathVariable int id) {
        return donationService.findById(id);
    }
}