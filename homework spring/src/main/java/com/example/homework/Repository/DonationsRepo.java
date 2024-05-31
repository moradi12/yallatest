package com.example.homework.Repository;

import com.example.homework.beans.Donations;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DonationsRepo extends JpaRepository<Donations,Integer> {

    Optional<Donations> findByName(String name);
    List<Donations> findByDonationAmountLessThan(double amount);

    List<Donations> findByDonationAmountGreaterThan(double amount);}
