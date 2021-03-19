--List the 5 most profitable DVD titles in inventory.
select  "films"."title",
        sum("payments"."amount") - "films"."replacementCost" as "profit"
  from  "films"
  join  "inventory" using ("filmId")
  join  "rentals" using ("inventoryId")
  join  "payments" using ("rentalId")
  group by "filmId"
  order by "profit" desc
  limit 5;
