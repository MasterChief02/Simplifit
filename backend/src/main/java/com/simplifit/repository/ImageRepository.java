package com.simplifit.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.simplifit.model.Image;

public interface ImageRepository extends MongoRepository<Image, String> {
}
