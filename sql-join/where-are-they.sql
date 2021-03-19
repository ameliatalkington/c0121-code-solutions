select  "cities"."name" as "city",
        "addresses"."line1",
        "addresses"."district",
        "countries"."name" as "country"
  from  "cities"
  join  "addresses" using ("cityId")
  join  "countries" using ("countryId");
