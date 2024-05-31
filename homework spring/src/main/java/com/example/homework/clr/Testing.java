package com.example.homework.clr;


import com.example.homework.Service.DonationService;
import com.example.homework.beans.Donations;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
@RequiredArgsConstructor
@Order(1)
@Component
public class Testing implements CommandLineRunner {
    private final DonationService donationService;

    @Override
    public void run(String... args) throws Exception {
        try {
            Donations donations = Donations.builder()
                    .id(1)
                    .name("Shy")
                    .donationAmount(1940)
                    .blessing("IM A good man ")
                    .build();

            Donations donations2 = Donations.builder()
                    .id(2)
                    .name("Tamir")
                    .donationAmount(150)
                    .blessing("Have Fun ")
                    .build();

            donationService.addDonation(donations);
            donationService.addDonation(donations2);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
