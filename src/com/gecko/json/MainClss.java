package com.gecko.json;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

/**
 * Created by hlieu on 5/2/16.
 */
public class MainClss {
    public static void main(String args[]) {
        String json_value = "{ \"name\" : \"mac\", \"age\" : 32 }";

        JSONObject obj = (JSONObject) JSONValue.parse(json_value);
        System.out.println(obj.get("name").toString());

    }
}
