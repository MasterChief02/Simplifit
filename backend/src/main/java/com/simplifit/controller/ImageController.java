package com.simplifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.simplifit.model.Image;
import com.simplifit.service.ImageService;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @GetMapping()
    public String getImages() {
        return "Images";
    }

     @PostMapping("/upload")
    public ResponseEntity<Map<String,String>> uploadImage(@RequestParam("file") MultipartFile file) {
        

        try {
            System.out.println("Recv");
            Image image = imageService.store(file);

            Map<String,String> response = new HashMap<>();

            response.put("image_id", image.getId());

            return new ResponseEntity<>( response, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(  HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable String id) {
        Image image = imageService.getImage(id);
        if (image != null) {
             
            return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(image.getContentType()))
            .body(image.getData());
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
