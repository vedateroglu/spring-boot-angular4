package com.vesg;

import org.springframework.web.bind.annotation.*;

/**
 * Created by Vedat on 7/10/2017.
 */

@RestController
@CrossOrigin("*")
public class ServerRestController {

    String name = "Software Developer";

    @RequestMapping(value = "/message",method = RequestMethod.GET)
    public String getMessage(){
        return "Hello, " + name + " !";
    }

    @RequestMapping(value = "/name/{name}",method = RequestMethod.POST)
    public String setName(@PathVariable(name = "name") String name){
        if(!this.name.isEmpty())
            this.name = name;
        else
            this.name = "Software Developer";

        return  "Transaction successful!";
    }
}