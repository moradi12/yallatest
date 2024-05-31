package com.example.homework.Service;

import com.example.homework.Exceptions.DonationNotFoundException;
import com.example.homework.Repository.DonationsRepo;
import com.example.homework.beans.Donations;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DonationService {
    private final DonationsRepo donationsRepo;

    public Optional<Donations> findByName(String name) {
        return donationsRepo.findByName(name);
    }

    public List<Donations> findAll() {
        return donationsRepo.findAll();
    }

    public Donations addDonation(Donations donation) {
        return donationsRepo.save(donation);
    }

    public List<Donations> getLessThan(Double amount) {
        return donationsRepo.findByDonationAmountLessThan(amount);
    }

    public List<Donations> getGreaterThan(Double amount) {
        return donationsRepo.findByDonationAmountGreaterThan(amount);
    }

    public Donations findById(int id) {
        return donationsRepo.findById(id)
                .orElseThrow(() -> new DonationNotFoundException("Donation with id " + id + " not found"));
    }

}
