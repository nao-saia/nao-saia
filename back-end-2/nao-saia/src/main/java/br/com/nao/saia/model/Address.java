package br.com.nao.saia.model;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;

public class Address {

    private GeoJsonPoint geocode;

    private String street;

    private String city;

    private String state;

    private String district;

    private String zipcode;

    public GeoJsonPoint getGeocode() {
        return geocode;
    }

    public void setGeocode(GeoJsonPoint geocode) {
        this.geocode = geocode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
}
